import React from "react";
import CheckCircle from "../assets/icons/check-circle.svg";
import AuthLayout from "../layouts/AuthLayout";
import PropTypes from "prop-types";
import PrimaryButton from "./button/PrimaryButton";

const AuthSucccess = ({
  title,
  descriptionStart,
  email,
  descriptionEnd,
  buttonText,
  clickHandler = null,
}) => {
  return (
    <AuthLayout>
      <div className="text-center">
        <div className="flex justify-center items-center mb-8 lg:mb-12">
          <img
            src={CheckCircle}
            alt="check-circle"
            width="72px"
            height="72px"
            className="md:w-[140px] aspect-square"
          />
        </div>
        <h1 className="text-fh-2xl-semi lg:text-fh-5xl-semi mb-4">{title}</h1>
        <p className="text-fh-base lg:text-fh-2xl mb-8">
          {descriptionStart}
          <span className="font-semibold"> {email}</span>{" "}
          <span className="block">{descriptionEnd}</span>
        </p>
        <div className="w-full md:w-[391px] mx-auto">
          <PrimaryButton
            type="button"
            text={buttonText}
            fullWidth={true}
            clickHandler={clickHandler}
            // styles={{ paddingBlock: "0.5rem" }}
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
  clickHandler: PropTypes.func,
};

export default AuthSucccess;
