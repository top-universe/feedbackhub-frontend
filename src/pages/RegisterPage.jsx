import { Link } from "react-router-dom";
import AuthLayoutAlt from "../layouts/AuthLayoutAlt";

const RegisterPage = () => {

    return (
        <AuthLayoutAlt>
            <p className="w-[400px] h-fit lg:text-center">
                Register Page. Try
                <span> </span>
                <Link to="/auth/login" className="no-underline text-pri-blue hover:underline">Log in</Link>
            </p>
        </AuthLayoutAlt>
    )
}

export default RegisterPage;