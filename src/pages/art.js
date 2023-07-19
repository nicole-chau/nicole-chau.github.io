import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import tedxpennCard from "../images/art/card-tedxpenn.png";
import tedxpennVideo from "../images/art/tedxpenn.mp4"

import animationCard from "../images/art/card-animation.png"
import animationVideo from "../images/art/animation.mp4"

import character from "../images/art/card-character.png"

const Art = () => {
    return (
        <div>
            <Navbar/>
            <h1 id="animation" class="pt-16 px-48">2D animation</h1>
            <div class="flex flex-wrap justify-items-start justify-center mx-8">
                <Card
                    image={tedxpennCard}
                    title="TEDxPenn Logo Animation" 
                    skills={["Adobe After Effects", "Adobe Illustrator"]}
                    year="2022"
                    subtitle="Animation of the 2022 TEDxPenn conference logo. Created as the conference's Co-director of Design."
                    description={<>
                        <video width="1800" controls class="mb-8">
                            <source src={tedxpennVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        </>}/>
                <Card
                    image={animationCard}
                    title="Hand drawn digital animation" 
                    skills={["Autodesk Sketchbook", "Adobe After Effects"]}
                    year="2021"
                    subtitle="Animated short created with hand drawn frames using Autodesk Sketchbook on the iPad and compiled in Adobe After Effects."
                    description={
                    <>
                        <video width="1800" controls class="mb-8">
                            <source src={animationVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </>}/>
            </div>
            
            <h1 id="modeling" class="pt-16 px-48">3D modeling</h1>
            <div class="flex flex-wrap justify-items-start justify-center mx-8">
                <Card
                    image={character}
                    title="3D Character Model" 
                    skills={["Autodesk Maya", "Autodesk Arnold", "Adobe Photoshop"]}
                    year="2021"
                    subtitle="3D character model based on original concept art. Modeled and rendered using Autodesk Maya and Arnold with some textures created in Adobe Photoshop."
                    video="https://player.vimeo.com/video/750245073" />
            </div>
            
            
            <h1 id="illustrations" class="pt-16 px-48">digital illustrations</h1>
            
            <h1 id="traditional" class="pt-16 px-48">traditional art</h1>
            <Footer />
        </div>
    )
}

export default Art;