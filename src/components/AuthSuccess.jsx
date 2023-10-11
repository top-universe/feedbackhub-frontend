import React from "react";
import CheckCircle from "../assets/icons/check-circle.svg";
import AuthLayout from "../layouts/AuthLayout";
import PrimaryButton from "./Button/PrimaryButton";
import PropTypes from "prop-types";

const AuthSucccess = ({
  title,
  descriptionStart,
  email,
  descriptionEnd,
  buttonText,
}) => {
  return (
    <AuthLayout>
      <div className="text-center">
        <div className="flex justify-center items-center mb-8 md:mb-12">
          <img
            src={CheckCircle}
            alt="check-circle"
            width="72px"
            height="72px"
            className="md:w-[140px] aspect-square"
          />
        </div>
        <h1 className="text-fh-2xl-semi md:text-fh-5xl-semi mb-4">{title}</h1>
        <p className="text-fh-base md:text-fh-2xl mb-8">
          {descriptionStart}
          <span className="font-semibold"> {email}</span>{" "}
          <span className="block">{descriptionEnd}</span>
        </p>
        <div className="w-full md:w-[65%] mx-auto">
          <PrimaryButton
            type="button"
            text={buttonText}
            fullWidth={true}
            styles={{ paddingBlock: "0.5rem" }}
          />
        </div>
      </div>
    </AuthLayout>
  );
};

AuthSucccess.propTypes = {
  title: PropTypes.string,
  descriptionStart: PropTypes.string,
  email: PropTypes.string,
  descriptionEnd: PropTypes.string,
  buttonText: PropTypes.string,
};

export default AuthSucccess;
