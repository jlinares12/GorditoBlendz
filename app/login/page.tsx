'use client';
import { CldUploadButton } from 'next-cloudinary';
 
export default function Login() {
    return (
      <CldUploadButton uploadPreset='Gordito Blendz'
        className='h-12 rounded-lg bg-primary px-8 text-base font-bold text-white transition hover:bg-primary/90'
      />
    )
}
