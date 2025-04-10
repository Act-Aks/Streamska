/**
 * Returns an array of key-value pairs from an object with proper TypeScript typing.
 * This is a typed version of Object.entries() that maintains the correct types for keys and values.
 *
 * @template T - The type of the input object
 * @param {T} obj - The object to get entries from
 * @returns {[keyof T, T[keyof T]][]} An array of tuples containing the object's keys and values with proper typing
 *
 * @example
 * const obj = { name: 'John', age: 30 };
 * const pairs = entries(obj); // [['name', 'John'], ['age', 30]] with proper typing
 */
export function entries<T extends object>(obj: T): [keyof T, T[keyof T]][] {
    return Object.entries(obj) as [keyof T, T[keyof T]][]
}

/**
 * Returns an array of typed keys from an object.
 * This is a typed version of Object.keys() that maintains the correct key types.
 *
 * @template T - The type of the input object
 * @param {T} obj - The object to get keys from
 * @returns {(keyof T)[]} An array of the object's keys with proper typing
 *
 * @example
 * const obj = { name: 'John', age: 30 };
 * const objKeys = keys(obj); // ['name', 'age'] with proper typing
 */
export function keys<T extends object>(obj: T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[]
}

/**
 * Returns an array of typed values from an object.
 * This is a typed version of Object.values() that maintains the correct value types.
 *
 * @template T - The type of the input object
 * @param {T} obj - The object to get values from
 * @returns {T[keyof T][]} An array of the object's values with proper typing
 *
 * @example
 * const obj = { name: 'John', age: 30 };
 * const objValues = values(obj); // ['John', 30] with proper typing
 */
export function values<T extends object>(obj: T): T[keyof T][] {
    return Object.values(obj) as T[keyof T][]
}
