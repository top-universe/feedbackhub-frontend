import AuthLayout from "../layouts/AuthLayout";
import { Link } from "react-router-dom";
import Input from '../components/Input/Input'; 
import PrimaryButton from '../components/button/PrimaryButton'; 

const SignUpPage = () => {
  return (
    <AuthLayout>
      <div className="flex items-center justify-center ">
      <div className="max-w-[391px] ">
          <div className="text-center md:text-left pt-0 px-0">
          <h1 className="text-lg font-bold  leading-tight tracking-tight  text-gray-700 text-fh-2xl-semi lg:text-fh-5xl-semi mb-9 dark:text-white">
              Login
            </h1>
          </div>
          <form className="w-full">
            <div className="mb-1"> 

              <Input
          type="email"
          id="email"
          name="email"
          placeholder="youremail@hotmail.com"
          label="Email"
        />
            </div>
            <div className="mb-1"> 
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                label="Password"
              />
            </div>
            <p className="text-xs leading-tight text-gray-500 text-left mb-9 mt-4 dark:text-gray-400">
              <Link
                to="#"
                className="font-medium text-blue-600 hover:underline text-left dark:text-blue-500 text-xs"
              >
                  Forgot Password?          
                   </Link>{" "}
            </p>

             <PrimaryButton
              text="Log in"
              type="submit"
              fullWidth={true}
              />
             </form>
             <div className="text-center ">
             <p className="text-xs text-center font-light text-gray-500 mt-5 dark:text-gray-400">
              Dont have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-center text-blue-600 hover:underline dark:text-primary-500 text-xs"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUpPage;
