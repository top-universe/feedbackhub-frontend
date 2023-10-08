import AuthLayout from "../layouts/AuthLayout";
import { Link } from "react-router-dom";
import Input from '../components/Input/Input'; 
import PrimaryButton from '../components/button/PrimaryButton'; 

const ForgetPassword = () => {
  return (
    <AuthLayout>
<div className="flex items-center justify-center px-0 pt-20  mt-[-80px] ">
<div className="w-full h-64 pt-0 md:w-auto mx-auto">
          <div className="text-center md:text-left pt-0 px-0">
            <div className="max-w-sm mx-auto">
              <h1 className="text-lg md:text-4xl h-auto font-bold leading-tight tracking-tight mb-5 text-gray-700 md:text-xl dark:text-white">
                Forget Password
              </h1>
              <p className="text-sm font-normal text-gray-700 dark:text-gray-400 leading-7 text-center mb-5 sm:text-left">
              Enter the email used to set up your account and we will send an email with instructions to reset your password.
            </p>
            </div>
          </div>
          <form className="w-full">
            <div className="mb-5"> 
              <label
                htmlFor="forget-password"
                className="block mb-0.5 text-xs text-pri-blue font-medium text-gray-400 text-left dark:text-white"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="youremail@hotmail.com"
                label=""
                style={{ height: '50px', width: '100%', padding: '5px', margin: '5px 0' }} 
              />
            </div>

            <PrimaryButton
              text="Send Reset Instructions"
              type="submit"
              fullWidth={true}
              style={{ height: '50px', width: '100%', padding: '8px' }} 
            />
          </form>
          <div className="text-center mt-8">
          <Link
    to="/auth/login"
     className="font-medium text-blue-600 dark:text-primary-500 text-xs underline"
    >
     Back to log in
     </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgetPassword;
