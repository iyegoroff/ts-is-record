import invariant from 'ts-tiny-invariant'

type Key = string | number

export function isRecord(value: unknown): value is Record<Key, unknown> {
  return (
    value !== null && (typeof value === 'object' || typeof value === 'function')
  )
}

export function assertIsRecord(
  value: unknown,
  message: string
): asserts value is Record<Key, unknown> {
  invariant(isRecord(value), message)
}
