export default function runAsync(callback: Function) {
  let result: any
  return new Promise(async (res, rej) => {
    await callback()
      .then((r: any) => {
        console.log({ r })
        res(r)
        return r.json()
      })
      .catch((err: unknown) => rej(err))
  })
  // if (result) return result;
}
