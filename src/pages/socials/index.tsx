import { Item } from "../../components/item";
import youtubeIcon from "@/assets/videos-icons/youtube-icon.svg";
import xIcon from "@/assets/videos-icons/telegram-icon.svg";
import telegramIcon from "@/assets/videos-icons/x-icon.svg";
import whatsappIcon from "@/assets/videos-icons/whatsapp-icon.svg";
import { ToastContainer,} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useState } from "react";
const socials = [
  {
    id: 0,
    name: "Follow X Handle",
    icon: telegramIcon,
    value: 100000,
    url: " https://x.com/Sqaudinuim?t=3mLuXISo4l5se4hWHx8qaw&s=09",
  },
  {
    id: 1,
    name: "Follow Youtube",
    icon: youtubeIcon,
    value: 100000,
    url: "https://youtube.com/@sqaudinuimofficial?si=ibGPkSgATrF5-o9S ",
  },
  {
    id: 2,
    name: "Follow  Telegram",
    icon: xIcon,
    value: 100000,
    url: "https://t.me/sqaudinuim",
  },
  {
    id: 3,
    name: "Follow Whatsapp",
    icon: whatsappIcon,
    value: 100000,
    url: "https://whatsapp.com/channel/0029VakfBXxI1rckiu09qx12",
  },
];

export function Socials() {
  const [whatsappEnabled, setWhatsappEnabled] = useState(false);
  const [telegramEnabled, setTelegramEnabled] = useState(false);
  const [x_handleEnabled, setx_handleEnabled] = useState(false);
  const [youtubeEnabled, setYoutubeEnabled] = useState(false);
  const [refresh,setRefresh]=useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh); // Toggle refresh state
  };
  return (
    <div>
      <ToastContainer position="top-center" closeOnClick />
      <ul className="flex flex-col gap-2.5 mt-4">
      {socials.map((social) => {
          // Conditionally render based on the Firestore value
          if (social.id===3) {
            return (
              <Item
                title={social.name}
                socialIcon={social.icon}
                value={social.value}
                key={social.id}
                isClaimed={whatsappEnabled}
                url={social.url}
                id={social.id}
                onUpdate={handleRefresh}
              />
            );
          } 
          if (
            (social.id==2)
          ) {
            return (
              <Item
                title={social.name}
                socialIcon={social.icon}
                value={social.value}
                key={social.id}
                isClaimed={telegramEnabled}
                url={social.url}
                id={social.id}
                onUpdate={handleRefresh}
              />
            );
          } 
          if (
            (social.id==1)
          ) {
            return (
              <Item
                title={social.name}
                socialIcon={social.icon}
                value={social.value}
                key={social.id}
                isClaimed={youtubeEnabled}
                url={social.url}
                id={social.id}
                onUpdate={handleRefresh}
              />
            );
          } 
          if (
            (social.id==0)
          ) {
            return (
              <Item
                title={social.name}
                socialIcon={social.icon}
                value={social.value}
                key={social.id}
                isClaimed={x_handleEnabled}
                url={social.url}
                id={social.id}
                onUpdate={handleRefresh}
              />
            );
          }
          
        })}

      </ul>
    </div>
  );
}


