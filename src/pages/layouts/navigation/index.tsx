import { Link } from "./link";

export function Navigation() {
  return (
    <nav className="flex items-center justify-center gap-4 border border-[#33454B] bg-[#2C3649] px-3 py-2 rounded-[10px]">
      <Link to="/videos">
        Videos
      </Link>
      <Link to="/socials">
        Socials
      </Link>
      <Link to="/tasks">
        Ref Tasks
      </Link>
    </nav>
  )
}

