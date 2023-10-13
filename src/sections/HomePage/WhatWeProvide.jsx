import cursor from "/images/cursor-icon.png";
const WhatWeProvide = () => {
  return (
    <section className="container-108 bg-white pt-16 pb-20">
      <div className="flex flex-col sm:flex-row justify-between gap-12 items-center h-full">
        <div className="w-full flex flex-col items-center md:items-start gap-2 md:gap-5 md:w-[55%]">
          <p className="text-fh-xs-bold md:text-fh-base-bold text-pri-blue">WHAT WE PROVIDE</p>
          <h1 className="text-fh-xl-bold text-center md:text-left md:text-fh-5xl-bold">
            Your feedback is invaluable.
          </h1>
          <p className="md:w-[70%] text-fh-base md:text-fh-lg text-center md:text-left">
            FeedBackHub believes in giving you a platform to be heard by the
            businesses you interact with
          </p>
        </div>
        <div className="sm:w-[40%]">
          {/* <img src={provideImg} className="" /> */}
        </div>
      </div>

      {/* // feedback submission */}

      <div className="flex md:pt-20 flex-col md:flex-row justify-between gap-10">
        <div className="justify-between h-[100%] flex flex-col items-center md:items-stretch md:w-[30%]">
          <img src={cursor} />

          <h3 className="text-fh-xl-bold sm:text-fh-2xl-bold">
            Easy Feedback Submission
          </h3>
          <p className="my-2 text-fh-base  md:text-fh-lg self-start text-center md:text-left">
            Share your thoughts and experiences effortlessly
          </p>
        </div>
        <div className="justify-between h-[100%] flex flex-col items-center md:items-stretch md:w-[30%]">
          <div className="bg-blue-100"></div>
          <h3 className="text-fh-xl-bold sm:text-fh-2xl-bold">
            Discover and Rate Businesses
          </h3>
          <p className="my-2 text-fh-base  md:text-fh-lg self-start text-center md:text-left">
            Find and explore businesses in various industries. Gain insights
            from other customers' ratings and reviews.
          </p>
        </div>
        <div className="justify-between h-[100%] flex flex-col items-center md:items-stretch md:w-[30%]">
          <div className="bg-blue-100"></div>
          <h3 className="text-fh-xl-bold sm:text-fh-2xl-bold">
            Connect with Businesses
          </h3>
          <p className="my-2 text-fh-base  md:text-fh-lg self-start text-center md:text-left">
            Engage directly with businesses and build meaningful relationships
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;
