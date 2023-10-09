const WhatWeProvide = () => {
  return (
    <section className="container-108 bg-white pt-16 pb-20">
      <div className="flex flex-col sm:flex-row justify-between gap-12 items-center h-full">
        <div className=" flex flex-col items-center md:items-start gap-5 md:w-[55%]">
          <p className="text-fh-base-bold text-pri-blue">WHAT WE PROVIDE</p>
          <h1 className=" text-[2rem] text-center md:text-left md:text-fh-5xl-bold">
            Your feedback is invaluable.
          </h1>
          <p className="md:w-[70%] text-fh-lg text-center md:text-left">
            FeedBackHub believes in giving you a platform to be heard by the
            businesses you interact with
          </p>
        </div>
        <div className="sm:w-[40%]">
          {/* <img src={provideImg} className="" /> */}
        </div>
      </div>

      {/* // feedback submission */}

      <div className="flex md:pt-20 flex-row justify-between gap-10">
        <div className="justify-between h-[100%] flex flex-col items-stretch w-[30%]">
          <div className="bg-blue-100"></div>
          <h3 className="text-fh-2xl-bold">Easy Feedback Submission</h3>
          <p className="my-2 text-fh-lg self-start">
            Share your thoughts and experiences effortlessly
          </p>
        </div>
        <div className="justify-between h-[100%] flex flex-col items-stretch w-[30%]">
          <div className="bg-blue-100"></div>
          <h3 className="text-fh-2xl-bold">
            Discover and Rate Businesses
          </h3>
          <p className="my-2 text-fh-lg self-start">
            Find and explore businesses in various industries. Gain insights
            from other customers' ratings and reviews.
          </p>
        </div>
        <div className="justify-between h-[100%] flex flex-col items-stretch w-[30%]">
          <div className="bg-blue-100"></div>
          <h3 className="text-fh-2xl-bold">Connect with Businesses</h3>
          <p className="my-2 text-fh-lg self-start">
            Engage directly with businesses and build meaningful relationships
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;
