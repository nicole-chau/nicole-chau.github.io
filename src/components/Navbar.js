import React from "react";
import { useState } from "react";

const Navbar = () => {
    const [collapse, setCollapse] = useState(true);
    let page = "";
    if (typeof window !== 'undefined') {
        page = window.location.pathname;
    }
    const linkStyle = "block py-1 px-2 font-medium text-sm rounded-lg hover:animate-pop ";
    const paths = {
        "home": "/",
        "computer graphics": "/computer-graphics/",
        "web dev": "/web-dev/",
        "design": "/design/",
        "art": "/art/",
    }

    return (
        <nav class="absolute right-0 px-2 z-10">
            <div class="max-w-screen-xl flex flex-col justify-self-end mx-auto p-5">
                <button type="button" onClick={() => setCollapse(!collapse)} class="ml-auto inline-flex items-center p-1 w-6 h-6 text-sm text-navy rounded-lg md:hidden">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke={page === "/" ? `#FFFDF9` : `#243671`} strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class={(collapse ? `hidden ` : ``) + (` md:block`)} id="navbar-default">
                    <ul class={(page === "/" ? `bg-white-smoke `: `bg-navy`) + (` list-none flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-1 p-2 md:p-4 md:mt-0 mt-2 text-right md:text-left rounded-lg shadow-lg md:shadow-none md:bg-transparent`)}>
                        {Object.entries(paths).map(([name, path]) => {
                            let activeStyle;
                            let inactiveStyle;
                            if (page === "/") {
                                activeStyle = " md:max-lg:bg-white-smoke md:max-lg:text-navy bg-navy text-white-smoke hover:text-white-smoke";
                                inactiveStyle = " md:max-lg:text-white-smoke md:max-lg:hover:text-navy md:max-lg:hover:bg-white-smoke hover:bg-navy hover:text-white-smoke text-navy";
                            } else {
                                activeStyle = " bg-white-smoke text-navy md:bg-navy md:text-white-smoke md:hover:text-white-smoke hover:text-navy";
                                inactiveStyle = " text-white-smoke md:text-navy md:bg-white-smoke md:hover:bg-navy md:hover:text-white-smoke hover:bg-white-smoke hover:text-navy";
                            }
                            return (
                                <li>
                                    <a href={path} class={page === path ? linkStyle + activeStyle : linkStyle + inactiveStyle}>{name}</a>
                                </li>)
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;