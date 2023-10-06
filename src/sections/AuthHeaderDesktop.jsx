import { Link } from "react-router-dom";
import desktopLogo from "../assets/icons/logo-complete.svg";

const AuthHeaderDesktop = () => {

    return (
        <header className="container-64 bg-transparent py-0 lg:py-8 hidden lg:block">
            <Link to="/">
                <img src={desktopLogo} alt="" className="" />
            </Link>
        </header>
    )
}

export default AuthHeaderDesktop;