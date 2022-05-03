export function repeat(msg: string, count: number = 1) {
  return new Array(count + 1).join(msg);
}