// Copyright 2022 REPO_AUTHORS. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

// An import from src
import { powten } from '$/numbers/powten';

// An import from test
import { coerce } from '$test/util/coerce';

describe('numbers', () => {
  describe('powten', () => {
    it('adds zeros', () => {
      const result = powten(22, 3);
      expect(result).toBe(22000);
    });

    it('truncates base number', () => {
      for (const c of [
        { in: 23.11324, out: 2300 },
        { in: -19.999, out: -1900 },
      ]) {
        const result = powten(c.in, 2);
        expect(result).toBe(c.out);
      }
    });

    it('coerces base number', () => {
      for (const v of ['hello', {}, null]) {
        const n = coerce<number>(v);
        const result = powten(n, 2);
        expect(result).toBe(0);
      }
    });

    it('truncates and gets absolute of power', () => {
      for (const c of [
        { in: 3.11324, out: 23000 },
        { in: -5.999, out: 2300000 },
      ]) {
        const result = powten(23, c.in);
        expect(result).toBe(c.out);
      }
    });

    it('coerces order of magnitude', () => {
      for (const v of ['hello', {}, null]) {
        const result = powten(11, <number>v);
        expect(result).toBe(11);
      }
    });
  });
});
