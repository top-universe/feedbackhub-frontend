import PropTypes from "prop-types";

import checked from "../../assets/checked.png";
import businessImg from "../../assets/business-img.png";
import Ellipse2 from "../../assets/Ellipse-2.png";
import PrimaryButton from "../../components/Button/PrimaryButton";
import SecondaryButton from "../../components/Button/SecondaryButton";
const OwnABusiness = () => {
	return (
		<section className="container-108 bg-white py-16 grid md:grid-cols-2 overflow-hidden md:gap-16 ">
			<div className="flex flex-col justify-between  m-auto">
				<h2 className="font-outfit lg:text-5xl text-3xl text-pri-blue font-bold mb-8">
					Own a Business?
				</h2>
				<div className="mb-12">
					<List text={"Streamline Feedback Collection"} />
					<List text={"Powerful Analytics and Reporting"} />
					<List text={"Enhance Customer Engagement"} />
					<List text={"Seamless Integrations"} />
				</div>
				<div className="flex gap-4 items-center">
					<SecondaryButton text={"Request a Demo"} />
					<PrimaryButton text={"Get Started"} />
				</div>
			</div>
			<div className="md:flex items-center lg:justify-end business relative hidden ">
				<img
					src={businessImg}
					alt="a woman holding a tab in a restaurant and she smiling "
					width={500}
					height={400}
					className="w-4/5 z-10 md:w-full"
				/>
				<img
					src={Ellipse2}
					alt=" an ellipse shape"
					className="absolute top-0 -right-36 w-60 hidden md:block"
				/>
			</div>
		</section>
	);
};
const List = ({ text }) => {
	return (
		<div className="flex items-center space-x-3 mb-4">
			<img src={checked} alt={"a check mark icon"} className="md:w-4 w-3" />
			<p className="md:text-xl text-sm text-grey-4f font-outfit"> {text}</p>
		</div>
	);
};

List.propTypes = {
	text: PropTypes.string,
};

export default OwnABusiness;
