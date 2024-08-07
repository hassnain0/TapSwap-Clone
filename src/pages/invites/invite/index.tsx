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
    <li className="flex items-center bg-[#2C3649] rounded-[10px] p-4">
      <div className="border-2 border-[#38B8EA] bg-white rounded-full w-10 h-10" />
      <div className="flex flex-col gap-[2px] w-full ml-2">
        <div className="flex justify-between flex-1 items-center">
          <strong className="text-white text-lg font-medium">{name}</strong>
          {checked ? (
            <img src={checkedImage} alt="Checked" className="w-4 h-4" />
          ) : (
            <img src={notCheckedImage} alt="Checked" className="w-4 h-4" />
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img src={dolarImage} alt="Checked" className="w-4 h-4" />
            <span className="text-[#38B8EA] text-[10px] font-medium">+{value}</span>
          </div>
          {checked ? (
            <span className="text-[13px] text-white">Lottery Status: <span className="text-green-500 text-xs">finished</span></span>
          ) : (
            <span className="text-[13px] text-white">Lottery Status: <span className="text-red-500 text-xs">pending</span></span>
          )}
        </div>
      </div>
    </li>
  )
}