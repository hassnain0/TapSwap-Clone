import { Heart, HeartHandshake } from "lucide-react"
import { useState } from "react"

import { Navigation } from "@/components/navigation"

import Cart from "@/assets/lottery/Cart.png"
import Moto from "@/assets/lottery/Moto.png"
import Phone from "@/assets/lottery/Phone.png"

import Vector1 from "@/assets/lottery-button/vector-1.png"
import Vector2 from "@/assets/lottery-button/vector-2.png"
import Vector3 from "@/assets/lottery-button/vector-3.png"
import Vector4 from "@/assets/lottery-button/vector-4.png"
import Vector from "@/assets/lottery-button/vector.png"

import { Link } from "react-router-dom"
import { ActiveButton } from "./activeButton"

const veicles = [
  {
    name: "Rolls Royace",
    value: "250",
    image: Cart,
    heart: true,
    title: "Veloce 130",
    description: "The LR01 features a design inspired by the classic models from PEUGEOT Cycles' storied 130-year legacy, blending timeless aesthetics with agile, responsive performance ideal for modern urban environments. Its lugged construction enhances both durability and style."
  },
  {
    name: "Iphone 16",
    value: "40 000",
    image: Phone,
    heart: false,
    title: "Urban Pulse",
    description: "Drawing from PEUGEOT Cycles' 130-year heritage of iconic bike designs, the LR01 marries a classic look with contemporary, nimble performance tailored for city riding. The lugged frame provides both elegance and strength, ensuring a smooth ride through urban landscapes."
  },
  {
    name: "Bikes",
    value: "5 000",
    image: Moto,
    heart: true,
    title: "Classic Drive",
    description: "The LR01 embodies the essence of PEUGEOT Cycles' renowned 130-year history, merging a traditional design with dynamic, agile performance that suits the demands of today's cities. Its lugged framework offers a perfect blend of durability and classic charm."
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
      <div className="flex flex-col flex-1 pt-8 px-6 overflow-y-scroll">
        <header className="flex items-center justify-between w-full">
          <strong className="text-[#38B8EA] text-xl">Tickets: 0</strong>
          <Link to="/bag" className="h-10 flex justify-center items-center rounded-lg text-white bg-button-gradient px-4">Buy</Link>
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
              <ActiveButton image={Vector} current={current} position={0} setCurrent={() => setCurrent(0)} />
              <ActiveButton image={Vector1} current={current} position={1} setCurrent={() => setCurrent(1)} />
              <ActiveButton image={Vector2} current={current} position={2} setCurrent={() => setCurrent(2)} />
              <ActiveButton image={Vector3} current={current} position={3} setCurrent={() => setCurrent(2)} />
              <ActiveButton image={Vector4} current={current} position={4} setCurrent={() => setCurrent(2)} />
            </div>
          </div>

          <div className="mt-8">
            <span className="text-[#3CA4EB] bg-[#323B4F] flex justify-center items-center rounded-md w-32 h-12">Description</span>
            <div className="mt-6 flex flex-col gap-2">
              <strong className="text-white text-[17px]">{veicles[current].title}</strong>
              <p className="text-white/60 text-base">{veicles[current].description}</p>
            </div>
          </div>

        </main>
      </div>

      <Navigation />
    </div>
  )
}
