import AuthLayout from "../layouts/AuthLayout";
import { Link } from "react-router-dom";
import Input from '../components/Input/Input'; 
import PrimaryButton from '../components/Button/PrimaryButton'; 
import checkCircleIcon from '../assets/icons/check-circle.svg';

const ResetSuccessful = () => {
  return (
    <AuthLayout>
      <div className="flex items-center justify-center px-0 pt-3 pb-20 mt-[-50px] ">
        <div className="max-w-md p-8 text-center text-gray-800 h-40  rounded-3xl">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full relative overflow-hidden">
              <img
                src={checkCircleIcon} 
                alt="Verification SVG"
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-4 text-bluegray-9 font-bold">Reset Successful!</h3>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-grey-4f">
            Your Password has been reset Successfully 
          </p>
          <div className="mt-8">
            <PrimaryButton
              text="Back to log in"
              type="submit"
              fullWidth={true}
              style={{ height: '40px', width: '100%', padding: '8px' }} 
            />
          </div>
        </div>
      </div>
    </AuthLayout>
  )
};

export default ResetSuccessful;
