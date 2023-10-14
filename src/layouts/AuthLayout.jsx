import AuthHeaderDesktop from "../sections/AuthHeaderDesktop";
import AuthHeaderMobile from "../sections/AuthHeaderMobile";
import PropTypes from "prop-types";

const AuthLayout = ({ children }) => {

    return (
        <div className="w-full bg-yellow-2 lg:bg-white h-screen">
            <AuthHeaderDesktop />
            <main className="w-full container-108 pb-16 pt-4 lg:pt-16 h-full lg:h-authMainHeight flex flex-col items-center justify-center">
                <AuthHeaderMobile />
                <section className="w-full bg-white-f9 mt-10 rounded-2xl border border-bluegray-3 px-4 py-8 lg:mt-0 lg:bg-transparent lg:border-none lg:p-0 lg:rounded-none">
                    {children}
                </section>
            </main>
        </div>
    )
}

AuthLayout.propTypes = {
    children: PropTypes.element
}

export default AuthLayout;