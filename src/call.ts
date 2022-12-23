/**
 * If the condition is `true` then the method/function works, otherwise it doesn't.
 * @param condition {Boolean}
 * @returns {Function}
 */
export function Call(condition: boolean): Function {
  return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      if (condition) {
        return original.apply(this, args);
      }

      return null;
    };

    return descriptor;

  }
}