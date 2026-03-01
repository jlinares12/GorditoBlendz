"use client"

import { uploadImageAction } from "../actions"
import { useRef, useState } from "react"

type HaircutTag = "Tapers" | "Fades" | "Designs"
type UploadStatus = "idle" | "uploading" | "success" | "error"

interface StagedImage {
  id: string           // crypto.randomUUID() — stable React key
  file: File
  previewUrl: string   // URL.createObjectURL(file)
  tag: HaircutTag | null
}

const TAG_OPTIONS = [
  { label: "Taper",  value: "Tapers"  as HaircutTag },
  { label: "Fade",   value: "Fades"   as HaircutTag },
  { label: "Design", value: "Designs" as HaircutTag },
]

export default function UploadWidget() {
  const [stagedImages,   setStagedImages]   = useState<StagedImage[]>([])
  const [uploadStatus,   setUploadStatus]   = useState<UploadStatus>("idle")
  const [uploadMessage,  setUploadMessage]  = useState("")
  const [uploadProgress, setUploadProgress] = useState({ current: 0, total: 0 })
  const fileInputRef = useRef<HTMLInputElement>(null)

  const hasImages  = stagedImages.length > 0
  const allTagged  = hasImages && stagedImages.every(img => img.tag !== null)
  const canUpload  = allTagged && uploadStatus !== 'uploading'

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? [])
    if (!files.length) return
    setStagedImages(prev => [...prev, ...files.map(file => ({
      id: crypto.randomUUID(), file,
      previewUrl: URL.createObjectURL(file), tag: null,
    }))])
    e.target.value = ''  // allow re-selecting same files later
  }

  function removeImage(id: string) {
    setStagedImages((prev) => {
      const target = prev.find((img) => img.id === id)
      if (target) URL.revokeObjectURL(target.previewUrl)
      return prev.filter((img) => img.id !== id)
    })
  }
function assignTag(id: string, tag: HaircutTag) {
    setStagedImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, tag } : img))
    )
  }

  function handleCancel() {
    setStagedImages((prev) => {
      prev.forEach((img) => URL.revokeObjectURL(img.previewUrl))
      return []
    })
    setUploadStatus("idle")
    setUploadMessage("")
  }

  async function handleUpload() {
    if (!allTagged) {
      setUploadMessage("Please tag every photo before uploading.")
      return
    }

    setUploadStatus("uploading")
    setUploadMessage("")
    const toUpload = [...stagedImages]
    setUploadProgress({ current: 0, total: toUpload.length })

    for (let i = 0; i < toUpload.length; i++) {
      const img = toUpload[i]
      setUploadProgress({ current: i + 1, total: toUpload.length })

      const fd = new FormData()
      fd.append("file", img.file)
      fd.append("tag", img.tag!)

      const result = await uploadImageAction(fd)

      if (result.status === "error") {
        setUploadStatus("error")
        setUploadMessage(`Failed on "${img.file.name}": ${result.message}`)
        return
      }

      removeImage(img.id)
    }

    setUploadStatus("success")
    setUploadMessage(
      `${toUpload.length} photo${toUpload.length > 1 ? "s" : ""} uploaded successfully.`
    )
  }

  // --- Uploading state ---
  if (uploadStatus === "uploading") {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <span className="material-symbols-outlined animate-spin text-5xl text-primary">
          progress_activity
        </span>
        <p className="text-sm text-secondary">
          Uploading {uploadProgress.current} of {uploadProgress.total}...
        </p>
      </div>
    )
  }

  // --- Success state ---
  if (uploadStatus === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <span className="material-symbols-outlined text-5xl text-accent">
          check_circle
        </span>
        <p className="text-sm text-secondary">{uploadMessage}</p>
        <button
          type="button"
          onClick={() => {
            setUploadStatus("idle")
            setUploadMessage("")
          }}
          className="h-10 rounded-lg bg-primary px-6 text-sm font-bold text-white transition hover:bg-primary/90"
        >
          Upload More Photos
        </button>
      </div>
    )
  }

  // --- Empty state ---
  if (!hasImages) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <span className="material-symbols-outlined text-5xl text-secondary">
          photo_library
        </span>
        <p className="text-sm text-secondary">
          No photos selected. Click the button below to get started.
        </p>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="h-10 rounded-lg bg-primary px-6 text-sm font-bold text-white transition hover:bg-primary/90"
        >
          Select Photos
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleFileSelect}
        />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-secondary">
          {stagedImages.length} photo{stagedImages.length > 1 ? "s" : ""} staged
        </p>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-secondary transition hover:border-primary hover:text-primary"
        >
          + Add More
        </button>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {stagedImages.map((img) => (
          <div
            key={img.id}
            className="overflow-hidden rounded-xl border border-border bg-surface"
          >
            {/* Thumbnail */}
            <div className="relative aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.previewUrl}
                alt={img.file.name}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => removeImage(img.id)}
                className="absolute right-1 top-1 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white transition hover:bg-primary/0"
                aria-label="Remove photo"
              >
                ×
              </button>
            </div>

            {/* Tag pills */}
            <div className="flex flex-wrap gap-1 p-2">
              {TAG_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => assignTag(img.id, opt.value)}
                className={
                  img.tag === opt.value
                  ? "rounded-full border border-primary bg-primary px-2 py-0.5 text-xs font-semibold text-white"
                  : "rounded-full border border-border px-2 py-0.5 text-xs text-secondary transition hover:border-primary hover:text-primary"
                }
              >
                {opt.label}
              </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Warning / error banner */}
      {uploadMessage && (
        <div className="rounded-lg border border-primary/30 bg-primary/10 p-3 text-sm text-primary">
          {uploadMessage}
        </div>
      )}

      {/* Action row */}
      <div className="flex items-center gap-3 pt-1">
        <button
          type="button"
          onClick={handleCancel}
          className="flex-1 rounded-lg border border-border px-4 py-2 text-sm font-medium text-secondary transition hover:border-primary hover:text-primary"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleUpload}
          disabled={!canUpload}
          className="flex-1 rounded-lg bg-primary px-4 py-2 font-bold text-white transition hover:bg-primary/90 disabled:opacity-50"
        >
          Upload All ({stagedImages.length})
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleFileSelect}
      />
    </div>
  )
}
