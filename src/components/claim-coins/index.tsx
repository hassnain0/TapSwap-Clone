import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription
} from "@/components/ui/sheet"
import { forwardRef, ReactNode } from "react"

import polygonImage from "@/assets/polygon.png"
import person from "@/assets/person.png"

interface VideoProps {
  children: ReactNode
}

export const Video = forwardRef<HTMLDivElement, VideoProps>((props, ref) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{props.children}</SheetTrigger>
      <SheetContent side="bottom" className="bg-[#262F41] border border-[#262F41] rounded-t-3xl flex flex-col items-center" ref={ref}>
        <SheetHeader className="justify-center items-center">
          <img src={person} className="w-16" />
          <SheetTitle className="text-[#7B7878] text-lg">Watch the video, find the code and past it here</SheetTitle>
          <SheetDescription />
        </SheetHeader>

        <div className="flex items-center gap-1 mt-2 mb-4">
          <img src={polygonImage} alt="Polygon image" className="text-2xl" />
          <strong className="text-white font-extrabold text-3xl">10087</strong>
        </div>

        <button className="text-white flex justify-center items-center bg-button-gradient px-4 rounded-md h-12 w-[114px]">Claim</button>
      </SheetContent>
    </Sheet >
  )
})