import { Navigation } from "@/components/navigation"
import { Progress } from "@/components/ui/progress"
import { Zap } from 'lucide-react';

import robotImage from "@/assets/robot.png"
import polygonImage from "@/assets/polygon.png"

export function Home() {
  return (
    <div className="min-h-screen bg-[#242C3B] flex flex-col">
      <div className="flex flex-col flex-1 pt-2 px-6">
        <header className="border-b border-[#47656C] pt-6 pb-2 flex flex-col gap-2.5 items-center">
          <span className="text-white text-base font-medium">Balance</span>
          <div className="flex items-center">
            <img src={polygonImage} alt="Polygon image" className="text-2xl" />
            <strong className="text-white font-extrabold text-3xl">10087</strong>
          </div>
        </header>

        <main className="flex justify-center items-center flex-col mt-4 flex-1">
          <div className="flex flex-col items-center">
            <img src={robotImage} alt="Robot image" className="w-[322px] h-[322px] border-8 border-green-500 rounded-full" />
          </div>

          <div className="w-full flex flex-col mt-24 gap-4">
            <strong className="flex items-center gap-2 text-center font-extrabold text-[14px] text-white/60 mx-auto">
              <Zap
                size={16}
                color="yellow"
                fill="bold"
                strokeWidth={3}
                absoluteStrokeWidth
              /> <span className="text-base">5000</span> / 5000</strong>
            <Progress value={33} className="h-4 rounded-full" />
          </div>
        </main>
      </div>

      <Navigation />
    </div>
  )
}