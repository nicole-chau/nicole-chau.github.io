import React from "react";
import Tag from "../../components/Tag";
import grayscale from "../../images/computer-graphics/volume-renderer-grayscale.png"
import rgb from "../../images/computer-graphics/volume-renderer-rgb.png"

const VolumeRenderer = () => {
    const skills = ["C++", "Qt"];

    return (
        <div class="py-16 px-80">
            <h1 class="float-left inline">Volume Renderer for Medical Imaging</h1>

            <div class="float-right inline">
                <p class="text-right">Created in 2023</p>
                <a 
                    href="https://github.com/nicole-chau/volume-renderer" 
                    class="bg-powder-blue text-white px-2.5 py-1 my-1.5 inline-block rounded-md hover:bg-slate-gray hover:text-white">
                        View code
                </a>
            </div>

            <div class="relative pb-[50%] mt-[80px]">
                <iframe src="https://player.vimeo.com/video/844289996" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen class="absolute top-0 left-0 w-full h-full" title="Volume Renderer for Medical Imaging"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                
            <div class="mb-3 mt-3">
                {skills.map(skill => (<Tag tag={skill}/>))}
            </div>
            
            <h2>Overview</h2>
            
            <p>
            Developed as my undergraduate senior design project, this is an implementation of a volumetric renderer that can be used to view medical images (CT scans). 
            The goal is to provide a tool for visualizing 2D medical images in 3D space and provide interactive features for transforming the data or highlighting certain parts of the data using different colors.
            </p>

            <h2>Features</h2>

            <ul>
                <li>Load in DICOM dataset (directory containing series of .dcm files)</li>
                <li>Volumetric rendering of loaded dataset (grayscale by default)</li>
                <li>Ability to translate and rotate the dataset to view it from various angles</li>
                <li>Option to apply a RGB transfer function to a user-defined range of Hounsfield unit values</li>
            </ul>

            <img 
                src={grayscale}
                alt="volume renderer for medical imaging"
                class="w-600 m-auto"
            />

            <img 
                src={rgb}
                alt="volume renderer for medical imaging"
                class="w-600 m-auto"
            />

            <p>The dataset loaded in the above screenshots was taken from 
                <a href="https://figshare.com/articles/dataset/Patient34/6265679?backTo=/collections/FUMPE/4107803"> FigShare </a>
            and was uploaded by Mojtaba Masoudi.</p>

            <h2>Implementation Overview</h2>

            This was implemented using Qt and C++.

            <h3>Data Loading and Processing</h3>

            The application allows a user to load in a series of DICOM images. Once the directory is selected, the file tags are then parsed to identify the width, height, rescale intercept and rescale slope values. For each file, the raw pixel values are read and converted to Hounsfield units (HU) with the following formula :

            <p class="text-center font-serif my-2">HU = pixelValue * rescaleSlope + rescaleIntercept</p>
            Note that Hounsfield units are a relative quantitative measurement of radio density used in CT scans.

            <h3>Volume Rendering</h3>

            The volume rendering is implemented through a ray-cast approach. For each pixel on the screen, a ray is cast from the camera origin to the pixel and through the voxel data. If the ray intersects the data volume, then the data is sampled along the ray with grid marching. For each sample, the transmittance <p class="font-serif inline">T </p>
            and color <p class="font-serif inline">C</p> is updated based on the density (calculated from Hounsfield unit) and color at the current voxel. If the data is to be rendered using a RGB color map, then voxels with Hounsfield unit values falling within the selected range will be linearly interpolated between five predefined colors (yellow to red) to obtain the voxel color.

            <h2>Third Party Libraries Used</h2>
            <ul>
                <li>DCMTK: for loading and processing of DICOM files</li>
                <li>ctkRangeSlider: for implementing a range slider in Qt</li>
            </ul>

        </div>
    )
}

export default VolumeRenderer