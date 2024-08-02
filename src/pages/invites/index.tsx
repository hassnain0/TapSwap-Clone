import { Navigation } from "../../components/navigation"
import { Invite } from "./invite"

export function Invites() {
  return (
    <div className="h-screen bg-[#242C3B] flex flex-col">
      <div className="flex flex-col flex-1 pt-2 px-8 overflow-y-scroll">
        <header className="border-b border-[#47656C] pt-6 pb-4 flex flex-col gap-2.5 items-center">
          <span className="text-white text-base font-medium">Invites</span>
          <strong className="text-white font-extrabold text-3xl">0</strong>
        </header>

        <main className="flex flex-col mt-6">
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex justify-between items-center">
              <strong className="text-white text-xl">Your Invite Link</strong>
              <button className="rounded-md text-white flex justify-center items-center w-[84px] h-[44px] bg-button-gradient">copy</button>
            </div>

            <span className="text-base text-white/60">The LR01 uses the same design as the most iconic bikes </span>
          </div>

          <ul className="flex flex-col gap-2.5 mt-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <Invite
                name="Desmond"
                value="100 00"
                key={index}
              />
            ))}
          </ul>
        </main>
      </div>

      <Navigation />
    </div>
  )
}
