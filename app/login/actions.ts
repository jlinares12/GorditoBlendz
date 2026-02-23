"use server"

import { signIn } from "@/auth"
import { AuthError } from "next-auth"

export async function loginAction(
  _prevState: string | null,
  formData: FormData
): Promise<string | null> {
  try {
    await signIn("credentials", {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
      redirectTo: "/upload",
    })
  } catch (error) {
    if (error instanceof AuthError) {
      return "Invalid username or password"
    }
    throw error
  }
  return null
}
