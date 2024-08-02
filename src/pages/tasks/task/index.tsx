import { Progress } from "./progress";

import poly from "@/assets/blue-polygon.png"
import ribbon from "@/assets/ribbon.png"

interface ItemProps {
  title: string;
  value: string;
}

export function Task({ title, value }: ItemProps) {
  return (
    <li className="bg-[#2C3649] rounded-[10px] p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center gap-2">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <img src={ribbon} alt="" className="w-6 h-6" />
            <p className="text-[#F9F9F9] text-[13px] font-semibold">{title}</p>
          </div>
          <div className="flex items-center gap-1 ml-1 mt-1">
            <img src={poly} alt="" className="w-3 h-3" />
            <span className="flex items-center gap-1 text-[#E7E7E7] text-[11px]">{value}</span>
          </div>
        </div>

        <button className="text-[#595959] text-xs font-medium bg-white-06 flex justify-center items-center rounded-lg px-3 py-1">Claim</button>
      </div>

      <Progress value={40}/>
    </li>
  )
}