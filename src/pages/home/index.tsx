import { TabBar } from "@/components/tab-bar"
import { Progress } from "@/components/ui/progress"

import robotImage from "@/assets/robot.svg"
import boltImage from "@/assets/bolt.svg"
import dolarImage from "@/assets/dollar.svg"

export function Home() {
  return (
    <div className="min-h-screen bg-[#242C3B] flex flex-col">
      <div className="flex flex-col flex-1 pt-2 px-6 max-w-[728px] mx-auto w-full">
        <header className="border-b border-[#293A3B] pt-6 pb-4 flex flex-col gap-3 items-center">
          <span className="text-white text-base font-medium">Balance</span>
          <div className="flex items-center gap-2.5">
            <img src={dolarImage} alt="Polygon image" className="w-10 h-10" />
            <strong className="text-white font-extrabold text-4xl">10087</strong>
          </div>
        </header>

        <main className="flex justify-center items-center flex-col flex-1 pb-10"  >
          <div className="flex justify-center items-center">
            <img src={robotImage} alt="Robot image" className="w-72 h-72 mt-4 sm:mt-0" />
          </div>
          <div className="w-full flex flex-col gap-2 mt-16">
            <div className="flex justify-center items-center gap-1">
              <img src={boltImage} alt="Polygon image" className="w-5 h-5" />
              <strong className="font-medium text-base text-white/60">5000/5000
              </strong>
            </div>
            <Progress value={33} className="h-4 rounded-full" />
          </div>
        </main>
      </div>

      <TabBar />
    </div>
  )
}