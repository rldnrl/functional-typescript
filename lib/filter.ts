/**
 *
 * @param array `Array<T>`
 * @param fn `(arg: T) => boolean`
 * @returns `Array<T>`
 *
 * @example
 * ```ts
 * filter([1, 2, 3, 4, 5, 6], (value) => value % 2 === 0)
 * ```
 */
 const filter = <T>(array: T[], fn: (arg: T) => boolean) => {
  let result: T[] = [];

  for (const value of array) {
    fn(value) ? result.push(value) : undefined;
  }

  return result;
};
