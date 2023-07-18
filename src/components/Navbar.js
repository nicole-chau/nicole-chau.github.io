import React from "react";
import { useState } from "react";

const Navbar = () => {
    const [collapse, setCollapse] = useState(true)
    const linkStyle = "block py-2 pl-3 pr-4 text-black hover:text-powder-blue md:p-0";

    // const collapsedStyle = collapse ? 

    return (
        <nav class="absolute right-0 px-2 z-10">
            <div class="max-w-screen-xl flex flex-col justify-self-end mx-auto p-5">
                <button type="button" onClick={() => setCollapse(!collapse)} class="ml-auto inline-flex items-center p-1 w-8 h-8 text-sm text-gray-500 rounded-lg md:hidden">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div class={(collapse ? `hidden ` : ``) + (`md:w-full md:block md:w-auto`)} id="navbar-default">
                    <ul class="list-none flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-white shadow md:shadow-none md:flex-row md:space-x-8 md:mt-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/" class={linkStyle} aria-current="page">home</a>
                        </li>
                        <li>
                            <a href="/computer-graphics" class={linkStyle}>computer graphics</a>
                        </li>
                        <li>
                            <a href="/web-dev" class={linkStyle}>web dev</a>
                        </li>
                        <li>
                            <a href="/design" class={linkStyle}>design</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;