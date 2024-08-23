import { TabBar } from "../../components/tab-bar";
import { Invite } from "./invite";

export function Invites() {
  const userName = "JohnDoe";
  const userId = "123456";
  const referralLink = `https://t.me/Squadiniumbot/Squadinium?ref=${userId}&message=${encodeURIComponent(
    userName
  )} invites you to join this app!`;

  //Copy to clipboard function
  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
  };
  return (
    <div className="h-screen bg-[#242C3B] flex flex-col">
  <div className="flex flex-col flex-1 pt-2 px-6 overflow-y-scroll max-w-[728px] mx-auto w-full">
    <header className="border-b border-[#47656C] pt-6 pb-4 flex flex-col gap-2.5 items-center">
      <span className="text-white text-base font-medium">Invites</span>
      <strong className="text-white font-extrabold text-3xl">0</strong>
    </header>

    <main className="flex flex-col mt-6">
      <div className="flex flex-col gap-4 mb-4 bg-[#2C3649]/70 border-2 border-[#2C3649] p-4 rounded-md">
        <div className="flex justify-between items-center">
          <strong className="text-white text-xl">Your Invite Link</strong>
          <button
            className="rounded-md text-white flex justify-center items-center w-[84px] h-[40px] bg-button"
            onClick={copyToClipboard}
          >
            copy
          </button>
        </div>

        <span className="text-base text-white/60">
          The LR01 uses the same design as the most iconic bikes{" "}
        </span>
      </div>

      <div className="h-[2px] rounded-full w-full bg-[#2C3649]/50" />

      <div className="mt-4 flex flex-col gap-2">
        <strong className="text-white">My Referrals:</strong>
        <div className="overflow-y-scroll max-h-[500px]"> {/* Set your desired max-height here */}
          <ul className="flex flex-col gap-2.5">
            {Array.from({ length: 10 }).map((_, index) => (
              <Invite
                name="Desmond"
                value="100 00"
                key={index}
                checked={index % 2 == 0}
              />
            ))}
          </ul>
        </div>
      </div>
    </main>
  </div>

  <TabBar />
</div>

  );
}
