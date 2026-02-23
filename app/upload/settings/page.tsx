import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { getCredentials } from "@/lib/credentials"
import SettingsForm from "./SettingsForm"

export default async function SettingsPage() {
  const session = await auth()
  if (!session) redirect("/login")

  const { username } = await getCredentials()

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-xl border border-border bg-surface p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded bg-primary text-white">
            <span className="material-symbols-outlined">manage_accounts</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">Change Login Info</h1>
        </div>

        <SettingsForm currentUsername={username} />
      </div>
    </main>
  )
}
