/* eslint-disable @typescript-eslint/no-explicit-any */

/** A silly wrapper for direct type assert */
export function coerce<T>(v: any): T {
  return <T>v;
}
