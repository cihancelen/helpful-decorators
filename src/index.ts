
import { Call } from './call';
import { DebouncedCall } from './debounced-call';
import { FormatNumber } from './format-number';
import { WithTax } from './with-tax';

class Test {
  @FormatNumber('tr-TR', { style: 'currency', currency: 'TRY' })
  cost = 123

  @FormatNumber('de-DE', { style: 'currency', currency: 'EUR' })
  costEuro = 123

  @WithTax(1.18)
  costWithTax = 1

  @Call(Math.random() * 10 > 5)
  alert() {
    console.log('The method is called.');
  }

  @DebouncedCall(2000)
  alert2() {
    console.log('Debounced call.', Date.now());
  }
}

function main() {
  const test = new Test();

  console.log('Cost :', test.cost);
  console.log('Cost Euro:', test.costEuro);
  console.log('Cost with tax(1.18%):', test.costWithTax);

  test.alert();

  test.alert2()
}

main()

