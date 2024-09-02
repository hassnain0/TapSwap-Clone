import { TabBar } from "@/components/tab-bar";
import { Progress } from "@/components/ui/progress";
import robotImage from "@/assets/robot.png";
import boltImage from "@/assets/bolt.svg";
import dolarImage from "@/assets/dollar.svg";
import { useEffect, useState } from "react";

export function Home() {
  const [totalPoints, setTotalPoints] = useState(2500);
  const [points, setPoints] = useState(2500);
  const [balance, setBalance] = useState(1000);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>(
    []
  );
  const [pointsToAdd, setPointsToAdd] = useState(1);
  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${
      -y / 10
    }deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = "";
    }, 100);
    setBalance(balance + pointsToAdd);
    setPoints(points - pointsToAdd);
    setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  };

  useEffect(() => {
    setTimeout(() => {
      if(points<2500)
      setPoints([...points,pointsToAdd]);
    }, 1000);
  },);

  const handleAnimationEnd = (id: number) => {
    setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#242C3B] flex flex-col">
      <div className="flex flex-col flex-1 pt-2 px-6 max-w-[728px] mx-auto w-full">
        <header className="border-b border-[#293A3B] pt-6 pb-4 flex flex-col gap-3 items-center">
          <span className="text-white text-base font-medium">Balance</span>
          <div className="flex items-center gap-2.5">
            <img src={dolarImage} alt="Polygon image" className="w-9 h-9" />
            <strong className="text-white font-extrabold text-4xl">
              {balance}
            </strong>
          </div>
        </header>
        <main className="flex justify-center items-center flex-col flex-1 pb-10">
          <div
            onClick={handleCardClick}
            onDoubleClick={handleCardClick}
            className="flex justify-center items-center shadow-custom-glow-right rounded-full "
          >
            <img
              src={robotImage}
              alt="Robot image"
              className="w-72 h-72 mt-4 sm:mt-0"
            />
          </div>
        </main>

        <div className="w-full flex flex-col gap-2 mb-5">
          <div className="flex justify-center items-center gap-1">
            <img src={boltImage} alt="Polygon image" className="w-5 h-5" />
            <strong className="font-bold text-base text-white/60">
              {points}/{totalPoints}
            </strong>
          </div>
          <Progress
            value={(points / 2500) * 100}
            className="h-4 rounded-full"
          />
        </div>
      </div>
      {clicks.map((click) => (
        <div
          key={click.id}
          className="absolute text-5xl font-bold opacity-10 text-white pointer-events-none"
          style={{
            top: `${click.y - 42}px`,
            left: `${click.x - 28}px`,
            animation: `float 1s ease-out`,
          }}
          onAnimationEnd={() => handleAnimationEnd(click.id)}
        >
          +{pointsToAdd}
        </div>
      ))}
      <TabBar />
    </div>
  );
}
