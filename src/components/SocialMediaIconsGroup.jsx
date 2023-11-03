import PropTypes from "prop-types";
import SocialMediaIcon from "./SocialMediaIcon";

const SocialMediaIconsGroup = ({ arr }) => {

    return (
        <div className="w-max flex gap-4 items-center">
            {arr.map((item, idx) => <SocialMediaIcon key={`med-${idx}`} icon={item.icon} link={item.link} />)}
        </div>
    )
}

SocialMediaIconsGroup.propTypes = {
    arr: PropTypes.array
}

export default SocialMediaIconsGroup