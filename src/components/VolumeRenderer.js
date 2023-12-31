import React from "react";
import grayscale from "../images/computer-graphics/volume-renderer-grayscale.png"
import rgb from "../images/computer-graphics/volume-renderer-rgb.png"

const VolumeRenderer = () => {
    return (
        <div>
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
            <p>This was implemented using Qt and C++.</p>

            <h3>Data Loading and Processing</h3>
            <p>The application allows a user to load in a series of DICOM images. Once the directory is selected, the file tags are then parsed to identify the width, height, rescale intercept and rescale slope values. For each file, the raw pixel values are read and converted to Hounsfield units (HU) with the following formula :</p>
            <p class="text-center font-serif my-2">HU = pixelValue * rescaleSlope + rescaleIntercept</p>
            <p>Note that Hounsfield units are a relative quantitative measurement of radio density used in CT scans.</p>

            <h3>Volume Rendering</h3>
            <p>The volume rendering is implemented through a ray-cast approach. For each pixel on the screen, a ray is cast from the camera origin to the pixel and through the voxel data. If the ray intersects the data volume, then the data is sampled along the ray with grid marching. For each sample, the transmittance <p class="font-serif inline">T </p>
            and color <p class="font-serif inline">C</p> is updated based on the density (calculated from Hounsfield unit) and color at the current voxel. If the data is to be rendered using a RGB color map, then voxels with Hounsfield unit values falling within the selected range will be linearly interpolated between five predefined colors (yellow to red) to obtain the voxel color.</p>

            <h2>Third Party Libraries Used</h2>
            <ul>
                <li>DCMTK: for loading and processing of DICOM files</li>
                <li>ctkRangeSlider: for implementing a range slider in Qt</li>
            </ul>
        </div>
    )
}

export default VolumeRenderer;