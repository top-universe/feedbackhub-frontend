import PropTypes from "prop-types";
import infoIcon from "../../assets/icons/info-icon.svg";
import errorIcon from "../../assets/icons/error-icon.svg";
import { useState } from "react";

const Input = ({
    type = "text",
    name,
    value,
    placeholder = "",
    label = "",
    labelStyles = {},
    inputStyles = {},
    changeHandler,
    blurHandler,
    focusHandler,
    mouseEnterHandler,
    mouseLeaveHandler,
    disabled = false,
    errMsg = "",
    infoMsg = "",
    ...props
}) => {

    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
        focusHandler();
    }

    const handleBlur = () => {
        setIsFocused(false);
        blurHandler();
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
        mouseEnterHandler();
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
        mouseLeaveHandler();
    }

    return (
        <label className={`input-wrap ${errMsg ? "error" : ""} ${isFocused ? "is-focused" : ""} ${disabled ? "is-disabled" : ""} ${isHovered ? "is-hovered" : ""}`}>
            {label ? (
                <span className="input-label" style={labelStyles}>
                    {label}
                </span>
            ) : null
            }
            <input
                type={type}
                name={name}
                className="input"
                value={value}
                disabled={disabled}
                style={inputStyles}
                onChange={changeHandler}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                placeholder={placeholder}
                {...props}
            />
            {infoMsg ? (
                <div className="input-info flex items-center gap-2">
                    <img src={infoIcon} alt="" className="" />
                    <span className="text-sm lg:text-base text-inp-info">
                        {infoMsg}
                    </span>
                </div>
            ) : null
            }
            {errMsg ? (
                <div className="input-error flex items-center gap-2">
                    <img src={errorIcon} alt="" className="" />
                    <span className="text-sm lg:text-base text-error">
                        {errMsg}
                    </span>
                </div>
            ) : null
            }
        </label>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    labelStyles: PropTypes.object,
    inputStyles: PropTypes.object,
    changeHandler: PropTypes.func,
    blurHandler: PropTypes.func,
    focusHandler: PropTypes.func,
    mouseEnterHandler: PropTypes.func,
    mouseLeaveHandler: PropTypes.func,
    errMsg: PropTypes.string,
    infoMsg: PropTypes.string,
}

export default Input;