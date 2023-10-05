import PropTypes from 'prop-types';

const DestructiveButton = ({
    type = 'button',
    fullWidth = false,
    clickHandler,
    text,
    styles = {},
    textStyles = {},
    ...props
}) => {

    const stylesObj = Object.assign({}, styles);
    const textStylesObj = Object.assign({}, textStyles)

    return (
        <button
            type={type}
            className={`destructive-btn ${fullWidth ? 'w-full' : 'w-fit'}`}
            onClick={clickHandler}
            style={stylesObj}
            {...props}
        >
            <span className='w-max' style={textStylesObj}>
                {text}
            </span>
        </button>
    )
}

DestructiveButton.propTypes = {
    type: PropTypes.string,
    fullWidth: PropTypes.bool,
    clickHandler: PropTypes.func,
    text: PropTypes.string,
    styles: PropTypes.object,
    textStyles: PropTypes.object
}

export default DestructiveButton