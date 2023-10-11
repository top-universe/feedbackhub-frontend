import PropTypes from "prop-types";
import infoIcon from "../../assets/icons/info-icon.svg";
import errorIcon from "../../assets/icons/error-icon.svg";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

const SelectWithPicture = ({
    name,
    value,
    label = "",
    optionsArray,
    labelStyles = {},
    inputStyles = {},
    changeHandler,
    blurHandler = () => { },
    focusHandler = () => { },
    mouseEnterHandler = () => { },
    mouseLeaveHandler = () => { },
    disabled = false,
    errMsg = "",
    infoMsg = "",
    ...props
}) => {

    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

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

    useEffect(() => {
        if (optionsArray.length) {
            const image = optionsArray.find(item => item.value === value).image;
            console.log(image)
            setCurrentImage(image);
        }
    }, [optionsArray, value])

    return (
        <label className={`select-with-img-wrap ${errMsg ? "error" : ""} ${isFocused ? "is-focused" : ""} ${disabled ? "is-disabled" : ""} ${isHovered ? "is-hovered" : ""}`}>
            {label ? (
                <span className="input-label" style={labelStyles}>
                    {label}
                </span>
            ) : null
            }
            <div className="flex gap-4 items-center">
                {currentImage ? (
                    <div className="w-[36px] h-[22px]">
                        <img src={currentImage} alt="" className="object-cover w-full h-full" />
                    </div>
                ) : null}
                <select
                    name={name}
                    className="select-with-img"
                    value={value}
                    disabled={disabled}
                    style={inputStyles}
                    onChange={changeHandler}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    {...props}
                >
                    {optionsArray.length ? (
                        optionsArray.map((item) => (
                            <option key={uuid()} value={item.value}>{item.text}</option>
                        ))
                    ) : null}
                </select>
            </div>
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

SelectWithPicture.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    optionsArray: PropTypes.array,
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

export default SelectWithPicture;