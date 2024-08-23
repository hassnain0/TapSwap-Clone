import { TabBar } from "../../components/tab-bar";
import { Summary } from "../../components/summary";
import { Static } from "./static";

export function Statics() {
  return (
    <div className="h-screen bg-[#242C3B] flex flex-col bg-montain bg-right-bottom bg-no-repeat">
      <div className="flex flex-col flex-1 pt-2 px-6 overflow-y-scroll max-w-[728px] mx-auto w-full">
        <Summary />

        <main className="mt-12">
          <ul className="flex flex-col gap-4">
            <Static title="Total Comunity" content="0" />
            <Static title="Total Miners" content="0" />
            <Static title="Lottery Players" content="0" />
            <Static title="Lottery Positions" content="100 000" />
          </ul>
        </main>
      </div>

      <TabBar />
    </div>
  );
}
