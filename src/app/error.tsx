'use client'

import Image from "next/image"

export default function Error({
    error,
  }: {
    error: Error & { digest?: string }
  }) {
    console.log("error page")
    return (
      <div className="w-screen h-screen flex " >
        <div className="m-auto w-1/2 h-1/2 relative ">
        <Image
        src="/assets/billa.png"
        alt="Error image"
        fill
        />
      </div>
      </div>
    )
  }
