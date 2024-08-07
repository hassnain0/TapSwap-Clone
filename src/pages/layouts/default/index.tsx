import { Outlet } from "react-router-dom";

import { Navigation } from "../navigation";
import { TabBar } from "@/components/tab-bar";

import dolarImage from "@/assets/dollar.svg"

export function RootLayout() {
  return (
    <div className="h-screen bg-[#242C3B] flex flex-col">
      <div className="flex flex-col flex-1 pt-2 mb-2 px-6 overflow-y-scroll max-w-[728px] mx-auto w-full">
        <header className="border-b border-[#293A3B] pt-6 pb-4 flex flex-col gap-3 items-center">
          <span className="text-white text-base font-medium">Balance</span>
          <div className="flex items-center gap-2.5">
            <img src={dolarImage} alt="Polygon image" className="w-10 h-10" />
            <strong className="text-white font-extrabold text-4xl">10087</strong>
          </div>
        </header>

        <main className="flex flex-col mt-6">
          <Navigation />
          <Outlet />
        </main>
      </div>

      <TabBar />
    </div>
  )
}