# ts-is-record

[![npm](https://img.shields.io/npm/v/ts-is-record)](https://npm.im/ts-is-record)
[![build](https://github.com/iyegoroff/ts-is-record/workflows/build/badge.svg)](https://github.com/iyegoroff/ts-is-record/actions/workflows/build.yml)
[![publish](https://github.com/iyegoroff/ts-is-record/workflows/publish/badge.svg)](https://github.com/iyegoroff/ts-is-record/actions/workflows/publish.yml)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/ts-is-record)
[![Bundlephobia](https://img.shields.io/bundlephobia/minzip/ts-is-record?label=min+gzip)](https://bundlephobia.com/package/ts-is-record)
[![npm](https://img.shields.io/npm/l/ts-is-record.svg?t=1495378566925)](https://www.npmjs.com/package/ts-is-record)

<!-- [![Bundlephobia](https://badgen.net/bundlephobia/minzip/ts-is-record?label=min+gzip)](https://bundlephobia.com/package/ts-is-record) -->

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
