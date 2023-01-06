/**
 * Called after the given delay time.
 * @param debounceTime {Number} Milisecond.
 * @returns {Function}
 */
export function DebouncedCall(debounceTime: number): Function {
  return function (target: string, key: string | symbol, descriptor: PropertyDescriptor) {
    const original = descriptor.value

    descriptor.value = function (...args: any[]) {
      setTimeout(() => {
        original.apply(this, args)
      }, debounceTime);
    }

    return descriptor;
  }
}
