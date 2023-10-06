import AuthLayout from "../layouts/AuthLayout";
import { Link } from "react-router-dom";

const LoginPage = () => {

    return (
        <AuthLayout>
            <p className="w-full lg:w-[400px] h-fit text-center lg:mx-auto">
                Login Page. Try
                <span> </span>
                <Link to="/auth/register" className="no-underline text-pri-blue hover:underline">Sign up</Link>
            </p>
        </AuthLayout>
    )
}

export default LoginPage;