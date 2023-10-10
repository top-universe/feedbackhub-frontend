import AuthLayout from "../layouts/AuthLayout";
import { Link } from "react-router-dom";
import Input from '../components/Input/Input'; 
import PrimaryButton from '../components/Button/PrimaryButton'; 
import checkCircleIcon from '../assets/icons/check-circle.svg';

const ResetSuccessful = () => {
  return (
    <AuthLayout>
            <div className="flex items-center justify-center ">
            <div className="max-w-[391px] ">
                <div className="flex justify-center">
                    <div className="w-40 h-40 rounded-full relative overflow-hidden mb-9">
                    <img
                        src={checkCircleIcon} 
                        alt="Verification SVG"
                        className="w-full h-full object-cover absolute inset-0"
                    />
                    </div>
                </div>

                <h3 className="text-fh-5xl-semi text-center text-bluegray-9 font-bold">Reset Successful!</h3>
                <p className="text-grey-4f lg:text-3xl text-base text-center sm:text-sm font-normal">
                   Your password has been reset successfully
                </p>
                <div className="mt-8">
                    <PrimaryButton
                    text="Back to log in"
                    type="submit"
                    fullWidth={true}
                    />
                </div>
                </div>
            </div>
    </AuthLayout>
  )
};

export default ResetSuccessful;
