import React from "react";
import { useState } from "react";
import { Link } from "gatsby-link";

const HomeCard = ({ color, image, title, page, description }) => {
    const [hover, setHover] = useState(false);

    const width = "w-[220px] lg:w-[350px] ";
    const height = "h-[170px] lg:h-[260px] ";


    return (
        // <div class="mx-2 my-2">
            <div class={`${color} rounded ${width} ${height}`}>
                <Link to={page} class="flex justify-center items-center h-full w-full">
                    <img src={image} class="max-w-[200px] max-h-[150px] lg:max-w-[320px] lg:max-h-[240px] object-contain rounded" />
                    <div class={`absolute rounded ${width} ${height} flex flex-col items-center justify-center hover:opacity-0 transition-ease-in-out duration-200`}>
                        <div class={`absolute bg-gray opacity-80 rounded ${width} ${height}`}></div>
                        <p class="text-white-smoke font-bold text-md lg:text-xl drop-shadow-md">{title}</p>
                        {description && <p class="text-center w-[200px] text-white-smoke text-xs lg:text-sm italic font-bold drop-shadow-sm">{description}</p>}
                    </div>
                </Link>
            </div>

        //     {/* <p class="text-sm lg:text-lg font-medium text-black hover:text-black text-center mt-3">{title}</p> */}
        // </div>
    )
}

export default HomeCard;