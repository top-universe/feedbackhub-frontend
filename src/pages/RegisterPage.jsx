import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

const RegisterPage = () => {

    return (
        <AuthLayout>
            <p className="w-[400px] h-fit lg:text-center">
                Register Page. Try
                <span> </span>
                <Link to="/auth/login" className="no-underline text-pri-blue hover:underline">Log in</Link>
            </p>
        </AuthLayout>
    )
}

export default RegisterPage;