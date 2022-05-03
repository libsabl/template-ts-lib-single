// An import from elsewhere in src
import { repeat } from '$/strings/repeat';

/**
 * A ridiculous way to multiply a number by a certain power of ten
 * @param {number} n The number to multiply. Will be truncated to an integer
 * @param {number} ordersOfMagnitude An integer number of how many zeros to add
 */
export function powten(n: number, ordersOfMagnitude: number) {
  n = Math.trunc(+n || 0);
  const om = Math.abs(Math.trunc(+ordersOfMagnitude || 0));
  const nstr = n.toFixed(0) + repeat('0', om);
  return +nstr;
}
