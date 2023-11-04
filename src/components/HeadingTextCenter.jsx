import PropTypes from "prop-types";

const HeadingTextCenter = ({ heading, text, whiteText = false }) => (
    <div className="w-full grid gap-2 text-center">
        <h2 className={`${whiteText ? "text-bluegray-1" : "text-bluegray-9"} \
        lg:text-fh-4xl-bold lg:leading-[60px] text-fh-2xl-bold max-w-[90%] mx-auto`}>
            {heading}
        </h2>
        <p className={`${whiteText ? "text-bluegray-2" : "text-subtext"} text-sm lg:text-lg
        max-w-[90%] lg:max-w-[40%] mx-auto`}>
            {text}
        </p>
    </div>
)

HeadingTextCenter.propTypes = {
    heading: PropTypes.string,
    text: PropTypes.string,
    whiteText: PropTypes.bool
}

export default HeadingTextCenter;