import { Link } from "react-router-dom";
import mobileLogo from "../assets/icons/logo-complete-mobile.svg";

const AuthHeaderMobile = () => {

    return (
        <header className="container-64 bg-transparent py-0 lg:hidden flex justify-center">
            <Link to="/">
                <img src={mobileLogo} alt="" className="" />
            </Link>
        </header>
    )
}

export default AuthHeaderMobile;