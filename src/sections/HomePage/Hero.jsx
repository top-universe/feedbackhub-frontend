import PrimaryButton from "../../components/Button/PrimaryButton";
const Hero = () => {
  return (
    <section className="bg-yellow-1 pt-12 pb-10 container-108">
      <div className="flex flex-col sm:flex-row justify-between gap-12 items-center h-full">
        <div className=" flex flex-col items-center md:items-start gap-5 md:w-[55%]">
          <h1 className="text-[2rem] text-center md:text-left md:text-fh-5xl-bold">
            Empower Your Feedback to Make a Difference
          </h1>
          <p className="sm:w-[85%] text-[1.1rem] text-center md:text-left">
            With FeedBackHub, you can easily share your experiences and provide
            feedback to the products and services you love
          </p>
          <PrimaryButton text={"Write a Review"} customClassName="text-white" />
        </div>
        <div className="sm:w-[40%]">
          {/* <img src={heroImg} className="" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
