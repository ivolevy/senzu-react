import logo from '../images/nav-logo.png';

const DaisyNav = () => {
    return (
        <div className="navbar nav">
            <div className="navbar-start">
                {/* Menú hamburguesa */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2 4a2 2 0 100 4h16a2 2 0 100-4H2zm0 6a2 2 0 100 4h16a2 2 0 100-4H2zm0 6a2 2 0 100 4h16a2 2 0 100-4H2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>

                <img src={logo} alt="Senzu creative studio" className='w-40 p-5' />
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>

            <div className="navbar-end pr-5">
                <a className="btn button">Hablemos!</a>
            </div>
        </div>
    );
}

export const CustomNav = () => {
    return (
        <>
            <DaisyNav />
        </>
    );
}
