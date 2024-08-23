"use client"
import React, { useRef } from 'react'
import Drag from './drag'

export default function StickerContainer() {
  const ref = useRef(null)

  return (
    <div className="absolute right-0 bottom-0 w-[100px] h-[300px] ">
      <div ref={ref} className="relative">
        <Drag parentRef={ref}>
          <img
            className="w-24"
            src="/images/zero2.png"
            alt="CN Tower sticker"
            draggable={false}
          />
        </Drag>
      </div>
    </div>
  )
}
