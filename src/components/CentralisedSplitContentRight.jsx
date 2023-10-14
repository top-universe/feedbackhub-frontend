import PropTypes from "prop-types";
import SecondaryButton from "./Button/SecondaryButton";
import extLink from "../assets/icons/external-link.svg";

const CentralisedSplitContentRight = ({ icon, heading, image, children = null, clickHandler, imageRight = true }) => {

    return (
        <section className="w-full grid lg:gap-[130px] lg:grid-cols-2 items-center">
            <div className={`w-full grid gap-8 ${imageRight ? "order-2 lg:order-1" : "order-2"}`}>
                <div className="w-fit rounded-lg border-2 border-pri-blue p-[10px] lg:p-4 bg-blue-1">
                    <img src={icon} alt="" className="w-5 h-5 lg:w-8 lg:h-8" />
                </div>
                <h3 className="lg:text-fh-4xl text-fh-xl text-text">
                    {heading}
                </h3>
                <div className="">
                    {children}
                </div>
                <div className="flex justify-start">
                    <SecondaryButton
                        text="Learn more"
                        rightIcon={extLink}
                        clickHandler={clickHandler}
                    />
                </div>
            </div>
            <img src={image} alt="" className={`w-full justify-self-end ${imageRight ? "order-1 lg:order-2" : "order-1"}`} />
        </section>
    )
}

CentralisedSplitContentRight.propTypes = {
    icon: PropTypes.string,
    heading: PropTypes.string,
    image: PropTypes.string,
    children: PropTypes.element,
    clickHandler: PropTypes.func,
    imageRight: PropTypes.bool
}

export default CentralisedSplitContentRight;