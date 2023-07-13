import React from "react";
import { Link } from "gatsby-link";


const Card = ({ title, image, page }) => {
    return (
        <div class="w-[350px] h-[250px] mx-4 my-8">
            <Link to={page} class="">
                {/* <div class="max-w-full max-h-full w-auto h-auto m-auto"> */}
                    <img src={image} class="max-w-full max-h-full ease-in-out duration-200 hover:scale-[1.02]"/>            
                {/* </div> */}
            </Link>
            <p class="text-md text-black hover:text-black text-center -mt-3">{title}</p>
        </div>

    )
}

export default Card;