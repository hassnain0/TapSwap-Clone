import dolarImage from "@/assets/dollar.svg"

import checkedImage from "@/assets/invite-status/checked.svg"
import notCheckedImage from "@/assets/invite-status/not-checked.svg"

interface InviteProps {
  name: string;
  value: string;
  checked?: boolean
}

export function Invite({ name, value, checked = false }: InviteProps) {
  return (
    <li className="flex items-center justify-between bg-[#2C3649] rounded-[10px] p-4">
      <div className="flex items-center gap-2">
        <div className="border-2 border-[#38B8EA] bg-white rounded-full w-10 h-10" />
        <div className="flex flex-col gap-[6px]">
          <strong className="text-[#E7E7E7] text-xl font-medium">{name}</strong>
          <div className="flex items-center gap-1">
            <img src={dolarImage} alt="" className="w-4 h-4" />
            <span className="text-[#38B8EA] text-[10px] font-medium">+{value}</span>
          </div>
        </div>
      </div>

      <div>
        {checked ? (
          <div className="flex flex-col items-end gap-[6px] justify-between">
            <img src={checkedImage} alt="Checked" className="w-4 h-4" />
            <span className="text-sm text-white">Lottery Status: <span className="text-green-500 text-xs">finished</span></span>
          </div>
        ) : (
          <div className="flex flex-col items-end gap-[6px] justify-between">
            <img src={notCheckedImage} alt="Checked" className="w-4 h-4" />
            <span className="text-sm text-white">Lottery Status: <span className="text-red-500 text-xs">pending</span></span>
          </div>
        )}

      </div>
    </li>
  )
}