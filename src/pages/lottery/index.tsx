import { Heart, HeartHandshake } from "lucide-react"
import { useState } from "react"

import { TabBar } from "@/components/tab-bar"

import Cart from "@/assets/lottery-cards/car.svg"
import Moto from "@/assets/lottery-cards/biclycle.svg"
import Phone from "@/assets/lottery-cards/phone.svg"
import Dolar from "@/assets/lottery-cards/dolar.svg"
import Notebook from "@/assets/lottery-cards/notebook.svg"

import car from "@/assets/lottery-buttons/car.svg"
import bicycle from "@/assets/lottery-buttons/bicycle.svg"
import dolar from "@/assets/lottery-buttons/dolar.svg"
import notebook from "@/assets/lottery-buttons/notebook.svg"
import phone from "@/assets/lottery-buttons/phone.svg"

import { Link } from "react-router-dom"
import { ActiveButton } from "./activeButton"

const veicles = [
  {
    name: "Rolls Royace",
    value: "250",
    image: Cart,
    heart: true,
    title: <strong className="text-white text-[17px]">WIN A ROLLS-ROYCE PHANTOM!</strong>,
    description: (
      <>
        <p className="text-white/60 text-base">Enter our ultra-exclusive lottery for a chance to own the pinnacle of luxury - a brand-new Rolls-Royce Phantom!</p>
        <p className="text-white/60 text-base">- Prize: Rolls-Royce Phantom</p>
        <p className="text-white/60 text-base">- Draw date: [insert date]</p>
        <p className="text-white/60 text-base">- Tickets available until [insert time]</p>
        <p className="text-white/60 text-base">Experience unparalleled opulence and refinement with this majestic vehicle. Don't miss your chance to ride like royalty!</p>
        <p className="text-white/60 text-base">Get your ticket now and take a chance to make your wildest dreams come true!</p>
        <p className="text-white/60 text-base">Good luck!</p>
      </>
    )

  },
  {
    name: "Iphone 15 pro max",
    value: "40 000",
    image: Phone,
    heart: false,
    title: <strong className="text-white text-[17px]">WIN THE LATEST iPHONE 15 PRO MAX!</strong>,
    description: (
      <>
        <p className="text-white/60 text-base">Enter our exciting lottery for a chance to get your hands on the brand-new iPhone 15 Pro Max!</p>
        <p className="text-white/60 text-base">- Prize: iPhone 15 Pro Max (256GB/512GB/1TB)</p>
        <p className="text-white/60 text-base">- Draw date: [insert date]</p>
        <p className="text-white/60 text-base">- Tickets available until [insert time]</p>
        <p className="text-white/60 text-base">Experience the cutting-edge technology, stunning display, and advanced cameras of Apple's flagship device!</p>
        <p className="text-white/60 text-base">Don't miss out! Get your ticket now and take a chance to upgrade your mobile experience!</p>
        <p className="text-white/60 text-base">Good luck!</p>
      </>
    )

  },
  {
    name: "Dolar",
    value: "5 000",
    image: Dolar,
    heart: true,
    title: <strong className="text-white text-[17px]">CASH WINDFALL ALERT!</strong>,
    description: (
      <>
        <p className="text-white/60 text-base">Enter our exciting lottery for a chance to win $5,000 CASH!</p>
        <p className="text-white/60 text-base">- Prize: $5,000</p>
        <p className="text-white/60 text-base">- Draw date: [insert date]</p>
        <p className="text-white/60 text-base">- Tickets available until [insert time]</p>
        <p className="text-white/60 text-base">Imagine the possibilities with an extra $5,000 in your pocket!</p>
        <p className="text-white/60 text-base">Pay off bills, treat yourself, or invest in your future - the choice is yours!</p>
        <p className="text-white/60 text-base">Get your ticket now and make your dreams a reality!</p>
        <p className="text-white/60 text-base">Good luck!</p>
      </>
    )
  },
  {
    name: "Ducati Panigale V4 S",
    value: "2 0000",
    image: Moto,
    heart: true,
    title: <strong className="text-white text-[17px]">REV UP YOUR DREAMS!</strong>,
    description: (
      <>
        <p className="text-white/60 text-base">Enter our high-octane lottery for a chance to win the ultimate ride - a Ducati Panigale V4 S (2023)!</p>
        <p className="text-white/60 text-base">- Prize: Ducati Panigale V4 S (2023) - 1103cc, 214 HP, 7-speed gearbox</p>
        <p className="text-white/60 text-base">- Draw date: [insert date]</p>
        <p className="text-white/60 text-base">- Tickets available until [insert time]</p>
        <p className="text-white/60 text-base">Feel the rush of adrenaline as you take this beast on the road! With its sleek design and exceptional performance, this bike is a true champion's ride.</p>
        <p className="text-white/60 text-base">Get your ticket now and shift your luck into high gear!</p>
        <p className="text-white/60 text-base">Good luck!</p>
      </>
    )
  },
  {
    name: "Macbook air m2",
    value: "1 0000",
    image: Notebook,
    heart: true,
    title: <strong className="text-white text-[17px]">WIN THE ULTIMATE LAPTOP EXPERIENCE!</strong>,
    description: (
      <>
        <p className="text-white/60 text-base">Enter our exciting lottery for a chance to win $5,000 CASH!</p>
        <p className="text-white/60 text-base">- Prize: $5,000</p>
        <p className="text-white/60 text-base">- Draw date: [insert date]</p>
        <p className="text-white/60 text-base">- Tickets available until [insert time]</p>
        <p className="text-white/60 text-base">Imagine the possibilities with an extra $5,000 in your pocket!</p>
        <p className="text-white/60 text-base">Pay off bills, treat yourself, or invest in your future - the choice is yours!</p>
        <p className="text-white/60 text-base">Get your ticket now and make your dreams a reality!</p>
        <p className="text-white/60 text-base">Good luck!</p>
      </>
    )
  },
]

