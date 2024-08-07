import polygonImage from "@/assets/dollar.svg"

export function Summary() {
  return (
    <header className="border-b border-[#47656C] pt-6 pb-4 flex flex-col gap-2.5 items-center">
      <span className="text-white text-base font-medium">Balance</span>
      <div className="flex items-center gap-2">
        <img src={polygonImage} alt="Polygon image" className="w-10 h-10" />
        <strong className="text-white font-extrabold text-3xl">10087</strong>
      </div>
    </header>
  )
}