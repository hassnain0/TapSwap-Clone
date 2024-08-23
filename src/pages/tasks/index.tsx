
import { ToastContainer } from "react-toastify"
import { Task } from "./task"

export function Tasks() {


  const inviteFriends=[
    {
      id:0,
      invitation:5,
      title:"Invite 5 friends",
      rewards:5000,
    },
    {
      id:1,
      invitation:10,
      title:"Invite 10 friends",
      rewards:20000,
    },
    {
      id:2,
      invitation:20,
      title:"Invite 20 friends",
      rewards:40000,
    },
    {
      id:3,
      invitation:40,
      title:"Invite 40 friends",
      rewards:80000,
    },
    {
      id:4,
      invitation:80,
      title:"Invite 80 friends",
      rewards:160000,
    },
    {
      id:5,
      invitation:160,
      title:"Invite 160 friends",
      rewards:3200000,
    },
    {
      id:6,
      invitation:320,
      title:"Invite 320 friends",
      rewards:6400000,
    },
    {
      id:7,
      invitation:640,
      title:"Invite 640 friends",
      rewards:12800000,
    },
    {
      id:8,
      invitation:1280,
      title:"Invite 640 friends",
      rewards:25600000,
    },
    {
      id:9,
      invitation:2560,
      title:"Invite 640 friends",
      rewards:51200000,
    },
  ]
  return (
    <ul className="flex flex-col gap-2.5 mt-4 mb-1">
     <div className="space-y-4 overflow-y-scroll max-h-[600px]">
      <ToastContainer position="top-center" closeOnClick />
     {inviteFriends.map((data)=>{
      return(
      <Task
      key={data.id}
      title= {data.title}
      rewards={data.rewards}
      total={data.invitation}
    />
      )
     })}
      </div>
    </ul>
  )
}
