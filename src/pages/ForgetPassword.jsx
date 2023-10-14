import AuthLayout from "../layouts/AuthLayout";
import { Link } from "react-router-dom";
import Input from '../components/Input/Input';
import PrimaryButton from '../components/Button/PrimaryButton';

const BottomChild = () => (
  <div className="text-center lg:mt-8">
    <Link
      to="/login"
      className="text-blue-600 text-sm lg:text-base hover:underline"
    >
      Back to log in
    </Link>
  </div>
)

const ForgetPassword = () => {
  return (
    <AuthLayout bottomChild={<BottomChild />}>
      <div className="w-full md:w-[396px] mx-auto flex items-center justify-center ">
        <div className="w-full">
          <div className="text-center md:text-left pt-0 px-0">
            <div className="max-w-sm mx-auto">
              <h1 className="text-center lg:text-start text-bluegray-9 text-fh-2xl-semi lg:text-fh-5xl-semi">
                Forgot Password
              </h1>
              <p className="text-bluegray-9 text-center lg:text-left mt-9 mb-4 lg:text-base text-sm">
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
            />
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgetPassword;
