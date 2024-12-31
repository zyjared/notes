export async function mockFetch<T = any>(data: T): Promise<{ data: T }> {
  return Promise.resolve().then(() => ({ data }))
}
