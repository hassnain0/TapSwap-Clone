import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription
} from "@/components/ui/sheet"
import { forwardRef, ReactNode } from "react"
import person from "@/assets/person.png"

interface VideoProps {
  children: ReactNode
}

export const Video = forwardRef<HTMLDivElement, VideoProps>((props, ref) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{props.children}</SheetTrigger>
      <SheetContent side="bottom" className="bg-[#262F41] border border-[#262F41] rounded-t-3xl flex flex-col" ref={ref}>
        <SheetHeader className="justify-center items-center">
          <img src={person} className="w-16" />
          <SheetTitle className="text-[#7B7878] text-lg">Watch the video, find the code and past it here</SheetTitle>
          <SheetDescription />
        </SheetHeader>

        <form className="flex items-center">
          <input type="text" placeholder="Bike30" className="flex-1 custom-input h-12 bg-[#242C3B] rounded-lg text-white p-2" />
          <button className="text-white flex justify-center items-center bg-button-gradient px-4 rounded-md h-12 w-[114px]">Go</button>
        </form>
      </SheetContent>
    </Sheet>
  )
})