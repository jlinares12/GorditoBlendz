import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { verifyCredentials } from "@/lib/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const valid = await verifyCredentials(
          credentials.username as string,
          credentials.password as string
        )
        if (valid) return { id: "1", name: "Admin" }
        return null
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
})
