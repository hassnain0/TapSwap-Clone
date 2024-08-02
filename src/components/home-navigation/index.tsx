import { NavLink } from "react-router-dom";

export function HomenNavigation() {
  return (
    <nav className="flex items-center justify-center gap-4 border border-[#33454B] bg-[#2C3649] px-3 py-2 rounded-[10px]">
      <NavLink to="/videos"
        className={({ isActive }) =>
          isActive ? "bg-white/10 text-white px-5 py-3 rounded-md text-xs" : "text-white px-5 py-3 rounded-md text-xs"
        }>
        Videos
      </NavLink>
      <NavLink to="/socials"
        className={({ isActive }) =>
          isActive ? "bg-white/10 text-white px-5 py-3 rounded-md text-xs" : "text-white px-5 py-3 rounded-md text-xs"
        }>
        Socials
      </NavLink>
      <NavLink to="/tasks"
        className={({ isActive }) =>
          isActive ? "bg-white/10 text-white px-5 py-3 rounded-md text-xs" : "text-white px-5 py-3 rounded-md text-xs"
        }>
        Ref Tasks
      </NavLink>
    </nav>
  )
}