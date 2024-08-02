import { Navigation } from "@/components/navigation"
import { Progress } from "@/components/ui/progress"

import iconsImage from "@/assets/icons.png"
import robotImage from "@/assets/robot.png"
import polygonImage from "@/assets/polygon.png"

export function Home() {
  return (
    <div className="min-h-screen bg-[#242C3B] flex flex-col">
      <div className="flex flex-col flex-1 pt-2 px-8">
        <header className="border-b border-[#47656C] pt-6 pb-2 flex flex-col gap-2.5 items-center">
          <span className="text-white text-base font-medium">Balance</span>
          <div className="flex items-center">
            <img src={polygonImage} alt="Polygon image" className="text-2xl" />
            <strong className="text-white font-extrabold text-3xl">10087</strong>
          </div>
        </header>

        <main className="flex justify-center items-center flex-col mt-4">
          <div className="w-full flex flex-col gap-4 mb-[120px]">
            <Progress value={33} className="h-4 rounded-full" />
            <strong className="text-center font-extrabold text-[14px] text-white/60 block">5000/5000</strong>
          </div>

          <div className="flex flex-col items-center">
            <img src={robotImage} alt="Robot image" className="w-[322px] h-[322px]" />
            <img src={iconsImage} alt="Icons image" className="w-[260px] mt-20" />
          </div>
        </main>
      </div>

      <Navigation />
    </div>
  )
}