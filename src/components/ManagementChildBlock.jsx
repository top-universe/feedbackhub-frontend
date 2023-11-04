import PropTypes from "prop-types";

const ManagementChildBlock = ({ heading, text }) => (
    <div className="w-full grid gap-1">
        <h4 className="text-text lg:text-subtext text-fh-base-bold lg:text-fh-xl-bold">
            {heading}
        </h4>
        <p className="text-subtext text-fh-base lg:text-fh-xl">
            {text}
        </p>
    </div>
)

ManagementChildBlock.propTypes = {
    heading: PropTypes.string,
    text: PropTypes.string,
}

export default ManagementChildBlock;