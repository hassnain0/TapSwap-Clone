import { ChartNoAxesColumnIncreasing, ListChecks, Pickaxe, Scroll, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <footer className="bg-navigation-background w-full bg-no-repeat">
      <nav className="flex items-center justify-evenly gap-4 text-[#707489] text-xl pt-8 pb-6">
        <NavLink to="/invites">
          <Users />
        </NavLink>
        <NavLink to="/socials">
          <ListChecks />
        </NavLink>
        <NavLink to="/">
          <Pickaxe />
        </NavLink>
        <NavLink to="/">
          <Scroll />
        </NavLink>
        <NavLink to="/static">
          <ChartNoAxesColumnIncreasing />
        </NavLink>
      </nav>
    </footer>
  )
}