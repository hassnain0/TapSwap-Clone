import { Item } from "./item"

import youtubeIcon from "@/assets/videos-icons/youtube-icon.svg"

const socials = [
  {
    id: 0,
    name: "Follow Youtube is clossin",
    icon: youtubeIcon,
    value: "100 000"
  },
  {
    id: 1,
    name: "Follow Youtube is clossin",
    icon: youtubeIcon,
    value: "100 000"
  },
  {
    id: 2,
    name: "Telegae  hhhj gous jod ",
    icon: youtubeIcon,
    value: "100 000"
  }
]

export function Videos() {
  return (
    <ul className="flex flex-col gap-2.5 mt-4">
      {socials.map((social) => (
        <Item
          title={social.name}
          socialIcon={social.icon}
          value={social.value}
          key={social.id}
        />
      ))}
    </ul>
  )
}
