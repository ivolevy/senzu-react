import { CustomNav } from '../assets/comps/Nav'
import { HeaderComp } from '../assets/comps/HeaderComp'

export const Header = () => {
  return (
   <>
   <div className="header">
    <CustomNav />
    <HeaderComp />
   </div>
   </>
  )
}
