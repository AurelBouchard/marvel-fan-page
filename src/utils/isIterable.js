/**
 * Determine whether the given `input` is iterable.
 *
 * @returns {Boolean}
 */
export default function isIterable(input) {
    if (input === null || input === undefined) {
        return false
    }
    
    return typeof input[Symbol.iterator] === 'function'
}