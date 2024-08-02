import { Heart, HeartHandshake } from "lucide-react"
import { useState } from "react"

import Cart from "@/assets/lottery/Cart.png"
import Moto from "@/assets/lottery/Moto.png"
import Phone from "@/assets/lottery/Phone.png"

import Vector1 from "@/assets/lottery-button/vector-1.png"
import Vector2 from "@/assets/lottery-button/vector-2.png"
import Vector3 from "@/assets/lottery-button/vector-3.png"

import { Navigation } from "@/components/navigation"

const veicles = [
  {
    name: "Rolls Royace",
    value: "250",
    image: Cart,
    heart: true
  },
  {
    name: "Iphone 16",
    value: "40 000",
    image: Phone,
    heart: false
  },
  {
    name: "Bikes",
    value: "5 000",
    image: Moto,
    heart: true
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
      <div className="flex flex-col flex-1 pt-8 px-8 overflow-y-scroll">
        <header className="flex items-center justify-between w-full">
          <strong className="text-[#38B8EA] text-xl">Tickets: 0</strong>
          <button className="h-10 flex justify-center items-center rounded-lg text-white bg-button-gradient px-4">Buy</button>
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

            <div className="flex items-center gap-2 relative mt-4 mb-4">
              <button onClick={() => setCurrent(0)} className="w-14 h-14 p-4 flex justify-center items-center bg-[#353F54] rounded-md">
                <img src={Vector1} alt="" className="w-full" />
              </button>
              <button onClick={() => setCurrent(1)} className="w-14 h-14 p-4 flex justify-center items-center bg-[#353F54] rounded-md top-[-10px]">
                <img src={Vector2} alt="" className="h-full object-contain" />
              </button>
              <button onClick={() => setCurrent(2)} className="w-14 h-14 p-4 flex justify-center items-center bg-[#353F54] rounded-md">
                <img src={Vector3} alt="" className="h-full object-contain" />
              </button>
              <button onClick={() => setCurrent(2)} className="w-14 h-14 p-4 flex justify-center items-center bg-[#353F54] rounded-md">
                <img src={Vector3} alt="" className="h-full object-contain" />
              </button>
              <button onClick={() => setCurrent(2)} className="w-14 h-14 p-4 flex justify-center items-center bg-[#353F54] rounded-md">
                <img src={Vector3} alt="" className="h-full object-contain" />
              </button>
            </div>
          </div>

          <div className="mt-8">
            <span className="text-[#3CA4EB] bg-[#323B4F] flex justify-center items-center rounded-md w-32 h-12">Description</span>
            <div className="mt-6 flex flex-col gap-2">
              <strong className="text-white text-[17px]">PEUGEOT - LR01</strong>
              <p className="text-white/60 text-base">The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged.</p>
            </div>
          </div>

        </main>
      </div>

      <Navigation />
    </div>
  )
}
