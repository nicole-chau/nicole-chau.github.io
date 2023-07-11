import React from "react";
import { Link } from "gatsby-link";


const Card = ({ title, image, page }) => {
    return (
        <Link to={page} class="ease-in-out duration-200 hover:shadow-lg rounded-lg p-4 w-96 m-5">
            <img src={image}></img>
            <p class="text-md text-black hover:text-black">{title}</p>
        </Link>
    )
}

export default Card;