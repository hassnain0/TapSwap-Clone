import { Progress } from "./progress";
import { ClipLoader } from "react-spinners";
import dolarImage from "@/assets/dollar.svg";
import ribbon from "@/assets/ribbon.svg";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface ItemProps {
  title: string;
  total: number;
  rewards: number;
}

export function Task({ title, rewards, total }: ItemProps) {
  const [progressValue, setProgressValue] = useState(0);
  const [claimed, setClaimed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [claimedDone, setClaimedDone] = useState(false);

  const claimRewards = async () => {
    setLoading(true);
    const collectionName = "Users";
    const telegramUserId = "1234";

    const data = await fetchData(collectionName, telegramUserId);
    const balance = data?.balance + rewards;

    if (balance) {
      await updateUserDoc(collectionName, telegramUserId, balance);
      setClaimedDone(true);
      setLoading(false);
      toast.success("Claimed Successfully");
    }
  };

  useEffect(() => {
    const calculatevalue = () => {
      const value = (5 / total) * 100;
      setProgressValue(value);
      if (progressValue === 100) {
        setClaimed(true);
      }
    };
    calculatevalue();
  });

  return (
    <li className="bg-[#2C3649] rounded-[10px] p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center gap-2">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <img src={ribbon} alt="" className="w-6 h-6" />
            <p className="text-[#F9F9F9] text-[13px] font-semibold">{title}</p>
          </div>
          <div className="flex items-center gap-1 ml-1 mt-1">
            <img src={dolarImage} alt="" className="w-3 h-3" />
            <span className="flex items-center gap-1 text-[#E7E7E7] text-[11px]">
              {rewards}
            </span>
          </div>
        </div>

        {loading ? (
          <ClipLoader color="#F9F9F9" size={24} />
        ) : claimedDone ? (
          <div className="circle flex justify-center items-center mr-2 bg-green-500  rounded-full w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ) : (
          <button
            className={`${
              claimed ? "bg-green-500 text-white" : "bg-white-06 text-[#595959]"
            } text-xs font-medium flex justify-center items-center rounded-lg px-3 py-1`}
            onClick={() => claimRewards()} // Example toggle function
          >
            Claim
          </button>
        )}
      </div>

      <Progress value={progressValue} color="#3B406C" />
    </li>
  );
}
