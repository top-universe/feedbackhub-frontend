import { Link } from "react-router-dom";
import logo from "../assets/icons/logo-complete-yellow.svg";
import { footerLinksData, socialMediaIconsData } from "../data/footerData";
import FooterLinkGroup from "../components/FooterLinkGroup";
import SocialMediaIconsGroup from "../components/SocialMediaIconsGroup";
import { useEffect, useState } from "react";
import axios from "axios";
import SelectWithPicture from "../components/Input/SelectWithPicture";


const Footer = () => {
  const [countries, setCountries] = useState([]);
  const [countryVal, setCountryVal] = useState("GBR");

  const changeCountry = (e) => setCountryVal(e.target.value);

  const getCountries = () => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((data) => {
        const cleaned = data.data.map((item) => ({ text: item.name.common, value: item.cca3, image: item.flags.svg }))
        cleaned.sort((a, b) => a.text.localeCompare(b.text))
        setCountries(cleaned)
      })
      .catch((err) => {
        console.error(err);
      })
  }

  useEffect(() => {
    getCountries();
  }, [])

  useEffect(() => {
    if (countries.length) console.log(countries);
  }, [countries])

  return (
    <footer className="container-108-36-mob pt-[6.75rem] pb-12 lg:pb-[6.75rem] bg-bluegray-9 text-bluegray-2 rounded-[16px_16px_0_0]">
      <section className="w-full grid gap-10">
        <div className="full flex-none block lg:hidden">
          <Link to="/" className="text-decoration-none ">
            <img src={logo} alt="" className="w-max" />
          </Link>
        </div>
        <div className="w-full gap-x-24 md:gap-x-20 gap-y-10 lg:gap-y-16 flex flex-wrap md:grid md:grid-cols-[1fr_1fr_1fr_1fr] lg:grid-cols-[260px_1fr_1fr_1fr] xl:grid-cols-[260px_1fr_1fr_1fr_1fr]">
          <div className="max-w-max flex-none hidden lg:grid gap-6 col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="text-decoration-none ">
              <img src={logo} alt="" className="w-max" />
            </Link>
            <p className="text-fh-sm text-bluegray-5 hidden lg:block w-[260px]">
              {`FeedbackHub is an innovative customer feedback management software designed to serve as a central \
              hub for businesses of all sizes to efficiently gather, analyze, and manage customer feedback.`}
            </p>
          </div>

          {footerLinksData.map((item, idx) => (
            <FooterLinkGroup
              key={`flgrp-${idx}`}
              header={item.heading}
              linksData={item.links}
            />
          ))}

          <div className="w-max h-fit grid gap-4 ">
            <h3 className="text-blue-6 text-fh-base-bold lg:text-fh-lg-bold tracking-[0.8px] lg:tracking-[0.9px] uppercase">
              Connect
            </h3>
            <SocialMediaIconsGroup arr={socialMediaIconsData} />
          </div>

          <div className="w-full h-fit col-span-2 grid gap-4 ">
            <h3 className="text-blue-6 text-fh-base-bold lg:text-fh-lg-bold tracking-[0.8px] lg:tracking-[0.9px] uppercase">
              Choose Your Country
            </h3>
            <SelectWithPicture
              name="country"
              optionsArray={countries}
              value={countryVal}
              changeHandler={changeCountry}
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-bluegray-6 h-[1px] mt-16 mb-8"></section>

      <section className="w-full text-center">
        <span className="w-max mx-auto text-fh-sm lg:text-fh-lg text-bluegray-4">
          &copy;2023 Feedback HUB. All rights reserved
        </span>
      </section>
    </footer>
  )
};

export default Footer;
