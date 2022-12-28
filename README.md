# functional-typescript

## 이터러블/이터레이터
- 이터러블: 이터레이터를 리턴하는 `[Symbol.iterator]()`를 가진 값
- 이터레이터: `{ value, done }` 객체를 리턴하는 `next()`를 가진 값
- 이터러블/이터레이터 프로토콜: 이터러블 `for...of`, 전개 연산자 등과 함께 동작하도록 규약.

```js
const arr = [1, 2, 3];
const iteratorArray = arr[Symbol.iterator]();

iteratorArray.next(); // { value: 1, done: false }
iteratorArray.next(); // { value: 2, done: false }
iteratorArray.next(); // { value: 3, done: false }
iteratorArray.next(); // { value: undefined, done: true }
iteratorArray.next(); // { value: undefined, done: true }

const set = new Set([1, 2, 3]);
const iteratorSet = set[Symbol.iterator]();

iteratorSet.next(); // { value: 1, done: false }
iteratorSet.next(); // { value: 2, done: false }
iteratorSet.next(); // { value: 3, done: false }
iteratorSet.next(); // { value: undefined, done: true }
iteratorSet.next(); // { value: undefined, done: true }

const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
const iteratorMap = map[Symbol.iterator]();

iteratorMap.next(); // { value: ['a', 1], done: false }
iteratorMap.next(); // { value: ['b', 2], done: false }
iteratorMap.next(); // { value: ['c', 3], done: false }
iteratorMap.next(); // { value: undefined, done: true }
iteratorMap.next(); // { value: undefined, done: true }

const keys = map.keys();
const iteratorKeys = keys[Symbol.iterator]();

const values = map.values();
const iteratorValues = values[Symbol.iterator]();

const entries = map.entries();
const iteratorEntries = entries[Symbol.iterator]();
```

### 사용자 정의 이터러블
- `Symbol.iterator` 함수를 가진 객체. `next()`를 포함한 객체를 반환한다.
- `next()`는 `{ value, done }`을 리턴하는 함수

```ts
const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i === 0 ? { done: true } : { value: i--, done: false }
      },
      [Symbol.iterator]() { return this }
    }
  }
}

const iterator = iterable[Symbol.iterator]();

for (const element of iterable) {
  console.log(element) // 3, 2, 1
}

for (const element of iterator) {
  console.log(element) // 3, 2, 1
}

const arr = [1, 2, 3];
const iteratorArray = arr[Symbol.iterator]();

for (const element of iteratorArray) {
  console.log(element) // 1, 2, 3
  console.log(iteratorArray[Symbol.iterator]() == iteratorArray) // true
}
```

### 전개 연산자
- 전개 연산작도 이터러블/이터러블에서만 사용할 수 있다.

```ts
const arr = [1, 2, 3];
const set = new Set([1, 2, 3])
const map = new Map([['a', 1], ['b', 2], ['c', 3]])

const answer = [...arr, ...set, ...map, ...map.keys(), ...map.values(), ...map.entries()]
```

## 제너레이터
- 이터레이터이자 이터러블을 생성하는 함수

```ts
function *gen() {
  yield 1;
  yield 2;
  yield 3;
}

const iter = gen();
iter[Symbol.iterator]() === iter // true
iter.next() // { value: 1, done: false }
iter.next() // { value: 2, done: false }
iter.next() // { value: 3, done: false }
iter.next() // { value: undefined, done: true }

for (const element of gen()) {
  console.log(element); // 1, 2, 3
}
```

## 개발하는 방식
1. type을 먼저 정의합니다.
2. 타입에 맞춰 코드를 작성합니다.

