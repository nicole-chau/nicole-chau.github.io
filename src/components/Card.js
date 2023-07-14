import React from "react";
import { useState } from "react";
import { Link } from "gatsby-link";
import Tag from "./Tag";


const Card = ({ title, image, page, skills, description, displayImg}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div class="w-[350px] h-[250px] mx-4 my-9">
            {page ? 
                <Link to={page} class="">
                    <img src={image} class="max-w-full max-h-full ease-in-out duration-200 hover:scale-[1.02]"/>            
                </Link>
            : 
                <button type="button" onClick={() => setShowModal(true)} >
                    <img src={image} class="max-w-full max-h-full ease-in-out duration-200 hover:scale-[1.02]"/>
                </button>
            }
            <p class="text-md text-black hover:text-black text-center mt-3">{title}</p>

            {showModal
            && (
                <div class="flex justify-center items-center bg-gray bg-opacity-75 absolute inset-0">
                    <div class="bg-white p-5 rounded-lg shadow-md">
                        <button type="button" class="float-right text-2xl -mt-3 text-charcoal" onClick={() => setShowModal(false)}>×</button>
                        <p class="font-bold text-lg">{description}</p>
                        <img src={displayImg} class="p-8 max-w-[80%] m-auto"/>
                        <div class="mt-3">
                            {skills.map(skill => (<Tag tag={skill}/>))}
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Card;