/**
 * map function
 * @param array `Array<T>`
 * @param fn `(arg: T) => T`
 * @returns `Array<T>`
 *
 * @example
 * ```js
 * map([1, 2, 3, 4, 5], (value) => value * 2) // [1, 4, 6, 8, 10]
 * ```
 */

const map = <T, U>(array: T[], fn: (arg: T) => U) => {
  let result: U[] = [];
  for (const value of array) {
    result.push(fn(value));
  }

  return result;
};

export default map;
