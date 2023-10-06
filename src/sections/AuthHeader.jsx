import { Link } from "react-router-dom";
import desktopLogo from "../assets/icons/logo-complete.svg";
import mobileLogo from "../assets/icons/logo-complete-mobile.svg";

const AuthHeaderAlt = () => {

    return (
        <header className="container-64 bg-white py-12 lg:py-8">
            <Link to="/">
                <img src={desktopLogo} alt="" className="hidden lg:block" />
                <img src={mobileLogo} alt="" className="block lg:hidden" />
            </Link>
        </header>
    )
}

export default AuthHeaderAlt;