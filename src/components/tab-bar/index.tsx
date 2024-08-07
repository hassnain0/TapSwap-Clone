import { ChartNoAxesColumnIncreasing, ListChecks, Pickaxe, Rocket, Users } from "lucide-react";
import { NavLink, NavLinkProps } from "react-router-dom";

import lot from "@/assets/tab-bar/lot.svg"
import stats from "@/assets/tab-bar/stats.svg"
import t from "@/assets/tab-bar/Group 48095552.svg"
import al from "@/assets/tab-bar/Group 48095525.svg"
import ref from "@/assets/tab-bar/Group 48095644.svg"


interface LinkProps extends NavLinkProps { }

const Link = (props: LinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ?
          "bg-[#2C3649] flex flex-col w-20 h-20  items-center justify-center gap-1 rounded-xl text-[#38B8EA] border border-[#38B8EA] text-sm" :
          "bg-[#2C3649] flex w-20 h-20 flex-col items-center justify-center gap-1 rounded-xl text-[#7C7C7C] border border-transparent text-sm"
      }
      {...props}
    >
      {props.children}
    </NavLink>
  )
}


export function TabBar() {
  return (
    <footer className="w-full">
      <nav className="flex items-center justify-center gap-2 text-[#707489] text-xl pb-4 px-2">
        <Link to="/invites">
          <img src={ref} alt="Polygon image" className="w-6" />
          <span>Ref</span>
        </Link>
        <Link to="/socials" >
          <img src={t} alt="Polygon image" className="w-6" />
          <span>Tasks</span>
        </Link>
        <Link to="/home" >
          <img src={al} alt="Polygon image" className="w-6" />
          <span>Home</span>
        </Link>
        <Link to="/lottery" >
          <img src={lot} alt="Polygon image" className="w-6" />
          <span>Boost</span>
        </Link>
        <Link to="/static" >
          <img src={stats} alt="Polygon image" className="w-6" />
          <span>Stats</span>
        </Link>
      </nav>
    </footer>
  )
}