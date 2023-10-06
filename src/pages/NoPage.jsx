import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <MainLayout>
      <section className="h-[500px] container-108 py-16 grid place-items-center">
        <p className="text-base text-black">
          <span>Page not found. Return to</span>
          <span> </span>
          <Link to="/" className="no-underline hover:underline text-pri-blue decoration-current">Home</Link>
        </p>
      </section>
    </MainLayout>
  )
};

export default NoPage;
