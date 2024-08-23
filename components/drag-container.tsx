"use client"

import { useRef } from "react"
import Drag from "./drag"
import { cn } from "@/lib/utils"

export default function DragContainer() {
  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <div ref={ref} className={cn("z-10 flex-1 h-full overflow-hidden w-full border rounded-md relative border-accent")}>
      <Drag parentRef={ref}>
        <img
          className="w-24"
          src="/images/spiderman.png"
          alt="CN Tower sticker"
          draggable={false}
        />
      </Drag>
      <Drag parentRef={ref}>
        <img
          className="w-24"
          src="/images/spiderman.png"
          alt="CN Tower sticker"
          draggable={false}
        />
      </Drag>
    </div>
  )
}
