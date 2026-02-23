import { auth, signOut } from "@/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import UploadWidget from "./components/UploadWidget"

export default async function UploadPage() {
  const session = await auth()
  if (!session) redirect("/login")

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-xl border border-border bg-surface p-8 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded bg-primary text-white">
              <span className="material-symbols-outlined">upload</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">Upload Photos</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/upload/settings"
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-secondary transition hover:border-primary hover:text-primary"
            >
              Settings
            </Link>
            <form
              action={async () => {
                "use server"
                await signOut({ redirectTo: "/login" })
              }}
            >
              <button
                type="submit"
                className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-secondary transition hover:border-primary hover:text-primary"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>

        <UploadWidget />
      </div>
    </main>
  )
}
