import PropTypes from 'prop-types';

const SecondaryButton = ({
    type = 'button',
    fullWidth = false,
    clickHandler,
    text,
    leftIcon = null,
    rightIcon = null,
    styles = {},
    textStyles = {},
    ...props
}) => {

    return (
        <button
            type={type}
            className={`secondary-btn ${fullWidth ? 'w-full' : 'w-fit'} flex items-center gap-2`}
            onClick={clickHandler}
            style={styles}
            {...props}
        >
            {leftIcon ? (
                <img src={leftIcon} alt="" className="w-4 h-4 lg:w-8 lg:h-8" />
            ) : null}
            <span className='w-max' style={textStyles}>
                {text}
            </span>
            {rightIcon ? (
                <img src={rightIcon} alt="" className="w-4 h-4 lg:w-8 lg:h-8" />
            ) : null}
        </button>
    )
}

SecondaryButton.propTypes = {
    type: PropTypes.string,
    fullWidth: PropTypes.bool,
    clickHandler: PropTypes.func,
    text: PropTypes.string,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    styles: PropTypes.object,
    textStyles: PropTypes.object
}

export default SecondaryButton