module.exports = function toReadable (number) {
    if (number === 0) return 'zero';

    let numeral = new Map ([
        [1, 'one'], [2, 'two'], [3, 'three'], [4, 'four'], [5, 'five'], [6, 'six'], [7, 'seven'],
        [8, 'eight'], [9, 'nine'], [10, 'ten'], [11, 'eleven'], [12, 'twelve'], [13, 'thirteen'],
        [14, 'fourteen'], [15, 'fifteen'], [16, 'sixteen'], [17, 'seventeen'], [18, 'eighteen'],
        [19, 'nineteen'], [20, 'twenty'], [30, 'thirty'], [40,'forty'], [50, 'fifty'], [60,'sixty'],
        [70, 'seventy'], [80, 'eighty'], [90, 'ninety'], [100, 'hundred'], [1000,'thousand']
    ]);

    let masNumber = String(number).split('').map(item => +item).reverse();

    if (masNumber[1]) masNumber[1] *= 10;

    if (masNumber[1] == 10) {
        masNumber[1] += masNumber[0];
        masNumber[0] = 0;
    }

    //.trim() - remove spaces from both ends
	return masNumber.reduceRight((current, item, index) => (item == 0) ? (current + '') :
    (index <= 1) ? (current + ' ' + numeral.get(item)) :
    (current + ' ' + numeral.get(item) + ' ' + numeral.get(10 ** index)), '').trim();
 }


