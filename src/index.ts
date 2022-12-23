import { FormatNumber } from './format-number';

class Test {
  @FormatNumber('tr-TR', { style: 'currency', currency: 'TRY' })
  cost = 123

  @FormatNumber('de-DE', { style: 'currency', currency: 'EUR' })
  costEuro = 123
}

function main() {
  const test = new Test();

  console.log(test.cost);
  console.log(test.costEuro);
}

main()

