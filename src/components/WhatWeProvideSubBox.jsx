import React from "react";
import PropTypes from "prop-types";

const WhatWeProvideSubBox = ({ boxIcon, title, description }) => {
  return (
    <div className="justify-between h-[100%] flex flex-col items-center md:items-stretch md:w-[30%]">
      <div className="mb-5 w-10 h-10 rounded border border-pri-blue bg-blue-1 grid place-items-center">
        <img src={boxIcon} width={24} height={24} />
      </div>
      <h3 className="text-fh-xl-bold lg:text-fh-2xl-bold">{title}</h3>
      <p className="my-2 text-fh-base  lg:text-fh-lg self-start text-center md:text-left mx-auto">
        {description}
      </p>
    </div>
  );
};

WhatWeProvideSubBox.propTypes = {
  boxIcon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default WhatWeProvideSubBox;
