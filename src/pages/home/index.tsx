import { Zap } from 'lucide-react'

import { Navigation } from "@/components/navigation"
import { Progress } from "@/components/ui/progress"

import robotImage from "@/assets/robot.png"
import dolarImage from "@/assets/dollar.svg"

export function Home() {
  return (
    <div className="min-h-screen bg-[#242C3B] flex flex-col">
      <div className="flex flex-col flex-1 pt-2 px-6">
        <header className="border-b border-[#293A3B] pt-6 pb-4 flex flex-col gap-3 items-center">
          <span className="text-white text-base font-medium">Balance</span>
          <div className="flex items-center gap-2.5">
            <img src={dolarImage} alt="Polygon image" className="w-10 h-10" />
            <strong className="text-white font-extrabold text-4xl">10087</strong>
          </div>
        </header>

        <main className="flex justify-center items-center flex-col flex-1 pb-10"  >
          <div className="flex-1 flex justify-center items-center">
            <img src={robotImage} alt="Robot image" className="w-80 h-80 mt-8" />
          </div>
          <div className="w-full flex flex-col gap-3.5 mt-20">
            <div className="flex justify-center items-center gap-2">
              <Zap
                size={16}
                color="yellow"
                fill="bold"
                strokeWidth={3}
                absoluteStrokeWidth
              />
              <strong className="font-extrabold text-[14px] text-white/60">
                <span className="text-base">5000</span>/5000
              </strong>
            </div>
            <Progress value={33} className="h-4 rounded-full" />
          </div>
        </main>
      </div>

      <Navigation />
    </div>
  )
}