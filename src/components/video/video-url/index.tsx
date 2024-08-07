// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
//   SheetDescription,
// } from "@/components/ui/sheet"
// import { FormEvent, forwardRef, ReactNode, useState } from "react"

// import polygonImage from "@/assets/polygon.png"
// import person from "@/assets/person.png"

// export function VideoUrl() {
//   return (
//     <Sheet>
//       <SheetTrigger asChild>{props.children}</SheetTrigger>
//       <SheetContent side="bottom" className="bg-[#262F41] border border-[#262F41] rounded-t-3xl flex flex-col" ref={ref}>
//         <SheetHeader className="justify-center items-center">
//           <img src={person} className="w-16" />
//           <SheetTitle className="text-[#7B7878] text-lg">Watch the video, find the code and past it here</SheetTitle>
//           <SheetDescription />
//         </SheetHeader>

//         <form className="flex flex-col gap-4" onSubmit={handleSetFinish}>
//           <input type="text" placeholder="Enter" className="flex-1 custom-input h-12 bg-[#242C3B] rounded-lg text-white p-2 border-none outline-none" />
//           <button className="text-white flex justify-center items-center bg-button px-4 rounded-base h-12 w-full">Go</button>
//         </form>
//       </SheetContent>
//     </Sheet>
//   )
// }