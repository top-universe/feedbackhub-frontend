import AuthLayout from "../layouts/AuthLayout";
import { Link } from "react-router-dom";
import Input from '../components/Input/Input'; 
import PrimaryButton from '../components/button/PrimaryButton'; 

const SignUpPage = () => {
  return (
    <AuthLayout>
      <div className="flex items-center justify-center px-0 pt-0 pb-20 mt-[-20px] ">
        <div className="w-full h-40 pt-0 md:w-auto mx-auto">
          <div className="text-center md:text-left pt-0 px-0">
            <h1 className="text-lg font-bold  leading-tight tracking-tight mb-2 text-gray-700 md:text-xl dark:text-white">
              Login
            </h1>
          </div>
          <form className="w-full">
            <div className="mb-1"> 
              <label
                htmlFor="login"
                className="block mb-0.5 text-xs font-medium text-gray-400 text-left dark:text-white"
              >
                Email
              </label>
              <Input
          type="email"
          id="email"
          name="email"
          placeholder="youremail@hotmail.com"
          label=""
          style={{ height: '40px', width: '100%', padding: '5px', margin: '5px 0' }} 
        />
            </div>
            <div className="mb-1"> 
              <label
                htmlFor="password"
                className="block mb-0.5 text-xs font-medium text-gray-400 text-left dark:text-white"
              >
                Password
              </label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                label=""
                style={{ height: '40px', width: '100%', padding: '5px', margin: '5px 0' }} 
              />
            </div>
            <p className="text-xs leading-tight text-gray-500 text-left mb-5 mt-3 dark:text-gray-400">
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
              style={{ height: '35px', width: '100%', padding: '8px' }} 
            />
          </form>
          <div className="text-center ">
            <p className="text-xs text-center font-light text-gray-500 mt-8 dark:text-gray-400">
              Dont have an account?{" "}
              <Link
                to="/auth/login"
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
