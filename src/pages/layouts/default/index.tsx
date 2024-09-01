import { Outlet } from "react-router-dom";

import { Navigation } from "../navigation";
import { TabBar } from "@/components/tab-bar";
import dolarImage from "@/assets/dollar.svg";
import { useEffect, useState } from "react";

export function RootLayout() {
  const telegramUserId = "1234";
  const [balance, setBalance] = useState(0);
  const [reload, setReload] = useState(false);

  
  return (
    <div className="h-screen bg-[#242C3B] flex flex-col">
      <div className="flex flex-col flex-1 pt-2 mb-2 px-6 overflow-y-scroll max-w-[728px] mx-auto w-full">
        <header className="border-b border-[#293A3B] pt-6 pb-4 flex flex-col gap-3 items-center">
          <span className="text-white text-base font-medium">Balance</span>
          <div className="flex items-center gap-2.5">
            <img src={dolarImage} alt="Polygon image" className="w-9 h-9" />
            <strong className="text-white font-extrabold text-4xl">
              {balance}
            </strong>
          </div>
        </header>

        <main className="flex flex-col mt-6">
          <Navigation />
          <Outlet />
        </main>
      </div>

      <TabBar />
    </div>
  );
}
