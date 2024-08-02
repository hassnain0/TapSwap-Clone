import { Navigation } from "../../components/navigation"
import { Item } from "./item"
import { Summary } from "../../components/summary"

import youtubeIcon from "../../assets/youtube.png"
import { HomenNavigation } from "../../components/home-navigation"

export function Videos() {
  return (
    <div className="h-screen bg-[#242C3B] flex flex-col">
      <div className="flex flex-col flex-1 pt-2 px-6 overflow-y-scroll">
        <Summary />

        <main className="flex flex-col mt-6">
          <HomenNavigation />

          <ul className="flex flex-col gap-2.5 mt-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <Item
                title="How to wread homns"
                socialIcon={youtubeIcon}
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