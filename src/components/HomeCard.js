import React from "react";
import { Link } from "gatsby-link";

const HomeCard = ({ image, title, page}) => {
    return (
        <div class="w-[230px] lg:w-[300px] mx-2 my-2">
            <Link to={page} class="">
                <img src={image} class="max-w-full max-h-full ease-in-out duration-200 hover:scale-[1.02] rounded-xl shadow"/>            
            </Link>
           
            <p class="text-sm lg:text-md text-black hover:text-black text-center mt-3">{title}</p>
        </div>
    )
}

export default HomeCard;