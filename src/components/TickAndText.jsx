import PropTypes from "prop-types";
import tick from "../assets/icons/ep-check.svg";

const TickAndText = ({ text }) => (
    <div className="w-full flex gap-2 items-center">
        <img src={tick} alt="" className="w-6 h-6 lg:w-8 lg:h-8" />
        <span className="text-base lg:text-fh-xl text-subtext">
            {text}
        </span>
    </div>
)

TickAndText.propTypes = {
    text: PropTypes.string
}

export default TickAndText;