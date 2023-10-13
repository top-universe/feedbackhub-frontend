import AuthLayout from "../layouts/AuthLayout";
import Input from '../components/Input/Input';
import PrimaryButton from '../components/button/PrimaryButton';
import checkCircleIcon from '../assets/icons/check-circle.svg';



const ResetPassword = () => {
  return (
    <AuthLayout>
      <div className="w-full md:w-[396px] flex items-center justify-center mx-auto">
        <div className="w-full">
          <div className="text-center md:text-left pt-0 px-0">
            <h1 className="text-center lg:text-start mb-8  text-bluegray-9 text-fh-2xl-semi lg:text-fh-5xl-semi">
              Reset Password
            </h1>
          </div>
          <form className="w-full grid gap-8">
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="**********"
              label="New Password"
            />
            <Input
              type="password"
              id="cpassword"
              name="Confirm password"
              placeholder="**********"
              label="Password"
            />
            <div className="grid gap-2">
              <p className="flex items-center text-fh-base-mid lg:text-fh-sm-mid  text-success text-xs">
                <img
                  src={checkCircleIcon}
                  alt="Your Icon"
                  className="w-4 h-4 mr-2"
                />
                At least 8 characters
              </p>
              <p className="flex items-center text-fh-base-mid  lg:text-fh-sm-mid  text-success text-xs">
                <img
                  src={checkCircleIcon}
                  alt="Your Icon"
                  className="w-4 h-4 mr-2"
                />
                Includes at least one uppercase letter
              </p>
              <p className="flex items-center text-fh-base-mid  lg:text-fh-sm-mid   text-success text-xs">
                <img
                  src={checkCircleIcon}
                  alt="Your Icon"
                  className="w-4 h-4 mr-2"
                />
                include at least one number
              </p>
              <p className="flex items-center text-fh-base-mid  lg:text-fh-sm-mid  text-success text-xs">
                <img
                  src={checkCircleIcon}
                  alt="Your Icon"
                  className="w-4 h-4 mr-2"
                />
                Include a special character (!@#$%^&)
              </p>
            </div>

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
