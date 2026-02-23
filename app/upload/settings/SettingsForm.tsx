"use client"

import { useActionState } from "react"
import { updateCredentialsAction } from "./actions"
import Link from "next/link"

export default function SettingsForm({ currentUsername }: { currentUsername: string }) {
  const [state, action, pending] = useActionState(updateCredentialsAction, null)

  if (state === "success") {
    return (
      <div className="space-y-4 text-center">
        <p className="text-sm text-secondary">Login info updated successfully.</p>
        <Link
          href="/upload"
          className="inline-block rounded-lg bg-primary px-6 py-2 font-bold text-white transition hover:bg-primary/90"
        >
          Back to Upload
        </Link>
      </div>
    )
  }

  return (
    <form action={action} className="space-y-4">
      <div>
        <label htmlFor="newUsername" className="mb-1 block text-sm font-medium text-secondary">
          New Username
        </label>
        <input
          id="newUsername"
          name="newUsername"
          type="text"
          required
          defaultValue={currentUsername}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="currentPassword" className="mb-1 block text-sm font-medium text-secondary">
          Current Password
        </label>
        <input
          id="currentPassword"
          name="currentPassword"
          type="password"
          required
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="newPassword" className="mb-1 block text-sm font-medium text-secondary">
          New Password
        </label>
        <input
          id="newPassword"
          name="newPassword"
          type="password"
          required
          minLength={8}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="mb-1 block text-sm font-medium text-secondary">
          Confirm New Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          minLength={8}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {state && state !== "success" && (
        <p className="text-sm text-primary">{state}</p>
      )}

      <div className="flex items-center gap-3 pt-1">
        <Link
          href="/upload"
          className="flex-1 rounded-lg border border-border px-4 py-2 text-center text-sm font-medium text-secondary transition hover:border-primary hover:text-primary"
        >
          Cancel
        </Link>
        <button
          type="submit"
          disabled={pending}
          className="flex-1 rounded-lg bg-primary px-4 py-2 font-bold text-white transition hover:bg-primary/90 disabled:opacity-50"
        >
          {pending ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  )
}
