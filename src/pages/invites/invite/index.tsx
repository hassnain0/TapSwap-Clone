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
          <div className="border-2 border-[#38B8EA] bg-white rounded-full w-8 h-8"/>
          <strong className="text-[#E7E7E7] text-xs font-medium">{name}</strong>
        </div>

        <strong className="text-[#38B8EA] text-[17px]">+{value}</strong>
      </Link>
    </li>
  )
}