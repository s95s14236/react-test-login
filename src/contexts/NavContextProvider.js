import { useState } from "react";
import { NavContext } from "./Context";
import { NAV_PAGE } from "../utils/constants";

export default function NavContextProvider({ children }) {
    const [navPage, setNav] = useState(NAV_PAGE.home);

    function setNavPage(nav) {
        if (nav !== navPage) setNav(nav);
    }

    return (
        <NavContext.Provider value={{ navPage, setNavPage }}>
            {children}
        </NavContext.Provider>
    );
}