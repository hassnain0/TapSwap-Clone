import { Navigation } from "../../components/navigation"
import { Summary } from "../../components/summary"

import { HomenNavigation } from "../../components/home-navigation"
import { Task } from "./task"

export function Tasks() {
  return (
    <div className="h-screen bg-[#242C3B] flex flex-col">
      <div className="flex flex-col flex-1 pt-2 px-6 overflow-y-scroll">
        <Summary />

        <main className="flex flex-col mt-6">
          <HomenNavigation />

          <ul className="flex flex-col gap-2.5 mt-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <Task
                key={index}
                title="Invite 3 friends"
                value="50 000"
              />
            ))}
          </ul>
        </main>
      </div>

      <Navigation />
    </div>
  )
}
