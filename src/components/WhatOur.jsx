import React from 'react';
import whatOurCm from '../assets/svg/whatOurCm';
import isotope from 'isotope-layout';
import Ellipse from "../assets/svg/Ellipse-52.png";

const Section8 = (props) => {
  const masonry = new isotope("#masonry",{
    itemSelector : ".masonry-item",
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
  }
  })
  return (
          <div id="masonry" className=" ">
            {whatOurCm.map((customer) => (
              <div
                key={customer.id}
                className="border border-bluegray-4 rounded-lg p-10 flex w-416 md:p-8 flex-col justify-start items-start flex-shrink-0 h-fit masonry-item grid-sizer"
              >
                <div className="flex items-center">
                  <p className="text-fh-lg text-grey-4f mb-1">{customer.saying}</p>
                </div>
                <div className="mt-8 flex items-start">
                <img src={Ellipse} alt="Ellipse" className="w-13 h-13 mr-2" />
                  <div>
                    <p className="text-bluegray-9 text-fh-lg">{customer.name}</p>
                    <p className="text-grey-4f text-fh-sm">{customer.company}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className='grid-sizer'></div>
          </div>
  );
};

export default Section8;
