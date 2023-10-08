import AuthLayout from "../layouts/AuthLayout";
import { Link } from "react-router-dom";
import Input from '../components/Input/Input'; 
import PrimaryButton from '../components/button/PrimaryButton'; 
import checkCircleIcon from '../assets/icons/check-circle.svg';



const ResetPassword = () => {
  return (
    <AuthLayout>
<div className="flex items-center justify-center px-0 pt-8 pb-10 mt-[-40px] ">
<div className="w-full h-80 pt-0 md:w-auto mx-auto">
    <div className="text-center md:text-left pt-0 px-0">
    <h1 className="text-lg md:text-3xl font-bold leading-tight tracking-tight mb-5 text-gray-700 md:text-xl dark:text-white">
  Reset Password
</h1>
    </div>
    <form className="w-full">
      <div className="mb-5"> 
        <label
          htmlFor="email"
          className="block mb-0.5 text-xs font-medium text-gray-400 text-left dark:text-white"
        >
          New password
        </label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="**********"
          label=""
          style={{ height: '40px', width: '100%', padding: '5px', margin: '5px 0' }} 
        />
      </div>
      <div className="mb-1"> 
        <label
          htmlFor="password"
          className="block mb-0.5 text-xs font-medium text-gray-400 text-left dark:text-white"
        >
          Confirm Password
        </label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="**********"
          label=""
          style={{ height: '40px', width: '100%', padding: '5px', margin: '5px 0' }} 
        />
      </div>
      <p className="flex items-center text-success mb-2 mt-5 text-xs">
  <img
    src={checkCircleIcon}
    alt="Your Icon"
    className="w-4 h-4 mr-2"
  />
At least 8 characters
</p>
<p className="flex items-center text-success mb-2 text-xs">
  <img
    src={checkCircleIcon}
    alt="Your Icon"
    className="w-4 h-4 mr-2"
  />
  Includes at least one uppercase letter
</p>
<p className="flex items-center text-success mb-2 text-xs">
  <img
    src={checkCircleIcon}
    alt="Your Icon"
    className="w-4 h-4 mr-2"
  />
  include at least one number 
</p>
<p className="flex items-center text-success mb-8 text-xs">
  <img
    src={checkCircleIcon}
    alt="Your Icon"
    className="w-4 h-4 mr-2"
  />
  Include a special character (!@#$%^&)
</p>

      <PrimaryButton
        text="Reset Password"
        type="submit"
        fullWidth={true}
        style={{ height: '35px', width: '100%', padding: '8px' }} 
      />
    </form>

  </div>
</div>

    </AuthLayout>
  );
};

export default ResetPassword;
