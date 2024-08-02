import { ChevronRight } from "lucide-react"

import poly from "../../assets/poly.png"

interface ItemProps {
  title: string;
  socialIcon: string;
  value: string;
}

export function Item({ socialIcon, title, value }: ItemProps) {
  return (
    <li className="flex items-center justify-between bg-[#2C3649] rounded-[10px] p-4">
      <div className="flex items-center gap-2">
        <img src={socialIcon} alt="" className="w-7 h-7" />
        <div className="flex flex-col gap-[2px]">
          <strong className="text-[#F9F9F9] text-xs font-semibold">{title}</strong>
          <span className="flex items-center gap-1 text-[#E7E7E7] text-[11px]">
            <img src={poly} alt="" className="w-3 h-3" /> {value}
          </span>
        </div>
      </div>
      <ChevronRight color="#BEBEBE" size={32} />
    </li>
  )
}