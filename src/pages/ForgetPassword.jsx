import AuthLayout from "../layouts/AuthLayout";
import { Link } from "react-router-dom";
import Input from '../components/Input/Input'; 
import PrimaryButton from '../components/button/PrimaryButton'; 

const ForgetPassword = () => {
  return (
    <AuthLayout>
        <div className="flex items-center justify-center ">
        <div className="max-w-[392px] g-8 mt-8 ">
          <div className="text-center md:text-left pt-0 px-0">
            <div className="max-w-sm mx-auto">
            <h1 className="text-lg font-bold  leading-tight tracking-tight  text-gray-700 text-fh-2xl-semi lg:text-fh-5xl-semi  dark:text-white">
                Forgot Password
              </h1>
              <p className="text-xs font-light text-gray-700 text-center md:text-left mt-9 mb-4 lg:text-base sm:text-sm font-normal">
              Enter the email used to set up your account and we will send an email with instructions to reset your password.
            </p>
            </div>
          </div>
          <form className="w-full">
            <div className="mb-8"> 
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="youremail@hotmail.com"
                label="Email"
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
         to="/login"
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
