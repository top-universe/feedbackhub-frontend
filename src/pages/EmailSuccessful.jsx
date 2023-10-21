import React from "react";
import AuthSucccess from "../components/AuthSuccess";

const EmailSuccessful = () => {
  return (
    <AuthSucccess
      title={"Email verification successful"}
      descriptionStart={"Your email address"}
      email={"povertyindex@hotmail.com"}
      descriptionEnd={"is now verified."}
      buttonText={"Go to my Account"}
    />
  );
};

export default EmailSuccessful;
