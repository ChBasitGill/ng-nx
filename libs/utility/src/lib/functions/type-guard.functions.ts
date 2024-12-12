/**
 * Checks if the given value is of type `undefined`.
 *
 * @param x - The value to check.
 * @returns `true` if the value is `undefined`, otherwise `false`.
 */
export const isUndefined = (x: unknown): x is undefined =>
  typeof x === 'undefined'

/**
 * Checks if the given value is `null`.
 *
 * @param x - The value to check.
 * @returns `true` if the value is `null`, otherwise `false`.
 */
export const isNull = (x: unknown): x is null => x === null

/**
 * Checks if the given value is either `null` or `undefined`.
 *
 * @param x - The value to check.
 * @returns `true` if the value is `null` or `undefined`, otherwise `false`.
 */
export const isNullish = (x: unknown): x is null | undefined =>
  isUndefined(x) || isNull(x)

/**
 * Checks if the given value is neither `null` nor `undefined`.
 *
 * This is a negation of the `isNullish` function, useful for narrowing types to
 * ensure the value is not null or undefined.
 *
 * @param x - The value to check.
 * @returns `true` if the value is neither `null` nor `undefined`, otherwise `false`.
 */
export const notNullish = <T>(x: T): x is NonNullable<T> => !isNullish(x)

/**
 * Checks if the given value is of type `string`.
 *
 * @param x - The value to check.
 * @returns `true` if the value is a string, otherwise `false`.
 */
export const isString = (x: unknown): x is string => typeof x === 'string'

/**
 * Checks if the given value is of type `number`.
 *
 * @param x - The value to check.
 * @returns `true` if the value is a number, otherwise `false`.
 */
export const isNumber = (x: unknown): x is number => typeof x === 'number'
/**
 * Checks if the given value is an array.
 *
 * @param x - The value to check.
 * @returns `true` if the value is an array, otherwise `false`.
 */
export const isArray = (x: unknown) => Array.isArray(x)
/**
 * Checks if the given value is of type `object`, excluding `null`.
 *
 * @param x - The value to check.
 * @returns `true` if the value is an object and not `null`, otherwise `false`.
 */
export const isObject = (x: unknown): x is Record<string, unknown> => {
  return notNullish(x) && typeof x === 'object' && !isArray(x)
}

/**
 * Checks if the given value is of type `boolean`.
 *
 * @param x - The value to check.
 * @returns `true` if the value is a boolean, otherwise `false`.
 */
export const isBoolean = (x: unknown): x is boolean => typeof x === 'boolean'

/**
 * Inverts a boolean value.
 *
 * @param x - A boolean value to negate.
 * @returns The negated boolean value.
 */
export const not = (x: boolean): boolean => !x

/**
 * Creates a shallow copy of the provided object or array.
 *
 * @param obj - The object or array to copy.
 * @returns A new object or array that is a shallow copy of the original.
 */
export const shallowCopy = <T>(obj: T): T => ({ ...obj })

/**
 * Checks if the provided value is empty.
 *
 * The behavior depends on the type of `x`:
 * - If it's an array, it checks if the length is 0.
 * - If it's an object, it checks if there are no keys.
 * - If it's a string, it checks if the string is empty.
 * - If it's a `Map`, it checks if it has no entries.
 *
 * @param x - The value to check (can be a string, object, array, or `Map`).
 * @returns `true` if the value is empty, otherwise `false`.
 */

export const isEmpty = <T>(x: T | T[]): boolean => {
  if (isArray(x)) {
    return x.length === 0
  }
  if (isObject(x)) {
    return Object.keys(x).length === 0
  }
  if (isString(x)) {
    return x === ''
  }
  if (x instanceof Map) {
    return x.size === 0
  }
  return false
}

/**
 * Checks if the given value is either nullish or empty.
 * A value is considered nullish if it's either `null` or `undefined`,
 * and a value is considered empty if it's an empty string, object, array, or `Map`.
 *
 * @param x - The value to check.
 * @returns `true` if the value is either nullish or empty, otherwise `false`.
 */
export const isNullishOrEmpty = <T>(x: T | T[]): boolean => {
  return isNullish(x) || isEmpty(x)
}

/**
 * Adds two numbers together.
 *
 * @param a - The first number to add.
 * @param b - The second number to add.
 * @returns The sum of the two numbers.
 */
export const listSum = (a: number, b: number): number => a + b

/**
 * Sums all numbers in a list.
 *
 * @param list - A list of numbers to sum.
 * @returns The sum of all numbers in the list.
 */
export const sum = (list: number[]): number =>
  list.reduce((acc, num) => acc + num, 0)
