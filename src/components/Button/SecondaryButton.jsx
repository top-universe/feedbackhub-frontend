import PropTypes from 'prop-types';

const SecondaryButton = ({
    type = 'button',
    fullWidth = false,
    clickHandler,
    text,
    styles = {},
    textStyles = {},
    ...props
}) => {

    return (
        <button
            type={type}
            className={`secondary-btn ${fullWidth ? 'w-full' : 'w-fit'}`}
            onClick={clickHandler}
            style={styles}
            {...props}
        >
            <span className='w-max' style={textStyles}>
                {text}
            </span>
        </button>
    )
}

SecondaryButton.propTypes = {
    type: PropTypes.string,
    fullWidth: PropTypes.bool,
    clickHandler: PropTypes.func,
    text: PropTypes.string,
    styles: PropTypes.object,
    textStyles: PropTypes.object
}

export default SecondaryButton