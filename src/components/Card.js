import React from "react";
import { Link } from "gatsby-link";


const Card = ({ title, image, page }) => {
    return (
        <div class="w-[350px] h-[250px] mx-4 my-9">
            <Link to={page} class="">
                <img src={image} class="max-w-full max-h-full ease-in-out duration-200 hover:scale-[1.02]"/>            
            </Link>
            <p class="text-md text-black hover:text-black text-center mt-3">{title}</p>
        </div>

    )
}

export default Card;