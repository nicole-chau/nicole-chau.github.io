import React from "react";
import { useState } from "react";
import { Link } from "gatsby-link";
import Tag from "./Tag";


const Card = ({ color, image, title, year, link, skills, subtitle, video, modalImgs, description, descriptionFirst }) => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <div class="">
            <button type="button" class={`${color} rounded w-[280px] h-[200px] lg:w-[350px] lg:h-[250px]`} onClick={() => setShowModal(true)} >
                <img src={image} class="max-w-[250px] max-h-[165px] lg:max-w-[290px] lg:max-h-[210px] m-auto ease-in-out duration-200 hover:scale-[1.02] hover:drop-shadow-[0px_0px_8px_rgba(0,0,0,0.4)]"/>
            </button>
            
            <p class="text-md text-black text-wrap max-w-[280px] lg:max-w-[360px] font-medium hover:text-black text-center mt-2">{title}</p>
            

            {showModal
            && (
                <div onClick={() => setShowModal(false)} class="flex justify-center items-center bg-gray bg-opacity-75 backdrop-blur-sm fixed min-h-[100vh] min-w-[100vw] top-0 left-0 z-20 overflow-x-hidden overflow-y-auto">
                    <div class="relative m-auto bg-white-smoke p-6 rounded-lg shadow-xl w-[80%] lg:w-[60%] max-h-[90vh] overflow-auto">
                        <button type="button" class="text-xl md:text-2xl text-charcoal float-right relative -right-3 -top-5" onClick={() => setShowModal(false)}>×</button>
                        
                        <div class="md:float-left inline w-[80%]">
                            <p class="font-bold text-xl">{title}</p>
                            <p class="text-sm">{subtitle}</p>
                            <div class="md:mb-3">
                                {skills.map(skill => (<Tag tag={skill}/>))}
                            </div>
                        </div>

                        <div class="mb-4 md:float-right lg:inline md:text-right md:mt-2 mt-2">
                            {year && <p class="md:-mr-1 mb-2 lg:mb-0 inline md:block mr-2 text-sm lg:text-base md:text-right">Created in {year}</p>}
                            {link && 
                            <a 
                                href={link}
                                class="inline text-sm lg:text-base bg-maroon text-white-smoke px-2.5 py-1 my-2 lg:inline-block rounded-md hover:bg-salmon hover:text-white-smoke">
                                    View code
                            </a>}
                        </div>

                        {descriptionFirst ? 
                            <>
                                <p class="clear-both">{description} </p>

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

                                <p class="clear-both">{description} </p>
                            </>
                        }
                    </div>
                </div>
            )}
        </div>

    )
}

export default Card;