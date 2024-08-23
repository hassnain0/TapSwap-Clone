import { TabBar } from "@/components/tab-bar";
import { Progress } from "@/components/ui/progress";
import robotImage from "@/assets/robot.png";
import boltImage from "@/assets/bolt.svg";
import dolarImage from "@/assets/dollar.svg";
import { useEffect, useState } from "react";
import { fetchData, updateUserDoc } from "@/constants/Database.tsx";
import { doc, getDoc, setDoc } from "firebase/firestore";
import db from "@/constants/Firebase";
export function Home() {
  const [totalPoints, setTotalPoints] = useState(2500);
  const [points, setPoints] = useState(2500);
  const [balance, setBalance] = useState(0);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>(
    []
  );
  const [pointsToAdd, setPointsToAdd] = useState(1);
  const [friendsInvited] = useState(0); // Number of friends invited
  const telegramUserId = "1234";

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
    setBalance(balance + 1);
    setPoints(points - pointsToAdd);
    setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  };

  useEffect(() => {
    if (friendsInvited >= 80) {
      setPoints(1280000);
      setTotalPoints(1280000);
      setPointsToAdd(10);
    } else if (friendsInvited >= 70) {
      setPoints(640000);
      setTotalPoints(640000);
      setPointsToAdd(9);
    } else if (friendsInvited >= 60) {
      setPoints(320000);
      setTotalPoints(320000);
      setPointsToAdd(8);
    } else if (friendsInvited >= 50) {
      setPoints(160000);
      setTotalPoints(160000);
      setPointsToAdd(7);
    } else if (friendsInvited >= 40) {
      setPoints(80000);
      setTotalPoints(80000);
      setPointsToAdd(6);
    } else if (friendsInvited >= 30) {
      setPoints(40000);
      setPointsToAdd(5);
    } else if (friendsInvited >= 20) {
      setPoints(20000);
      setTotalPoints(20000);
      setPointsToAdd(4);
    } else if (friendsInvited >= 10) {
      setPoints(10000);
      setTotalPoints(10000);
      setPointsToAdd(3);
    } else if (friendsInvited >= 5) {
      setPoints(5000);
      setTotalPoints(5000);
      setPointsToAdd(2);
    } else {
      setPoints(2500);
      setTotalPoints(2500);
      setPointsToAdd(1);
    }
  }, [friendsInvited]);

  useEffect(() => {
    createDoc();
    getData();
  }, []);

  const getData = async () => {
    const data = await fetchData("Users", telegramUserId);
    setBalance(data?.balance);
  };
  const handleAnimationEnd = (id: number) => {
    setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
  };

  useEffect(() => {
    if (
      points < 2500 ||
      (points < 5000 && points > 2500) ||
      (points < 10000 && points > 2500 && points > 5000) ||
      (points < 20000 && points > 2500 && points > 5000 && points > 10000) ||
      (points < 40000 &&
        points > 2500 &&
        points > 5000 &&
        points > 10000 &&
        points > 20000) ||
      (points < 80000 &&
        points > 2500 &&
        points > 5000 &&
        points > 10000 &&
        points > 20000 &&
        points > 40000) ||
      (points < 160000 &&
        points > 2500 &&
        points > 5000 &&
        points > 10000 &&
        points > 20000 &&
        points > 40000 &&
        points > 80000) ||
      (points < 320000 &&
        points > 2500 &&
        points > 5000 &&
        points > 10000 &&
        points > 20000 &&
        points > 40000 &&
        points > 80000 &&
        points > 640000) ||
      (points < 1280000 &&
        points > 2500 &&
        points > 5000 &&
        points > 10000 &&
        points > 20000 &&
        points > 40000 &&
        points > 80000 &&
        points > 320000 &&
        points > 640000)
    ) {
      const interval = setInterval(() => {
        setPoints((prevPoints) => prevPoints + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [points]);

  useEffect(() => {
    const updateDoc = async () => {
      await updateUserDoc("Users", telegramUserId, balance);
      updateDoc();
    };
  }, [balance]);

  const createDoc = async () => {
    try {
      // Replace this with the actual user ID
      const docRef = doc(db, "Users", telegramUserId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document with this ID already exists:", telegramUserId);
      } else {
        await setDoc(docRef, {
          balance: 1000,
        });
        console.log("Document created with ID: ", telegramUserId);
      }
    } catch (e) {
      console.error("Error checking or creating document: ", e);
    }
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
