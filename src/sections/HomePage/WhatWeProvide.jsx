import arrow from "../../assets/icons/arrow.svg";
import provideImg from "../../assets/images/provide.svg";
import WhatWeProvideSubBox from "../../components/WhatWeProvideSubBox";
import { whatWeProvideData } from "../../data/whatWeProvideData";

const WhatWeProvide = () => {
  return (
    <section className="container-108 bg-white pt-16 pb-20 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-12 items-center h-full">
        <div className="w-full flex flex-col items-center md:items-start gap-2 md:gap-5 md:w-[55%] relative">
          <p className="text-fh-xs-bold md:text-fh-base-bold text-pri-blue">
            WHAT WE PROVIDE
          </p>
          <h1 className="text-fh-xl-bold text-center md:text-left lg:text-fh-5xl-bold md:text-fh-3xl-bold">
            Your feedback is invaluable.
          </h1>
          <p className="md:w-[57%] text-fh-base lg:text-fh-lg text-center md:text-left">
            FeedBackHub believes in giving you a platform to be heard by the
            businesses you interact with
          </p>
          <img
            src={arrow}
            className="absolute top-[66%] left-[51%] hidden md:block"
          />
        </div>
        <div className="sm:w-[40%]">
          <img src={provideImg} className="" />
        </div>
      </div>

      {/* // feedback submission */}

      <div className="flex pt-10 md:pt-24 flex-col md:flex-row justify-between gap-10">
        {whatWeProvideData.map((item, idx) => (
          <WhatWeProvideSubBox
            key={`wwp-${idx}`}
            title={item.title}
            description={item.description}
            boxIcon={item.boxIcon}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatWeProvide;
