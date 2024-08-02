import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import persons from "../../assets/persons.png"
import sony from "../../assets/sony-icons.png"

export function Splash() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate("/home")
    }, 1500);
  }, [])

  return (
    <div className="bg-[#242C3B] min-h-screen flex flex-col items-center bg-bg bg-no-repeat bg-left-bottom">
      <header className="pt-6 pb-4 flex flex-col gap-2.5 items-center max-w-48">
        <p className="text-white text-base font-medium text-center">Click The Shape ToChoose Difficulty Level</p>
        <span className="text-center text-white text-xs">More the edges more the difficulty</span>
      </header>      

      <img src={sony} alt="" />
      <img src={persons} alt="" className="w-[342px]"/>
    </div>
  )
}
