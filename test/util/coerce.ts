// Copyright 2022 REPO_AUTHORS. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

/* eslint-disable @typescript-eslint/no-explicit-any */

/** A silly wrapper for direct type assert */
export function coerce<T>(v: any): T {
  return <T>v;
}
