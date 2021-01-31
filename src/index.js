module.exports = function toReadable(num) {
  const numbers = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
      100: 'hundred',
  };
  const getNumber = num => numbers[num];
  const getDozens = num => (num <= 20 || num % 10 === 0) ? getNumber(num) : `${getNumber(Math.floor(num / 10) * 10)} ${getNumber(num % 10)}`;
  const getHundreds = num => `${getNumber(Math.floor(num / 100))} hundred`;

  if (num <= 20) { return getNumber(num); }

  if (num < 100) { return getDozens(num); }

  if (num >= 100) { return num % 100 === 0 ? getHundreds(num) : `${getHundreds(num)} ${getDozens(num % 100)}`; }
}