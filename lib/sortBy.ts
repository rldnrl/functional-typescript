type SortBy = <T extends object>(
  property: keyof T
) => (a: T, b: T) => 1 | 0 | -1;

/**
 *
 * @param property Object Property
 * @returns -1 | 0 | 1
 *
 * @example
 * ```ts
 * const people = [
 *   { firstName: "aaFirstName", lastName: "ccLastName" },
 *   { firstName: "bbFirstName", lastName: "bbLastName" },
 *   { firstName: "ccFirstName", lastName: "aaLastName" },
 * ]
 *
 * people.sort(sortBy("lastName"))
 * ```
 *
 * @result
 * ```ts
 * [
 *   { firstName: 'ccFirstName', lastName: 'aaLastName' },
 *   { firstName: 'bbFirstName', lastName: 'bbLastName' },
 *   { firstName: 'aaFirstName', lastName: 'ccLastName' }
 * ]
 * ```
 */
const sortBy: SortBy = (property) => (a, b) =>
  a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;

export default sortBy;
