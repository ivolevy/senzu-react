import logo from '../assets/images/logos/complete-bg.png'

export const Footer = () => {
  return (
    <footer className="footer footer-center bg-szGreen text-szText font-quicksand p-10" id='footer'>
        <aside>
            <img src={logo} alt="Senzu creative studio" width={200}/>
            <p className="">
            Providing digital services since 2023
            </p>
            <b><p>Copyright © {new Date().getFullYear()} - All right reserved</p></b>
        </aside>
    </footer>
  )
}
