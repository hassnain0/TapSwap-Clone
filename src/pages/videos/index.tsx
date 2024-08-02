import { NavLink } from "react-router-dom"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Navigation } from "../../components/navigation"
import { Item } from "../../components/item"
import { Summary } from "../../components/summary"

import telegramIcon from "../../assets/telegram.png"
import { HomenNavigation } from "../../components/home-navigation"
import { Video } from "@/components/video"
import person from "@/assets/person.png"

export function Videos() {
  return (
    <div className="h-screen bg-[#242C3B] flex flex-col">
      <div className="flex flex-col flex-1 pt-2 px-8 overflow-y-scroll">
        <Summary />

        <main className="flex flex-col mt-6">
          <HomenNavigation />

          <ul className="flex flex-col gap-2.5 mt-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <Video key={index}>
                <Item
                  title="How to wread homns"
                  socialIcon={telegramIcon}
                  value="100 00"
                />
              </Video>
            ))}
          </ul>
        </main>
      </div>

      <Sheet>
        <SheetTrigger asChild><button>Hi</button></SheetTrigger>
        <SheetContent side="bottom" className="bg-[#262F41] border border-[#3A4058] rounded-t-3xl flex flex-col">
          <SheetHeader className="justify-center items-center">
            <img src={person} className="w-16"/>
            <SheetDescription className="text-[#7B7878] text-lg">Watch the video, find the code and past it here</SheetDescription>
          </SheetHeader>

          <form className="flex items-center">
            <input type="text" className="flex-1" />
            <button>Go</button>
          </form>
        </SheetContent>
      </Sheet>
      <Navigation />
    </div>
  )
}
