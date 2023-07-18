import React from "react";
import { useState } from "react";
import { Link } from "gatsby-link";
import Tag from "./Tag";


const Card = ({ image, title, page, year, link, skills, subtitle, video, modalImgs, description, descriptionFirst }) => {
    const [showModal, setShowModal] = useState(false);

    console.log({description})

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
                <div class="flex justify-center items-center bg-gray bg-opacity-75 absolute min-h-[100vh] min-w-[100vw] top-0 left-0 z-20">
                    <div class="bg-white p-6 rounded-lg shadow-xl w-[60%] max-h-[90vh] overflow-auto">
                        <button type="button" class="text-2xl text-charcoal float-right relative -right-3 -top-5" onClick={() => setShowModal(false)}>×</button>
                        
                        <div class="float-left inline">
                            <p class="font-bold text-xl">{title}</p>
                            <p class="text-sm">{subtitle}</p>
                            <div class="mb-3">
                                {skills.map(skill => (<Tag tag={skill}/>))}
                            </div>
                        </div>

                        <div class="float-right inline text-right">
                            {year && <p class="text-right">Created in {year}</p>}
                            {link && 
                            <a 
                                href={link}
                                class="bg-powder-blue text-white px-2.5 py-1 my-2 inline-block rounded-md hover:bg-slate-gray hover:text-white">
                                    View code
                            </a>}
                        </div>

                        {descriptionFirst ? 
                            <>
                                <div class="clear-both">{description} </div>

                                {modalImgs && modalImgs.map(img => (<img src={img} class="px-8 py-4 max-w-[85%] m-auto clear-both"/>))}
                                {video && 
                                <>
                                    <div class="relative pb-[50%] mt-2 clear-both">
                                        <iframe src={video} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen class="absolute top-0 left-0 w-full h-full" title="Volume Renderer for Medical Imaging"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                                </>}
                            </> 
                        :
                            <>
                                {modalImgs && modalImgs.map(img => (<img src={img} class="px-8 py-4 max-w-[85%] m-auto clear-both"/>))}
                                {video && 
                                <>
                                    <div class="relative pb-[50%] mt-2 clear-both">
                                        <iframe src={video} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen class="absolute top-0 left-0 w-full h-full" title="Volume Renderer for Medical Imaging"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                                </>}

                                <div class="clear-both">{description} </div>
                            </>
                        }
                    </div>
                </div>
            )}
        </div>

    )
}

export default Card;