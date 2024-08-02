import { ChevronLeft } from "lucide-react"

import { Navigation } from "@/components/navigation"

export function ShoppingBag() {
  return (
    <div className="h-screen bg-[#242C3B] flex flex-col">
      <div className="flex flex-col flex-1 pt-8 px-8 overflow-y-scroll">
        <header className="flex items-center justify-between w-full">
          <button className="h-10 w-10 flex justify-center items-center rounded-lg text-white bg-button-gradient">
            <ChevronLeft color="white" size={16} />
          </button>
          <strong className="text-white flex-1 text-center text-xl mr-4">My Shopping Bag</strong>
        </header>

        <main className="flex flex-col items-center mt-12">
          <p className="text-center text-white/60 text-[15px] font-medium">Participate in the squadman lottery </p>
          <span className="text-center text-white/60 text-xs block max-w-32">Get a reward of 300 000 coins when you pay</span>

          <p className="mt-[74px] mb-20 text-white/80 font-medium text-base">Total: <strong className="text-[#38B8EA] text-base">TON 0002.</strong></p>
          <button className="h-11 rounded-lg bg-button-gradient text-white px-4 text-base font-medium min-w-[160px]">
            Pay now
          </button>
        </main>
      </div>

      <Navigation />
    </div>
  )
}
