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
