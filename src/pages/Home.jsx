import MainLayout from "../layouts/MainLayout";
import Hero from "../sections/HomePage/Hero";
import WhatWeProvide from "../sections/HomePage/WhatWeProvide";
import Categories from "../sections/HomePage/Categories";
import Clients from "../sections/HomePage/Clients";
import Reviews from "../sections/HomePage/Reviews";
import OwnABusiness from "../sections/HomePage/OwnABusiness";
import AboutUs from "../sections/HomePage/AboutUs";
import FAQs from "../sections/HomePage/FAQs";
import GetStarted from "../sections/HomePage/GetStarted";

const Home = () => (
  <MainLayout>
    <Hero />
    <WhatWeProvide />
    <Categories />
    <Clients />
    <Reviews />
    <OwnABusiness />
    <AboutUs />
    <FAQs />
    <GetStarted />
  </MainLayout>
)

export default Home;