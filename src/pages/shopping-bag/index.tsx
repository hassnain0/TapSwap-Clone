import { ChevronLeft } from "lucide-react"

import polygonImage from "@/assets/dollar.svg"

import { TabBar } from "@/components/tab-bar"
import { Link } from "react-router-dom"

export function ShoppingBag() {
  return (
    <div className="h-screen bg-[#242C3B] flex flex-col">
      <div className="flex flex-col flex-1 pt-8 px-6 overflow-y-scroll max-w-[728px] mx-auto w-full">
        <header className="flex items-center justify-between w-full">
          <Link to="/lottery" className="h-10 w-10 flex justify-center items-center rounded-lg text-white bg-button">
            <ChevronLeft color="white" size={16} />
          </Link>
          <strong className="text-white flex-1 text-center text-xl mr-4">Buy lottery ticket</strong>
        </header>

        <main className="flex flex-col items-center mt-12">
          <p className="text-center text-white/60 text-[15px] font-medium"> Participate in the squadman lottery</p>
          <span className="text-center text-white/60 text-xs block max-w-32">Get a reward of
            <div className="flex items-center gap-1 justify-center my-1">
              <img src={polygonImage} alt="Polygon image" className="w-3 h-3" />
              <strong className="text-white">300 000</strong>
            </div>
            coins when you pay</span>

          <p className="mt-[74px] mb-20 text-white/80 font-medium text-base">Total: <strong className="text-[#38B8EA] text-base">US $1</strong></p>
          <button className="h-11 rounded-lg bg-button text-white px-4 text-base font-medium min-w-[160px]">
            Pay now
          </button>
        </main>
      </div>

      <TabBar />
    </div>
  )
}
