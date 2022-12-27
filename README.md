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

## 개발하는 방식
1. type을 먼저 정의합니다.
2. 타입에 맞춰 코드를 작성합니다.

