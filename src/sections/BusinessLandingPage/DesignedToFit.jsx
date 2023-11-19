import React from 'react';
import SecondaryButton from "../../components/Button/SecondaryButton";
import images from '../../images';
import DesignedSwiper from '../../components/DesignedSwiper';

function createImage(image) {
  return {
    id: image.id,
    imgURL: image.imgURL,
  };
}

const DesignedToFit = () => {
  const handleButtonClick = () => {
  };  
  const swiperImages = images.map(createImage);

  return (
    <div className="bg-blue-500 rounded-[0_0_32px_32px] lg:rounded-[0_0_64px_64px] mx-auto">
      <div className="p-4 mx-auto lg:w-1440 lg:h-633.912 lg:flex-shrink-0">
        <div className="text-center pt-0 px-0">
          <h1 className="text-bluegray-2 text-center lg:text-fh-4xl p-4 text-fh-2xl-semi">
            Designed to fit your workflow
          </h1>
          <p className="text-bluegray-2 text-center lg:text-fh-lg text-fh-sm mb-4 ">
            Feedback Hub connects to the tools you already use.<br/> Seamless Integration with CRM Systems and Tools
          </p>
        </div>
      </div>
      <div className="w-full sm:flex-shrink-0 flex flex-wrap justify-center">
      <DesignedSwiper images={swiperImages} />
      </div>
      <div className="flex justify-center items-center py-3  mt-3">
        <SecondaryButton 
        text="See all integrations"
        clickHandler={handleButtonClick} 
        styles={{border:"solid white"  }}
        textStyles={{ color:"white" }}
        />
      </div>

    </div>
  );
}

export default DesignedToFit;
