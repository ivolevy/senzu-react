import { CustomNav } from "../assets/comps/header/Nav"
import { Hero } from "../assets/comps/header/Hero"

export const Header = () => {
  return (
   <>
    <CustomNav />
   <div className="header bg-red-500" id="header">
    <Hero />
   </div>
   </>
  )
}
