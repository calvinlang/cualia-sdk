export default function (num: number | string): string {
  // @ts-ignore
  if (num === null || null === undefined || null === []) return '';
  if (num === '') return '';
  if (typeof num === 'string' && +num === NaN) return '';
  if (num === 0) return '0';
  if (!num) return '';
  // if (isNaN(num)) return '';
  if (num === Infinity) return '0';
  num = +num;
  const abs = num > 0 || num === 0 ? 1 : -1;
  num = Math.abs(num);
  if (Math.floor(num) === num) return (num * abs).toFixed();
  const splitNumber = num.toString().split('.');
  const wholeNum = splitNumber[0];
  const decimals = splitNumber[1];
  if (('.' + decimals).includes('.99')) return (num * abs).toFixed();
  if (('.' + decimals).includes('.00')) return (num * abs).toFixed();
  if (decimals.length <= 1) return (num * abs).toFixed(1);
  if (decimals.length <= 2) return (num * abs).toFixed(2);
  if (+wholeNum >= 1000) return (num * abs).toFixed();
  if (+wholeNum >= 100) return (num * abs).toFixed(1);
  if (+wholeNum >= 10) return (num * abs).toFixed(1);
  return (num * abs).toFixed(2);
}
