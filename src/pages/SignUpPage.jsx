import AuthLayout from "../layouts/AuthLayout";
import { Link } from "react-router-dom";
import Input from '../components/Input/Input';
import PrimaryButton from '../components/Button/PrimaryButton';

const BottomChild = () => (
  <div className="text-center ">
    <p className="text-sm lg:text-base text-center text-bluegray-9 lg:mt-4">
      Already have an account?{" "}
      <Link
        to="/login"
        className="text-blue-600 hover:underline"
      >
        Log In
      </Link>
    </p>
  </div>
)

const SignUpPage = () => {
  return (
    <AuthLayout bottomChild={<BottomChild />}>
      <div className="w-full md:w-[396px] mx-auto flex items-center justify-center ">
        <div className="w-full">
          <div className="text-center md:text-left pt-0 px-0">
            <h1 className="text-center lg:text-start  text-bluegray-9 text-fh-2xl-semi lg:text-fh-5xl-semi ">
              Sign Up
            </h1>
            <p className="text-sm lg:text-base text-bluegray-9 text-center lg:text-left mt-9 mb-4 ">
              Use your email to sign up:
            </p>
          </div>
          <form className="w-full grid gap-8">
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              label="Username"
            />
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              label="Email"
            />
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              label="Password"
            />

            <p className="text-sm lg:text-base text-bluegray-9 text-left mb-4 mt-4">
              By clicking on signup, you agree to Feedback Hub&apos;s{" "}
              <Link
                to="#"
                className="text-blue-600 hover:underline text-left text-sm lg:text-base"
              >
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link
                to="#"
                className="text-blue-600 hover:underline text-left text-sm lg:text-base"
              >
                Privacy Policy
              </Link>
            </p>

            <PrimaryButton
              text="Sign Up"
              type="submit"
              fullWidth={true}
            />
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUpPage;
