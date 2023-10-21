import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import useScrollBlock from "../hooks/useScrollBlock";

export default function useHeader() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(null);
    const [blockScroll, allowScroll] = useScrollBlock();

    const openMenu = () => setMenuIsOpen(true);
    const closeMenu = () => setMenuIsOpen(false);

    const navLinkClasses = () => {
        return `text-fh-base lg:text-fh-sm xl:text-fh-lg text-bluegray-9 hover:text-pri-blue`
    }

    const recalibrateScreenWidth = useCallback(() => {
        const width = window.innerWidth;
        setScreenWidth(width);
    }, [])

    useEffect(() => {
        menuIsOpen ? blockScroll() : allowScroll();

        return () => allowScroll();
    }, [menuIsOpen, blockScroll, allowScroll])

    useLayoutEffect(() => {
        window.addEventListener("resize", recalibrateScreenWidth);

        return () => {
            window.removeEventListener("resize", recalibrateScreenWidth);
        }
    }, [recalibrateScreenWidth])

    useEffect(() => {
        if (screenWidth >= 1024 && menuIsOpen) {
            setMenuIsOpen(false)
        }
    }, [screenWidth, menuIsOpen])

    return { openMenu, closeMenu, navLinkClasses, menuIsOpen }
}

