import { Item } from "../../components/item"

import youtubeIcon from "@/assets/videos-icons/youtube-icon.svg"
import xIcon from "@/assets/videos-icons/telegram-icon.svg"
import telegramIcon from "@/assets/videos-icons/x-icon.svg"

const socials = [
  {
    id: 0,
    name: "Follow Telegram",
    icon: telegramIcon,
    value: "100 000"
  },
  {
    id: 1,
    name: "Follow Youtube",
    icon: youtubeIcon,
    value: "100 000"
  },
  {
    id: 2,
    name: "Follow X Handle",
    icon: xIcon,
    value: "100 000"
  }
]

export function Socials() {
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


