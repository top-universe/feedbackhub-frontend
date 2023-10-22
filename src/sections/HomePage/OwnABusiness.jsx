import PropTypes from "prop-types";

import checked from "../../assets/checked.png";
import businessImg from "../../assets/business-img.png";
import Ellipse2 from "../../assets/Ellipse-2.png";
import PrimaryButton from "../../components/button/PrimaryButton";
import SecondaryButton from "../../components/button/SecondaryButton";
const OwnABusiness = () => {
  return (
    <section className="container-108 bg-white py-16 grid md:grid-cols-2 overflow-hidden md:gap-16 ">
      <div className="w-full flex justify-center md:justify-start">
        <div className="flex flex-col justify-between w-max">
          <h2 className=" lg:text-fh-5xl-bold text-fh-3xl-bold text-pri-blue  mb-8">
            Own a Business?
          </h2>
          <div className="mb-12">
            <List text={"Streamline Feedback Collection"} />
            <List text={"Powerful Analytics and Reporting"} />
            <List text={"Enhance Customer Engagement"} />
            <List text={"Seamless Integrations"} />
          </div>
          <div className="flex gap-4 items-center">
            <SecondaryButton text={"Request a Demo"} />
            <PrimaryButton text={"Get Started"} />
          </div>
        </div>
      </div>
      <div className="md:flex items-center lg:justify-end bg-ellipse bg-100px bg-no-repeat bg-left-center relative hidden ">
        <img
          src={businessImg}
          alt="a woman holding a tab in a restaurant and she smiling "
          width={500}
          height={400}
          className=" z-10 md:w-full lg:w-full"
        />
        <img
          src={Ellipse2}
          alt=" an ellipse shape"
          className="absolute top-0 -right-36 w-60 hidden md:block"
        />
      </div>
    </section>
  );
};
const List = ({ text }) => {
  return (
    <div className="flex items-center space-x-3 mb-4">
      <img src={checked} alt={"a check mark icon"} className="md:w-4 w-3" />
      <p className="md:text-fh-xl text-fh-sm text-grey-4f font-outfit">
        {" "}
        {text}
      </p>
    </div>
  );
};

List.propTypes = {
  text: PropTypes.string,
};

export default OwnABusiness;
