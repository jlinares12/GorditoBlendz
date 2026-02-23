import bcrypt from "bcryptjs"

const CREDENTIALS_KEY = "admin:credentials"

type StoredCredentials = {
  username: string
  passwordHash: string
}

function isKvConfigured() {
  return !!process.env.KV_REST_API_URL && !!process.env.KV_REST_API_TOKEN
}

async function kvGet<T>(key: string): Promise<T | null> {
  const { kv } = await import("@vercel/kv")
  return kv.get<T>(key)
}

async function kvSet(key: string, value: unknown): Promise<void> {
  const { kv } = await import("@vercel/kv")
  await kv.set(key, value)
}

/**
 * Returns stored credentials.
 * - In production (KV configured): reads from Vercel KV, seeds from env vars on first run.
 * - In local dev (no KV): falls back to ADMIN_USERNAME / ADMIN_PASSWORD env vars directly.
 */
export async function getCredentials(): Promise<StoredCredentials> {
  if (!isKvConfigured()) {
    const username = process.env.ADMIN_USERNAME ?? "admin"
    const password = process.env.ADMIN_PASSWORD ?? "changeme"
    return { username, passwordHash: await bcrypt.hash(password, 12) }
  }

  const stored = await kvGet<StoredCredentials>(CREDENTIALS_KEY)
  if (stored) return stored

  // Seed KV from env vars the first time
  const username = process.env.ADMIN_USERNAME ?? "admin"
  const password = process.env.ADMIN_PASSWORD ?? "changeme"
  const passwordHash = await bcrypt.hash(password, 12)
  const initial: StoredCredentials = { username, passwordHash }
  await kvSet(CREDENTIALS_KEY, initial)
  return initial
}

export async function verifyCredentials(
  username: string,
  password: string
): Promise<boolean> {
  if (!isKvConfigured()) {
    return (
      username === (process.env.ADMIN_USERNAME ?? "admin") &&
      password === (process.env.ADMIN_PASSWORD ?? "changeme")
    )
  }

  const stored = await getCredentials()
  return (
    username === stored.username &&
    (await bcrypt.compare(password, stored.passwordHash))
  )
}

export async function updateCredentials(
  newUsername: string,
  newPassword: string
): Promise<void> {
  const passwordHash = await bcrypt.hash(newPassword, 12)
  await kvSet(CREDENTIALS_KEY, { username: newUsername, passwordHash })
}
