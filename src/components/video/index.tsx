import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet"
import { FormEvent, forwardRef, ReactNode, useState } from "react"

interface VideoProps {
  children: ReactNode
}

import polygonImage from "@/assets/polygon.png"
import person from "@/assets/person.png"

export const Video = forwardRef<HTMLDivElement, VideoProps>((props, ref) => {
  const [finish, setFinish] = useState(false)

  function handleSetFinish(event: FormEvent) {
    event.preventDefault()

    setFinish(true)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>{props.children}</SheetTrigger>
        {!finish ? (
          <SheetContent side="bottom" className="bg-[#262F41] border border-[#262F41] rounded-t-3xl flex flex-col" ref={ref}>
            <SheetHeader className="justify-center items-center">
              <img src={person} className="w-16" />
              <SheetTitle className="text-[#7B7878] text-lg">Watch the video, find the code and past it here</SheetTitle>
              <SheetDescription />
            </SheetHeader>

            <form className="flex flex-col gap-4" onSubmit={handleSetFinish}>
              <input type="text" placeholder="Enter" className="flex-1 custom-input h-12 bg-[#242C3B] rounded-lg text-white p-2 border-none outline-none" />
              <button className="text-white flex justify-center items-center bg-button-gradient px-4 rounded-base h-12 w-full">Go</button>
            </form>
          </SheetContent>
        ) : (
          <SheetContent side="bottom" className="bg-[#262F41] border border-[#262F41] rounded-t-3xl flex flex-col items-center" ref={ref}>
            <SheetHeader className="justify-center items-center">
              <img src={person} className="w-16" />
              <SheetTitle className="text-[#7B7878] text-lg">Congratulations you have completed the task</SheetTitle>
              <SheetDescription />
            </SheetHeader>

            <div className="flex items-center gap-1 mt-2 mb-4">
              <img src={polygonImage} alt="Polygon image" className="text-2xl" />
              <strong className="text-white font-extrabold text-3xl">10087</strong>
            </div>

            <button className="text-white flex justify-center items-center bg-button-gradient px-4 rounded-md h-12 w-[114px]">Claim</button>
          </SheetContent>
        )}
    </Sheet>
  )
})