import heroImg from "../../assets/images/Reviews.svg";
import heroBubble from "../../assets/images/bubble.svg";
import GoldBubble from "../../assets/icons/ku-bubble.svg";
import GoldBubbleMobile from "../../assets/icons/ku-bubble-mobile.svg";
import PrimaryButton from "../../components/Button/PrimaryButton";
const Hero = () => {
  return (
    <section className="relative bg-yellow-1 pt-12 pb-10 container-108">
      <img
        src={GoldBubble}
        alt=""
        className="hidden md:block absolute top-0 left-0 z-0"
      />
      <img
        src={GoldBubbleMobile}
        alt=""
        className="block md:hidden absolute top-[164px] -left-[3px] z-0"
      />
      <div className="relative flex flex-col sm:flex-row items-center justify-between md:items-start gap-12 h-full z-[2]">
        <div className=" flex flex-col items-center md:items-start gap-5 md:w-[55%] md:pt-10">
          <h1 className="text-fh-2xl-bold text-center md:text-left lg:text-fh-5xl-bold md:text-fh-3xl-bold">
            Empower Your Feedback to Make a Difference
          </h1>
          <p className="text-fh-base sm:w-[85%] lg:text-fh-lg text-center md:text-left">
            With FeedBackHub, you can easily share your experiences and provide
            feedback to the products and services you love
          </p>
          <PrimaryButton text={"Write a Review"} />
        </div>
        <div className="pl-10 md:px-10 md:p-0 sm:w-[40%] flex flex-col relative md:self-center xl:self-start">
          <img
            src={heroImg}
            className="max-w-[85%] md:max-w-[375px] lg:max-w-[425px]"
          />
          <img
            src={heroBubble}
            className="absolute right-[75%] max-w-[20%] md:max-w-[90px] lg:max-w-[175px] bottom-10 md:right-[82%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
