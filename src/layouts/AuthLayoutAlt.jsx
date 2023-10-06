import AuthHeader from "../sections/AuthHeader";
import PropTypes from "prop-types";

const AuthLayoutAlt = ({ children }) => {

    return (
        <div className="w-full bg-white h-screen">
            <AuthHeader />
            <main className="w-full container-108 pb-16 pt-4 lg:pt-16 h-authMainHeight flex items-start lg:items-center lg:justify-center">
                {children}
            </main>
        </div>
    )
}

AuthLayoutAlt.propTypes = {
    children: PropTypes.element
}

export default AuthLayoutAlt