export function Lottery() {
  const [current, setCurrent] = useState(0);

  function favorite() {
    veicles.map((veic, index) => {
      return index === current ? {
        ...veic,
        heart: !veic.heart
      } : veic
    })
  }

  return (
    <div className="h-screen bg-[#242C3B] flex flex-col">
      <div className="flex flex-col flex-1 pt-8 px-6 overflow-y-scroll max-w-[728px] mx-auto w-full">
        <header className="flex items-center justify-between w-full">
          <strong className="text-[#38B8EA] text-xl">Tickets: 0</strong>
          <Link to="/bag" className="h-10 flex justify-center items-center rounded-lg text-white bg-button px-4">Buy</Link>
        </header>

        <main className="flex flex-col mt-12">
          <div>
            <div className="relative">
              <div className="p-4 flex justify-center items-center">
                <img src={veicles[current].image} alt="" className="h-[150px] object-contain" />
              </div>

              <div className="absolute top-0 left-0 w-full flex items-center justify-between">
                <div className="text-white">
                  <p>{veicles[current].name}</p>
                  <p>{veicles[current].value}</p>
                </div>

                <button onClick={favorite} className="text-white">
                  {veicles[current].heart ? <HeartHandshake /> : <Heart />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 relative mt-6 mb-4">
              <ActiveButton image={car} current={current} position={0} setCurrent={() => setCurrent(0)} />
              <ActiveButton image={phone} current={current} position={1} setCurrent={() => setCurrent(1)} />
              <ActiveButton image={dolar} current={current} position={2} setCurrent={() => setCurrent(2)} />
              <ActiveButton image={bicycle} current={current} position={3} setCurrent={() => setCurrent(3)} />
              <ActiveButton image={notebook} current={current} position={4} setCurrent={() => setCurrent(4)} />
            </div>
          </div>

          <div className="mt-8">
            <span className="text-[#3CA4EB] bg-[#323B4F] flex justify-center items-center rounded-md w-32 h-12">Description</span>
            <div className="mt-6 flex flex-col gap-2">
              {veicles[current].title}
              {veicles[current].description}
            </div>
          </div>

        </main>
      </div>

      <TabBar />
    </div>
  )
}
