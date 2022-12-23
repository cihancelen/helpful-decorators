import { Call } from './call';
import { FormatNumber } from './format-number';

class Test {
  @FormatNumber('tr-TR', { style: 'currency', currency: 'TRY' })
  cost = 123

  @FormatNumber('de-DE', { style: 'currency', currency: 'EUR' })
  costEuro = 123

  @Call(Math.random() * 10 > 5)
  alert() {
    console.log('The method is called.');
  }
}

function main() {
  const test = new Test();

  console.log(test.cost);
  console.log(test.costEuro);

  test.alert();
}

main()

