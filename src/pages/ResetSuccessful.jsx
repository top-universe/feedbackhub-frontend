import AuthSucccess from "../components/AuthSuccess";

const ResetSuccessful = () => {
  return (
    <AuthSucccess
      title={"Reset Successful!"}
      descriptionStart={"Your password has been reset successfully"}
      buttonText={"Back to log in"}
    />
  );
};

export default ResetSuccessful;
