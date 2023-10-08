import PropTypes from "prop-types";
import visionImg from "../../assets/img-mission.png";
import missionImg from "../../assets/img-vision.png";

const AboutUs = () => {
	return (
		<section className="container-108 bg-white pt-36 pb-52 ">
			<h2 className="text-center font-bold md:text-4xl text-3xl text-bluegray-9 mb-8 font-outfit">
				About Us
			</h2>
			<div className="md:bg-mission w-full md:py-16 bg-no-repeat vision   flex items-center md:justify-end justify-center mb-11 ">
				<About
					heading={"Our Vision"}
					img={visionImg}
					alt={"two hands shaking each other"}>
					Our vision is to create a world where feedback is valued and acted
					upon, fostering continuos improvement and mutual understanding between
					users and businesses. Together, we can shape a feedback-driven culture
					that drives positive change.
				</About>
			</div>
			<div className="md:bg-vision w-full md:py-16 bg-no-repeat mission flex items-center md:justify-start justify-center">
				<About
					heading={"Our Mission"}
					img={missionImg}
					alt={
						"two ladies and a gentlemen discussing round the table with two laptops on the table"
					}>
					Our mission is to simplify the feedback process and empower both users
					and business owners to share their thoughts and experience easily.
					Together, we can drive positive change and enhance the relationship
					between consumers and businesses.
				</About>
			</div>
		</section>
	);
};

const About = ({ heading, children, img, alt }) => {
	return (
		<article className="max-w-[31rem] bg-bluegray-2 px-6 py-6 rounded-md text-center ">
			<div>
				<h3 className="text-pri-blue font-bold font-outfit lg:text-3xl text-2xl  mb-3">
					{heading}
				</h3>
				<p className="lg:text-xl text-base text-black-0a font-outfit mt-6 mb-6 md:mb-0 w-full">
					{children}
				</p>
			</div>
			<img src={img} alt={alt} className="md:hidden" />
		</article>
	);
};

About.propTypes = {
	heading: PropTypes.string,
	children: PropTypes.string,
	alt: PropTypes.string,
	img: PropTypes.string,
};

export default AboutUs;
