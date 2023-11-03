import React from 'react';
import ReactDOM from 'react-dom';
import ellipse52 from "../../assets/Ellipse-52.png";

const Section8 = () => {
  return (
              <div className="bg-bluegray-1 p-8">
                <div className="text-center pt-0 px-0 mb-8">
                  <h1 className="text-bluegray-9 text-center lg:text-fh-4xl-bold p-4 text-fh-2xl-semi">
                    What our customers are saying
                  </h1>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="border border-bluegray-4 rounded-lg p-10 flex w-416 lg:h-80 md:p-8 flex-col justify-start items-start flex-shrink-0 ">
                    <div className="flex items-center">
                      <p className="text-fh-lg text-grey-4f mb-2">
                        The analytics provided by FeedbackHub have been invaluable in understanding our customers better. It's a must-have tool for any business!
                      </p>
                    </div>
                    <div className="mt-4 flex items-start">
                      <img src={ellipse52} alt="Ellipse" className="w-13 h-13 mr-2" />
                      <div>
                        <p className="text-bluegray-9 text-fh-lg">Alfred Brown</p>
                        <p className="text-grey-4f text-fh-sm">CEO, AYC Company</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-bluegray-4 rounded-lg p-10 flex w-416 lg:h-[390px] md:p-8 flex-col justify-start items-start flex-shrink-0 ">
                    <div className="flex items-center">
                      <p className="text-fh-lg text-grey-4f mb-2">
                        FeedbackHub has revolutionized how we collect and manage feedback. It has streamlined our processes and helped us make more informed business decisions.
                      </p>
                    </div>
                    <div className="flex items-start mt-4">
                      <img src={ellipse52} alt="Ellipse" className="w-13 h-13 mr-2" />
                      <div>
                        <p className="text-bluegray-9 text-fh-lg">Alfred Brown</p>
                        <p className="text-grey-4f text-fh-sm">CEO, AYC Company</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-bluegray-4 rounded-lg p-10 flex w-416 lg:h-[470px] md:p-8 flex-col justify-start items-start flex-shrink-0 ">
                    <div className="flex items-center">
                      <p className="text-fh-lg text-grey-4f mb-2">
                        The customization options of FeedbackHub allowed us to create feedback forms that perfectly align with our brand. The engagement tools have also improved our customer satisfaction. It has streamlined our processes and helped us make more informed business decisions.
                      </p>
                    </div>
                    <div className="flex items-start mt-4">
                      <img src={ellipse52} alt="Ellipse" className="w-13 h-13 mr-2" />
                      <div>
                        <p className="text-bluegray-9 text-fh-lg">Alfred Brown</p>
                        <p className="text-grey-4f text-fh-sm">CEO, AYC Company</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-bluegray-4 rounded-lg p-10 flex w-416  md:p-8 flex-col justify-start items-start flex-shrink-0  lg:-mt-40">
                    <div className="flex items-center ">
                      <p className="text-fh-lg text-grey-4f mb-2">
                        The customization options of FeedbackHub allowed us to create feedback forms that perfectly align with our brand. The engagement tools have also improved our customer satisfaction. It has streamlined our processes and helped us make more informed business decisions.
                      </p>
                    </div>
                    <div className="mt-4 flex items-start">
                      <img src={ellipse52} alt="Ellipse" className="w-13 h-13 mr-2" />
                      <div>
                        <p className="text-bluegray-9 text-fh-lg">Alfred Brown</p>
                        <p className="text-grey-4f text-fh-sm">CEO, AYC Company</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-bluegray-4 rounded-lg p-10 flex w-416 lg:h-80 md:p-8 flex-col justify-start items-start flex-shrink-0 mt-2  lg:-mt-20">
                    <div className="flex items-center">
                      <p className="text-fh-lg text-grey-4f mb-2">
                        The analytics provided by FeedbackHub have been invaluable in understanding our customers better. It's a must-have tool for any business!
                      </p>
                    </div>
                    <div className="mt-4 flex items-start">
                      <img src={ellipse52} alt="Ellipse" className="w-13 h-13 mr-2" />
                      <div>
                        <p className="text-bluegray-9 text-fh-lg">Alfred Brown</p>
                        <p className="text-grey-4f text-fh-sm">CEO, AYC Company</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  );
};

export default Section8;
