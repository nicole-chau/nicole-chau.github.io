import React from "react";
import { Link } from "gatsby-link";


const Card = ({ title, image, page }) => {
    return (
        <Link to={page} class="ease-in-out duration-200 hover:shadow-lg rounded-lg p-4 w-96 m-5 max-h-max">
            <img src={image} class="max-w-full	max-h-[88%] w-auto h-auto m-auto"/>            
            <p class="text-md text-black hover:text-black text-center my-3">{title}</p>
        </Link>
    )
}

export default Card;