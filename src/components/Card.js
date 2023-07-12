import React from "react";
import { Link } from "gatsby-link";


const Card = ({ title, image, page }) => {
    return (
        <Link to={page} class="ease-in-out duration-200 shadow-md hover:shadow-lg rounded-lg p-4 w-80 m-5 h-fit">
            <img src={image} />            
            {/* class="max-w-full w-auto m-auto" */}
            <p class="text-md text-black hover:text-black text-center mt-3">{title}</p>
        </Link>
    )
}

export default Card;