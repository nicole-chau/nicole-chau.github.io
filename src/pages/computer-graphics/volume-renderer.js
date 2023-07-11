import React from "react";
import Tag from "../../components/Tag";
import image from "../../images/volume-renderer.png"

const VolumeRenderer = () => {
    const skills = ["C++", "Qt"];

    return (
        <div class="py-16 px-64">
            <h1 class="float-left">Volume Renderer for Medical Imaging</h1>

            <div class="float-right">
                <p class="text-right">Created in 2023</p>
                <a 
                    href="https://github.com/nicole-chau/volume-renderer" 
                    class="bg-powder-blue text-white px-2.5 py-1 my-1.5 inline-block rounded-md hover:bg-slate-gray hover:text-white">
                        View code
                </a>
            </div>

            <img 
                src={image}
                alt="volume renderer for medical imaging"
                class="w-600 m-auto"
            />
                
            <div class="mb-3">
                {skills.map(skill => (<Tag tag={skill}/>))}
            </div>

            
            <h2>Overview</h2>
            
            <p>
            Developed as my undergraduate senior design project, this is an implementation of a volumetric renderer that can be used to view medical images (CT scans). 
            The goal is to provide a tool for visualizing 2D medical images in 3D space and provide interactive features for transforming the data or highlighting certain parts of the data using different colors.
            </p>

        </div>
    )
}

export default VolumeRenderer