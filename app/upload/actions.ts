"use server"

import { auth } from "@/auth"
import { redirect } from "next/navigation"
import cloudinary from "@/lib/cloudinary"

type UploadResult = { status: 'success' } | { status: 'error'; message: string }

export async function uploadImageAction(formData: FormData): Promise<UploadResult> {
   const session = await auth()
   if (!session) redirect("/login")

   const file = formData.get("file") as File | null
   const tag  = formData.get("tag")  as string | null

   if (!file || file.size === 0) return { status: 'error', message: 'No file provided.' }
   if (!tag || !['Tapers', 'Fades', 'Designs'].includes(tag))
     return { status: 'error', message: 'Invalid tag.' }

   const buffer = Buffer.from(await file.arrayBuffer())

   await new Promise<void>((resolve, reject) => {
     cloudinary.uploader.upload_stream(
       { folder: 'gorditoBlendz', tags: [tag], resource_type: 'auto' },
       (error, result) => { error || !result ? reject(error) : resolve() }
     ).end(buffer)
   })

   return { status: 'success' }
}