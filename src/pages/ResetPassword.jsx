import AuthLayout from "../layouts/AuthLayout";
import { Link } from "react-router-dom";
import Input from '../components/Input/Input'; 
import PrimaryButton from '../components/button/PrimaryButton'; 
import checkCircleIcon from '../assets/icons/check-circle.svg';



const ResetPassword = () => {
  return (
    <AuthLayout>
        <div className="flex items-center justify-center m-16 pt-16">
        <div className="max-w-[396px] ">
        <div className="text-center md:text-left pt-0 px-0">
        <h1 className="text-lg font-bold  leading-tight tracking-tight mb-8  text-gray-700 text-fh-2xl-semi lg:text-fh-5xl-semi  dark:text-white">
                Reset Password
          </h1>
          </div>
          <form className="w-full">
          <div className="mt-8"> 
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="**********"
            label="New Password"
          />
           </div>
          <div className="mb-1"> 
          <Input
            type="password"
            id="password"
            name="Confirm password"
            placeholder="**********"
            label="Password"
          />
         </div>
          <p className="flex items-center text-fh-base-mid lg:text-fh-sm-mid  text-success mb-2 mt-8 text-xs">
         <img
         src={checkCircleIcon}
        alt="Your Icon"
        className="w-4 h-4 mr-2"
       />
       At least 8 characters
      </p>
      <p className="flex items-center text-fh-base-mid  lg:text-fh-sm-mid  text-success mb-2 text-xs">
       <img
      src={checkCircleIcon}
      alt="Your Icon"
      className="w-4 h-4 mr-2"
      />
      Includes at least one uppercase letter
      </p>
     <p className="flex items-center text-fh-base-mid  lg:text-fh-sm-mid   text-success mb-2 text-xs">
      <img
      src={checkCircleIcon}
      alt="Your Icon"
      className="w-4 h-4 mr-2"
     />
     include at least one number 
    </p>
    <p className="flex items-center text-fh-base-mid  lg:text-fh-sm-mid  text-success mb-8 text-xs">
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
        />
      </form>

      </div>
        </div>

    </AuthLayout>
  );
};

export default ResetPassword;
