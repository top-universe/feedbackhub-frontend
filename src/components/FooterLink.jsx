import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FooterLink = ({ text, link }) => {

    return (
        <Link to={link} className="text-decoration-none text-bluegray-2">
            <span className="text-fh-sm lg:text-fh-lg hover:text-white">{text}</span>
        </Link>
    )
}

FooterLink.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string
}

export default FooterLink