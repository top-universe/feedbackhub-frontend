import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SocialMediaIcon = ({ icon, link }) => {

    return (
        <Link to={link} className="">
            <img src={icon} alt="" className="w-8 h-8" />
        </Link>
    )
}

SocialMediaIcon.propTypes = {
    icon: PropTypes.string,
    link: PropTypes.string
}

export default SocialMediaIcon