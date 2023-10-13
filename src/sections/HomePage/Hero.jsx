import heroImg from "../../assets/images/Reviews.svg"
import heroBubble from "../../assets/images/bubble.svg"
import PrimaryButton from "../../components/Button/PrimaryButton";
const Hero = () => {
  return (
    <section className="bg-yellow-1 pt-12 pb-10 container-108">
      <div className="flex flex-col sm:flex-row items-center justify-between md:items-start gap-12 h-full">
        <div className=" flex flex-col items-center md:items-start gap-5 md:w-[55%] md:pt-10">
          <h1 className="text-fh-2xl-bold text-center md:text-left md:text-fh-5xl-bold">
            Empower Your Feedback to Make a Difference
          </h1>
          <p className="text-fh-base sm:w-[85%] md:text-fh-lg text-center md:text-left">
            With FeedBackHub, you can easily share your experiences and provide
            feedback to the products and services you love
          </p>
          <PrimaryButton text={"Write a Review"} />
        </div>
        <div className="px-10 md:p-0 sm:w-[40%] flex flex-col relative">
          <img src={heroImg} className="" />
          <img
            src={heroBubble}
            className="absolute w-[20%] right-[75%] md:w-[40%] bottom-10 md:right-[82%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
