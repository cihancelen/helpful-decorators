/**
 * Gets the formatted number by Intl.NumberFormat.
 * @param locale {String}
 * @param options {Intl.NumberFormatOptions}
 * @returns {Function}
 */
export function FormatNumber(locale: string, options?: Intl.NumberFormatOptions): Function {
  return function (target: Object, key: string | symbol) {
    let value = (target as any)[key] as string | number

    Object.defineProperty(target, key, {
      get: () => value,
      set: (v: string | number) => {
        value = new Intl.NumberFormat(locale, options).format(+v)
      },
      enumerable: true,
      configurable: true
    })
  }
}
