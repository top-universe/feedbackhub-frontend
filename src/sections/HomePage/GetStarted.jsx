import DestructiveButton from "../../components/Button/DestructiveButton";
import PrimaryButton from "../../components/Button/PrimaryButton";
import SecondaryButton from "../../components/Button/SecondaryButton";
import man from "../../assets/images/man.png";
import { Link } from "react-router-dom";
// import background from '../../assets/images/background.png'
// import form from '../../assets/images/form.png'
// import abstract from '../../assets/images/abstract.png'

const GetStarted = () => {
  return (
    <section className="bg-yellow-1 container-64 md:container-108 lg:mb-[115px] grid grid-cols-1 md:grid-cols-2 md:gap-[150px] ">
      <div className="lg:self-center">
        <div className="text-center md:text-left">
          <span className=" text-bluegray-9 mt-3.5 text-fh-3xl-bold md:text-fh-5xl-bold inline md:block">
            Ready to{" "}
          </span>
          <span className="text-pri-blue text-fh-3xl-bold md:text-fh-5xl-bold inline mb:block">
            {" "}
            get started
          </span>
        </div>
        <p className="text-grey-4f  text-fh-base md:text-fh-lg mt-4 text-center md:text-left">
          Explore{" "}
          <Link to={"#"} className="underline text-pri-blue">
            the product
          </Link>{" "}
          further, or{" "}
          <Link to={"#"} className="underline text-pri-blue">
            create an account
          </Link>{" "}
          now and start sharing your feedback to make a difference in the
          products and services you use every day!
        </p>
        <div className="flex gap-7 mt-10 place-content-center lg:place-content-start mb-[50px] lg:mb-0">
          <SecondaryButton text="Login" />
          <PrimaryButton text="Get Started" />
        </div>
      </div>
      <div className="order-first md:order-last my-7 mx-auto">
        <img src={man} alt="man" className="max-w-[310px] lg:max-w-[487px]" />
      </div>
    </section>
  );
};

export default GetStarted;
