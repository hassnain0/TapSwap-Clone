import { Link } from "react-router-dom"

interface InviteProps {
  name: string;
  value: string;
}

export function Invite({ name, value }: InviteProps) {
  return (
    <li>
      <Link to="/" className="flex items-center justify-between bg-[#2C3649] rounded-[10px] p-4">
        <div className="flex items-center gap-2">
          <div className="border-2 border-[#38B8EA] bg-white rounded-full w-10 h-10"/>
          <div className="flex flex-col gap-[2px]">
            <strong className="text-[#E7E7E7] text-xs font-medium">{name}</strong>
            <span className="text-[#E7E7E7]/70 text-[10px] font-medium">lottery</span>
          </div>
        </div>

        <strong className="text-[#38B8EA] text-[17px]">+{value}</strong>
      </Link>
    </li>
  )
}