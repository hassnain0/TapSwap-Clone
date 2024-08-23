import polygonImage from "@/assets/dollar.svg"
import db from "@/constants/Firebase"
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export function Summary() {

  //States
  const [balance,setBalance]=useState(0)
  useEffect(() => {
    async function getData() {
      try {
        const docRef = doc(db, "UserBalance", "User1");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // If the document exists, access and log the 'Balance' field
          const balance = docSnap.data().Balance;
          setBalance(balance);
          console.log("Type of Balance:", typeof balance);
        } else {
          console.log("No such document!");
        }
      } catch (e) {
        console.error("Error fetching document: ", e);
      }
    }
    getData();
  }, []);
  return (
    <header className="border-b border-[#47656C] pt-6 pb-4 flex flex-col gap-2.5 items-center">
      <span className="text-white text-base font-medium">Balance</span>
      <div className="flex items-center gap-2">
        <img src={polygonImage} alt="Polygon image" className="w-10 h-10" />
        <strong className="text-white font-extrabold text-3xl">{balance}</strong>
      </div>
    </header>
  )
}