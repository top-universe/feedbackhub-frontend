import logo from "../assets/biz-Logo.png";
import arrow1 from "../assets/Arrow-1.png";
import arrow2 from "../assets/Arrow-2.png";
import arrow3 from "../assets/Arrow-3.png";
import manage from "../assets/manage-img.png";
import collect from "../assets/collect-img.png";
import analyze from "../assets/analyze-img.png";
import { register } from "swiper/element/bundle";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
register();

const Nextgen = () => {
	return (
		<>
			<section className="container-108 bg-black-0a-51 text-white  py-16">
				<div className="max-w-5xl m-auto text-center ">
					<h2 className="text-fh-5xl-mid text-bluegray-3">
						Next Gen feedback management
					</h2>
					<p className="text-fh-lg text-bluegray-5 mt-4 mb-12">
						Feedback HUB believes in giving you a platform to be heard by the
						businesses you interact with
					</p>
					<div className=" items-center justify-between relative hidden md:flex gap-4">
						<Steps
							alt={"alt"}
							img={analyze}
							heading={"Collect Feedback"}
							className={"lg:mt-[32rem]"}>
							Create custom feedback forms, surveys, and integrate with social
							media channels to gather valuable insights from your customers.
						</Steps>
						<div className="flex flex-col gap-8">
							<Steps
								alt={"alt"}
								img={collect}
								heading={"Collect Feedback"}
								className={"lg:mb-9"}>
								Create custom feedback forms, surveys, and integrate with social
								media channels to gather valuable insights from your customers.
							</Steps>
							<img
								src={logo}
								alt="feedback hub logo"
								className="max-w-[5rem] m-auto mt-40 hidden lg:block "
							/>
						</div>

						<Steps
							alt={"alt"}
							img={manage}
							heading={"Collect Feedback"}
							className={"lg:mt-[29rem]"}>
							Create custom feedback forms, surveys, and integrate with social
							media channels to gather valuable insights from your customers.
						</Steps>
						<img
							src={arrow1}
							alt=""
							className="m-auto -mt-16 w-[66%] absolute top-[240px] right-[155px] hidden lg:block "
						/>
						<img
							src={arrow3}
							alt=""
							className="m-auto -mt-16 w-[66%] absolute top-[262px] left-[155px] hidden lg:block  "
						/>
					</div>
					<img
						src={arrow2}
						alt=""
						className="m-auto -mt-10 w-[70%] -rotate-[4deg] hidden lg:block "
					/>
				</div>
			</section>
			<Carousel />
		</>
	);
};
const Steps = ({ alt, img, heading, children, className }) => {
	return (
		<article className={`text-center ${className}`}>
			<img src={img} alt={alt} className="m-auto max-w-[5rem]" />
			<h3 className="text-fh-xl-semi text-bluegray-3">{heading}</h3>
			<p className="text-fh-sm text-bluegray-4">{children}</p>
		</article>
	);
};
const Carousel = () => {
	return (
		<>
			<div className="container-108 bg-black-0a-51 text-white md:hidden">
				<Swiper pagination={{ clickable: true }}>
					<SwiperSlide>
						<Steps
							alt={"alt"}
							img={analyze}
							heading={"Collect Feedback"}
							className={"lg:mt-[32rem]"}>
							Create custom feedback forms, surveys, and integrate with social
							media channels to gather valuable insights from your customers.
						</Steps>
					</SwiperSlide>
					<SwiperSlide>
						<Steps
							alt={"alt"}
							img={collect}
							heading={"Collect Feedback"}
							className={"lg:mb-9"}>
							Create custom feedback forms, surveys, and integrate with social
							media channels to gather valuable insights from your customers.
						</Steps>
					</SwiperSlide>
					<SwiperSlide>
						<Steps
							alt={"alt"}
							img={manage}
							heading={"Collect Feedback"}
							className={"lg:mt-[29rem]"}>
							Create custom feedback forms, surveys, and integrate with social
							media channels to gather valuable insights from your customers.
						</Steps>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
};
export default Nextgen;
