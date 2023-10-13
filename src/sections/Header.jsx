import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons/logo-complete.svg";
import menuOpen from "../assets/icons/menu-open.svg";
import menuClose from "../assets/icons/menu-close.svg";
import SecondaryButton from "../components/Button/SecondaryButton";
import PrimaryButton from "../components/Button/PrimaryButton";
import useHeader from "../hooks/useHeader";


const Header = () => {
  const { openMenu, closeMenu, navLinkClasses, menuIsOpen } = useHeader();

  return (
    <header className={`container-64 py-2 lg:py-8 relative bg-white `}>
      <section className='bg-transparent'>
        <div className="w-full flex justify-between items-center">
          <Link to="/" className="text-decoration-none">
            <img src={logo} alt="" className="" />
          </Link>
          <nav className='w-fit hidden lg:block'>
            <ul className='w-max flex gap-4 list-none'>
              <li className='w-max py-2 px-4'>
                <NavLink to="#" className={navLinkClasses}>
                  Write Review
                </NavLink>
              </li>
              <li className='w-max py-2 px-4'>
                <NavLink to="#" className={navLinkClasses}>
                  Categories
                </NavLink>
              </li>
              <li className='w-max py-2 px-4'>
                <NavLink to="#" className={navLinkClasses}>
                  Integrations
                </NavLink>
              </li>
              <li className='w-max py-2 px-4'>
                <NavLink to="#" className={navLinkClasses}>
                  For Business
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className='w-fit hidden lg:flex items-center gap-4'>
            <SecondaryButton text="Login" />
            <PrimaryButton text="Get Started" />
          </div>
          {menuIsOpen ? (
            <button className="w-fit p-0 lg:hidden focus:outline-none border-none bg-transparent" onClick={closeMenu}>
              <img src={menuClose} alt="" className="w-10 h-10" />
            </button>
          ) : (
            <button className="w-fit p-2 lg:hidden focus:outline-none border-none bg-transparent" onClick={openMenu}>
              <img src={menuOpen} alt="" className="w-6 h-6" />
            </button>
          )}
        </div>
        <div className={`w-full bg-transparent absolute left-0 top-14 flex justify-center backdrop-blur-[5px] overflow-hidden \
        ${menuIsOpen ? "max-h-fit p-10 opacity-100" : "p-0 max-h-0 opacity-40"} transition-all duration-500 ease-in-out lg:hidden`}>
          <div className="w-[150px] grid gap-10">
            <nav className='w-full'>
              <ul className='w-full grid list-none gap-8'>
                <li className='w-full text-center'>
                  <NavLink to="#" className={navLinkClasses}>
                    Write Review
                  </NavLink>
                </li>
                <li className='w-full text-center'>
                  <NavLink to="#" className={navLinkClasses}>
                    Categories
                  </NavLink>
                </li>
                <li className='w-full text-center'>
                  <NavLink to="#" className={navLinkClasses}>
                    Integrations
                  </NavLink>
                </li>
                <li className='w-full text-center'>
                  <NavLink to="#" className={navLinkClasses}>
                    For Business
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="w-full grid place-items-center gap-4">
              <SecondaryButton text="Login" styles={{ width: "100%" }} />
              <PrimaryButton text="Get Started" styles={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section>
    </header>
  )
};

export default Header;
