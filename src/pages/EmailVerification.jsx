import AuthLayout from "../layouts/AuthLayout";
import { Link } from "react-router-dom";
import Input from "../components/Input/Input";
import PrimaryButton from "../components/button/PrimaryButton";
import checkCircleIcon from "../assets/icons/check-circle.svg";
import SecondaryButton from "../components/Button/SecondaryButton";

const EmailVerification = () => {
  return (
    <AuthLayout>
      <div>
        <div className="grid gap-3 text-center">
          <h1 className="text-fh-2xl-semi md:text-fh-5xl-semi">
            Verify your email address
          </h1>
          <p className="text-fh-base md:text-fh-2xl">
            We just sent an email to the address:
            <br />
            <span className="font-semibold">povertyindexa@gmail.com</span>
          </p>
          <Link className="text-fh-base md:text-fh-base text-pri-blue underline">
            Change email
          </Link>
        </div>
        <div className="grid gap-2 place-content-center pt-5">
          <PrimaryButton
            type="button"
            text="Go to Gmail inbox"
            fullWidth={true}
            // styles={{ paddingBlock: "0.5rem" }}
          />
          <SecondaryButton
            type="button"
            text="Resend Verification Email"
            // styles={{ paddingBlock: "0.5rem" }}
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default EmailVerification;
