"use client"

import { CldUploadButton } from "next-cloudinary"

export default function UploadWidget() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-secondary">Click the button to upload photos to Cloudinary.</p>
      <CldUploadButton
        uploadPreset="Gordito Blendz"
        className="h-12 rounded-lg bg-primary px-8 text-base font-bold text-white transition hover:bg-primary/90"
      />
    </div>
  )
}
