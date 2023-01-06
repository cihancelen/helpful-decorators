/**
 * Set with tax added.
 * @param taxRatio {number}
 * @returns {Function}
 */
export function WithTax(taxRatio: number): Function {
  return function (target: Object, key: string | symbol) {
    let value = (target as any)[key] as number

    Object.defineProperty(target, key, {
      get() { return value },
      set(v: number) {
        if (typeof v !== 'number') throw new Error('[@WithTax]: Value is not number.')

        value = v * taxRatio
      },
      enumerable: true,
      configurable: true
    })
  }
}