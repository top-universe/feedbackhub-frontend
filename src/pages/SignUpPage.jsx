import AuthLayout from "../layouts/AuthLayout";
import { Link } from "react-router-dom";
import Input from '../components/Input/Input'; 
import PrimaryButton from '../components/button/PrimaryButton'; 

const SignUpPage = () => {
  return (
    <AuthLayout>
<div className="flex items-center justify-center px-0 pt-8 pb-12 mt-[-40px] ">
<div className="w-full h-80 pt-0 md:w-auto mx-auto">
    <div className="text-center md:text-left pt-0 px-0">
      <h1 className="text-lg font-bold  leading-tight tracking-tight mb-2 text-gray-700 md:text-xl dark:text-white">
        Sign Up
      </h1>
      <p className="text-xs font-light text-gray-700 text-center md:text-left mb-8 dark:text-gray-400">
        Use your email to sign up:
      </p>
    </div>
    <form className="w-full">
      <div className="mb-1"> 
        <label
          htmlFor="username"
          className="block mb-0.5 text-xs font-medium text-gray-400 text-left dark:text-white"
        >
        UserName
        </label>
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          label=""
          style={{ height: '40px', width: '100%', padding: '5px', margin: '5px 0' }} 
        />
      </div>
      <div className="mb-1"> 
        <label
          htmlFor="email"
          className="block mb-0.5 text-xs font-medium text-gray-400 text-left dark:text-white"
        >
          Email
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
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
        By clicking on signup, you agree to Feedback Hub’s{" "}
        <Link
          to="#"
          className="font-medium text-blue-600 hover:underline text-left dark:text-blue-500 text-xs"
        >
          Terms and Conditions
        </Link>{" "}
        and{" "}
        <Link
          to="#"
          className="font-medium text-blue-600 hover:underline text-left dark:text-blue-500 text-xs"
        >
          Privacy Policy
        </Link>
      </p>

      <PrimaryButton
        text="Sign Up"
        type="submit"
        fullWidth={true}
        style={{ height: '35px', width: '100%', padding: '8px' }} 
      />
    </form>
    <div className="text-center ">
  <p className="text-xs text-center font-light text-gray-500 mt-8 dark:text-gray-400">
    Already have an account?{" "}
    <Link
      to="/auth/login"
      className="font-medium text-center text-blue-600 hover:underline dark:text-primary-500 text-xs"
    >
      Log In
    </Link>
  </p>
</div>

  </div>
</div>

    </AuthLayout>
  );
};

export default SignUpPage;
