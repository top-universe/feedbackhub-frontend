import AuthLayout from "../layouts/AuthLayout";
import { Link } from "react-router-dom";
import Input from '../components/Input/Input';
import PrimaryButton from '../components/button/PrimaryButton';

const BottomChild = () => (
  <div className="text-center ">
    <p className="text-sm lg:text-base text-center text-bluegray-9 lg:mt-5">
      Dont have an account?{" "}
      <Link
        to="/sign-up"
        className="text-blue-600 hover:underline"
      >
        Sign up
      </Link>
    </p>
  </div>
)

const SignUpPage = () => {
  return (
    <AuthLayout bottomChild={<BottomChild />}>
      <div className="w-full md:w-[396px] flex items-center justify-center mx-auto">
        <div className="w-full">
          <div className="text-center md:text-left pt-0 px-0">
            <h1 className="text-center lg:text-start text-bluegray-9 text-fh-2xl-semi lg:text-fh-5xl-semi mb-9">
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
            <p className="text-base text-left mb-9 mt-4">
              <Link
                to="/forgot-password"
                className="text-blue-600 hover:underline text-left "
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
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUpPage;
