import bankIcon from "../../assets/icons/library.png";
import homeIcon from "../../assets/icons/home.png";
import schoolIcon from "../../assets/icons/academic-cap.png";
import transportIcon from "../../assets/icons/truck.png";
import energyIcon from "../../assets/icons/lightning-bolt.png";
import insuranceIcon from "../../assets/icons/key.png";
import phoneIcon from "../../assets/icons/phone.png";
import starIcon from "../../assets/icons/sparkles.png";
import PrimaryButton from "../../components/button/PrimaryButton";

const Categories = () => {

    return (
        <section className="container-108 bg-bluegray-2 py-12">
            <h2 class="text-center font-bold md:text-4xl text-3xl text-bluegray-9 mb-8 font-outfit">Browse Businesses by Categories</h2>
            <div className="inline-grid gap-x-4 gap-y-4 grid-cols-4 grid-rows-2 mt-5 mb-5 mx-auto my-auto">
                <div className="w-72 h-48  bg-white border rounded-md">
                    <img src={bankIcon} alt="" className="max-w-[50px] mx-auto my-auto mt-12 mb-5" />
                    <p className="text-fh-base-semi text-center">Bank</p>
                </div>
                <div className="w-72 h-48  bg-white border rounded-md">
                    <img src={homeIcon} alt="" className="max-w-[50px] mx-auto my-auto mt-12 mb-5" />
                    <p className="text-fh-base-semi text-center">Real Estate</p>
                </div>
                <div className="w-72 h-48  bg-white border rounded-md">
                    <img src={transportIcon} alt="" className="max-w-[50px] mx-auto my-auto mt-12 mb-5" />
                    <p className="text-fh-base-semi text-center">Automotives</p>
                </div>
                <div className="w-72 h-48  bg-white border rounded-md">
                    <img src={schoolIcon} alt="" className="max-w-[50px] mx-auto my-auto mt-12 mb-5" />
                    <p className="text-fh-base-semi text-center">School</p>
                </div>
                <div className="w-72 h-48  bg-white border rounded-md">
                    <img src={phoneIcon} alt="" className="max-w-[50px] mx-auto my-auto mt-12 mb-5" />
                    <p className="text-fh-base-semi text-center">Electronics</p>
                </div>
                <div className="w-72 h-48  bg-white border rounded-md">
                    <img src={energyIcon} alt="" className="max-w-[50px] mx-auto my-auto mt-12 mb-5" />
                    <p className="text-fh-base-semi text-center">Energy Supplier</p>
                </div>
                <div className="w-72 h-48  bg-white border rounded-md">
                    <img src={insuranceIcon} alt="" className="max-w-[50px] mx-auto my-auto mt-12 mb-5" />
                    <p className="text-fh-base-semi text-center">Insurance Company</p>
                </div>
                <div className="w-72 h-48  bg-white border rounded-md">
                    <img src={starIcon} alt="" className="max-w-[50px] mx-auto my-auto mt-12 mb-5" />
                    <p className="text-fh-base-semi text-center">Nightlife</p>
                </div>
            </div>
            <PrimaryButton text={"View all Categories"} className={"ml-5"} />
        </section>
    )
}

export default Categories;