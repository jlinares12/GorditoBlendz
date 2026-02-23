"use server"

import { auth } from "@/auth"
import { updateCredentials, verifyCredentials, getCredentials } from "@/lib/credentials"
import { redirect } from "next/navigation"

export async function updateCredentialsAction(
  _prevState: string | null,
  formData: FormData
): Promise<string | null> {
  const session = await auth()
  if (!session) redirect("/login")

  const currentPassword = formData.get("currentPassword") as string
  const newUsername = formData.get("newUsername") as string
  const newPassword = formData.get("newPassword") as string
  const confirmPassword = formData.get("confirmPassword") as string

  // Verify current password
  const stored = await getCredentials()
  const valid = await verifyCredentials(stored.username, currentPassword)
  if (!valid) return "Current password is incorrect"

  if (newPassword !== confirmPassword) return "New passwords do not match"

  if (newPassword.length < 8) return "New password must be at least 8 characters"

  await updateCredentials(newUsername, newPassword)
  return "success"
}
