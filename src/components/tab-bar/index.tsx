import { ChartNoAxesColumnIncreasing, ListChecks, Pickaxe, Rocket, Users } from "lucide-react";
import { NavLink, NavLinkProps } from "react-router-dom";

interface LinkProps extends NavLinkProps { }

const Link = (props: LinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ?
          "bg-[#2C3649] flex flex-col w-20 h-20  items-center justify-center gap-2 rounded-xl text-[#38B8EA] border border-[#38B8EA] text-sm" :
          "bg-[#2C3649] flex w-20 h-20 flex-col items-center justify-center gap-2 rounded-xl text-[#7C7C7C] border border-transparent text-sm"
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
          <Users />
          <span>Ref</span>
        </Link>
        <Link to="/socials" >
          <ListChecks />
          <span>Tasks</span>
        </Link>
        <Link to="/home" >
          <Pickaxe />
          <span>Home</span>
        </Link>
        <Link to="/lottery" >
          <Rocket />
          <span>Boost</span>
        </Link>
        <Link to="/static" >
          <ChartNoAxesColumnIncreasing />
          <span>Stats</span>
        </Link>
      </nav>
    </footer>
  )
}