import { Navigation } from "../../components/navigation"
import { Summary } from "../../components/summary"
import { Static } from "./static"

export function Statics() {
  return (
    <div className="h-screen bg-[#242C3B] flex flex-col bg-background-montain bg-right-bottom bg-no-repeat">
      <div className="flex flex-col flex-1 pt-2 px-6 overflow-y-scroll">
        <Summary />

        <main className="mt-12">
          <ul className="flex flex-col gap-8">
            <Static title="Total Comunity" content="1284 476570" />
            <Static title="Total Miners" content="1284 476570" />
            <Static title="Comming soon" content="?" />
            <Static title="Comming soon" content="?" />
          </ul>
        </main>
      </div>

      <Navigation />
    </div>
  )
}
