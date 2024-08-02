import polygonImage from "../../assets/polygon.png"

export function Summary() {
  return (
    <header className="border-b border-[#47656C] pt-6 pb-4 flex flex-col gap-2.5 items-center">
      <span className="text-white text-base font-medium">Balance</span>
      <div className="flex items-center">
        <img src={polygonImage} alt="Polygon image" className="text-2xl" />
        <strong className="text-white font-extrabold text-3xl">10087</strong>
      </div>
    </header>
  )
}