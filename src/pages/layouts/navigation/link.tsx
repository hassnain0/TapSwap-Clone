import { LinkProps, NavLink } from "react-router-dom";

export function Link(props: LinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "bg-white/10 text-white px-5 py-3 rounded-md text-xs" : "text-white px-5 py-3 rounded-md text-xs"
      }
      {...props}
    >
      {props.children}
    </NavLink>
  )
}