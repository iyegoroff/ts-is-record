# ts-is-record

[![npm version](https://badge.fury.io/js/ts-is-record.svg?t=1495378566925)](https://badge.fury.io/js/ts-is-record)
[![CircleCI](https://circleci.com/gh/iyegoroff/ts-is-record.svg?style=svg)](https://circleci.com/gh/iyegoroff/ts-is-record)
[![Dependency Status](https://david-dm.org/iyegoroff/ts-is-record.svg?t=1495378566925)](https://david-dm.org/iyegoroff/ts-is-record)
[![devDependencies Status](https://david-dm.org/iyegoroff/ts-is-record/dev-status.svg)](https://david-dm.org/iyegoroff/ts-is-record?type=dev)
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

export function assertIsRecord(
  value: unknown,
  message: string
): asserts value is Record<Key, unknown> {
  invariant(isRecord(value), message)
}
```
