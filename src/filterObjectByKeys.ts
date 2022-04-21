import { get, set } from 'lodash'

export default function filterObjectByKeys<T>(keys: string[], object: T): T {
  const output = {}
  keys.forEach((key) => {
    const item = get(object, key)
    set(output, key, item)
  })
  return output as T
}
