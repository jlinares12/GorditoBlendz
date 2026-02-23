import bcrypt from "bcryptjs"

const CREDENTIALS_KEY = "admin:credentials"

type StoredCredentials = {
  username: string
  passwordHash: string
}

function isRedisConfigured() {
  return !!process.env.KV_REST_API_URL && !!process.env.KV_REST_API_TOKEN
}

async function getRedis() {
  const { Redis } = await import("@upstash/redis")
  return new Redis({
    url: process.env.KV_REST_API_URL!,
    token: process.env.KV_REST_API_TOKEN!,
  })
}

/**
 * Returns stored credentials.
 * - In production (Redis configured): reads from Upstash Redis, seeds from env vars on first run.
 * - In local dev (no Redis): falls back to ADMIN_USERNAME / ADMIN_PASSWORD env vars directly.
 */
export async function getCredentials(): Promise<StoredCredentials> {
  if (!isRedisConfigured()) {
    const username = process.env.ADMIN_USERNAME ?? "admin"
    const password = process.env.ADMIN_PASSWORD ?? "changeme"
    return { username, passwordHash: await bcrypt.hash(password, 12) }
  }

  const redis = await getRedis()
  const stored = await redis.get<StoredCredentials>(CREDENTIALS_KEY)
  if (stored) return stored

  // Seed Redis from env vars the first time
  const username = process.env.ADMIN_USERNAME ?? "admin"
  const password = process.env.ADMIN_PASSWORD ?? "changeme"
  const passwordHash = await bcrypt.hash(password, 12)
  const initial: StoredCredentials = { username, passwordHash }
  await redis.set(CREDENTIALS_KEY, initial)
  return initial
}

export async function verifyCredentials(
  username: string,
  password: string
): Promise<boolean> {
  if (!isRedisConfigured()) {
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
  const redis = await getRedis()
  const passwordHash = await bcrypt.hash(newPassword, 12)
  await redis.set(CREDENTIALS_KEY, { username: newUsername, passwordHash })
}
