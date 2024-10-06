import React from "react";
import { Helmet } from "react-helmet";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import antibioticsCard from "../images/art/card-antibiotics.png"
import antibiotics from "../images/art/antibiotics.mp4"

import tedxpennCard from "../images/art/tedxpenn.gif";
import tedxpennVideo from "../images/art/tedxpenn.mp4";

import animationCard from "../images/art/animation.gif";
import animationVideo from "../images/art/animation.mp4";

import character from "../images/art/character-model.png";

import boatCard from "../images/art/card-boat.png";
import boatVideo from "../images/art/boat-demo.mp4";
import boatTexture from "../images/art/boat-texture.png";
import boatCloseup from "../images/art/boat-closeup2.png";

import cat from "../images/art/cat.jpg";
import bridge from "../images/art/bridge.jpg";
import mountain from "../images/art/mountains.jpg";
import bird from "../images/art/eagle.jpg";
import city from "../images/art/city.jpg";

import tornCard from "../images/art/card-torn.png";
import torn from "../images/art/torn.jpg";
import cityOfWealthCard from "../images/art/card-city-of-wealth.png";
import cityOfWealth from "../images/art/city-of-wealth.jpg";
import skullCard from "../images/art/card-skull.png";
import skull from "../images/art/skull.jpg";
import pastToPresentCard from "../images/art/card-past-to-present.png";
import pastToPresent from "../images/art/past-to-present.jpg";
import anorexiaCard from "../images/art/card-anorexia.png";
import anorexia from "../images/art/anorexia.jpg";
import growthCard from "../images/art/card-growth.png";
import growth from "../images/art/growth.png"

const Art = () => {
    return (
        <div class="h-min-screen bg-white-smoke">
            <Helmet>
                <title>Nicole Chau - Art</title>
                <meta name="description" content="Nicole Chau Portfolio - Art" />
            </Helmet>

            <Navbar page="/art/"/>
            <div class="w-4/5 lg:min-w-3/5 m-auto h-min-screen">

                <h1 id="animation" class="pt-16 text-navy">2D animation</h1>
                <div class="flex flex-wrap justify-evenly gap-4 lg:gap-8 mt-10">
                    <Card
                        color="bg-card-tan"
                        image={antibioticsCard}
                        title="Accessible Antibiotics Video Series"
                        skills={["Adobe After Effects", "Adobe Illustrator", "iArtBook"]}
                        year="2023"
                        description={<>
                            <video width="1800" controls class="mb-8">

                                <source src={antibiotics} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            Hired by content-experts in infectious diseases at the University of Pennsylvania Perelman School of Medicine for visual art and visual design of an interactive, video-based open source, comprehensive online antibiotic curriculum that aims to enable adult learners to engage with educational modules and build expertise at their own pace.
                            <br /> <br />
                            This project was funded by the University of Pennsylvania - Department of Medicine Undergraduate Medical Education Innovation Grant. Created a total of 20 videos ranging from 2-10 minutes.
                        </>} />
                    <Card
                        color="bg-card-pink"
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
                        </>} />
                    <Card
                        color="bg-card-blue"
                        image={animationCard}
                        title="Hand Drawn Digital Animation"
                        skills={["Autodesk Sketchbook", "Adobe After Effects"]}
                        year="2021"
                        subtitle="Animated short created with hand drawn frames using Autodesk Sketchbook on the iPad and compiled in Adobe After Effects."
                        description={
                            <>
                                <video width="1800" controls class="mb-8">
                                    <source src={animationVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </>} />
                </div>

                <h1 id="modeling" class="pt-16 text-navy">3D modeling</h1>
                <div class="flex flex-wrap justify-evenly gap-4 lg:gap-8 mt-10">
                    <Card
                        color="bg-card-tan"
                        image={character}
                        title="Character Model"
                        skills={["Autodesk Maya", "Autodesk Arnold", "Adobe Photoshop"]}
                        year="2021"
                        subtitle="3D character model based on original concept art. Modeled and rendered using Autodesk Maya and Arnold with some textures created in Adobe Photoshop."
                        video="https://player.vimeo.com/video/750245073" />
                    <Card
                        color="bg-card-blue"
                        image={boatCard}
                        title="AR Boat"
                        skills={["Blender"]}
                        year="2021"
                        subtitle="AR sculpture of a sinking boat."
                        modalImgs={[boatTexture, boatCloseup]}
                        description={
                            <>
                                <video width="1800" controls class="mb-8">
                                    <source src={boatVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </>}
                        descriptionFirst={true} />
                </div>


                <h1 id="illustrations" class="pt-16 text-navy">digital illustrations</h1>
                <div class="flex flex-wrap justify-evenly gap-4 lg:gap-8 mt-10">
                    <Card
                        color="bg-card-pink"
                        image={cat}
                        skills={["Adobe Photoshop"]}
                        year="2020"
                        description={<img src={cat} alt="cat drawing" class="px-8 py-4 max-h-[550px] m-auto clear-both" />} />
                    <Card
                        color="bg-card-blue"
                        image={mountain}
                        skills={["Adobe Photoshop"]}
                        year="2021"
                        modalImgs={[mountain]} />
                    <Card
                        color="bg-card-tan"
                        image={bird}
                        skills={["Adobe Photoshop"]}
                        year="2021"
                        modalImgs={[bird]} />
                    <Card
                        color="bg-card-tan"
                        image={bridge}
                        skills={["Adobe Photoshop"]}
                        year="2021"
                        modalImgs={[bridge]} />
                    <Card
                        color="bg-card-pink"
                        image={city}
                        skills={["Adobe Photoshop"]}
                        year="2021"
                        modalImgs={[city]} />
                </div>
                {/*             
            <h1 id="traditional" class="px-12 pt-8 md:px-48">traditional art</h1>
            <div class="flex flex-wrap justify-evenly gap-4 lg:gap-8 mt-10">
                <Card
                    image={tornCard}
                    skills={["Charcoal", "Color Pencil"]}
                    year="2018"
                    modalImgs={[torn]} />
                <Card
                    image={skullCard}
                    skills={["Pen", "Ink"]}
                    year="2021"
                    description={<img src={skull} alt="skull drawing" class="px-8 py-4 max-h-[550px] m-auto clear-both"/>}/>
                <Card
                    image={pastToPresentCard}
                    subtitle="A depiction of Hong Kong's history."
                    skills={["Paper cut by hand"]}
                    year="2019"
                    modalImgs={[pastToPresent]} />
                <Card
                    image={cityOfWealthCard}
                    skills={["Adobe Photoshop", "Woven printed photographs"]}
                    year="2017"
                    modalImgs={[cityOfWealth]} />
                <Card
                    image={anorexiaCard}
                    skills={["Paper cut by hand"]}
                    year="2016"
                    modalImgs={[anorexia]} />
                <Card
                    image={growthCard}
                    skills={["Adobe Illustrator", "Laser cut", "Pen"]}
                    year="2019"
                    modalImgs={[growth]} />
            </div> */}
            </div>
            <Footer />
        </div>
    )
}

export default Art;