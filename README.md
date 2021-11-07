# ts-is-record

[![npm](https://img.shields.io/npm/v/ts-is-record)](https://npm.im/ts-is-record)
[![CircleCI](https://circleci.com/gh/iyegoroff/ts-is-record.svg?style=svg)](https://circleci.com/gh/iyegoroff/ts-is-record)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/ts-is-record)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/ts-is-record?label=min+gzip)](https://bundlephobia.com/package/ts-is-record)
[![npm](https://img.shields.io/npm/l/ts-is-record.svg?t=1495378566925)](https://www.npmjs.com/package/ts-is-record)

Typescript utilities

```ts
import invariant from 'ts-tiny-invariant'

type Key = string | number | symbol

export function isRecord(value: unknown): value is Record<Key, unknown> {
  return (
    value !== null &&
    (typeof value === 'object' || typeof value === 'function') &&
    !Array.isArray(value)
  )
}

export function assertRecord(
  value: unknown,
  message: string
): asserts value is Record<Key, unknown> {
  invariant(isRecord(value), message)
}
```
