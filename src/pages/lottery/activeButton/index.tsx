interface ActiveButtonProps {
  current: number;
  position: number;
  setCurrent: () => void
  image: string;
}

export function ActiveButton({ current, image, position, setCurrent }: ActiveButtonProps) {
  return (
    <button onClick={setCurrent} className={`w-14 h-14 p-4 flex justify-center items-center ${current === position ? "bg-[#34C8E8]" : "bg-[#353F54]"} rounded-md`}>
      <img src={image} alt="" className="h-full object-contain" />
    </button>
  )
}