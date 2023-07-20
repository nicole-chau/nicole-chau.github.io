import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import pcvCard from "../images/design/card-pcv.png"
import pcv from "../images/design/pcv-logo.png"
import ideathonCard from "../images/design/card-pcv-ideathon.png"
import generalCard from "../images/design/card-pcv-general.png"
import ideathon from "../images/design/pcv-ideathon.jpg"
import general from "../images/design/pcv-home.jpg"
import about from "../images/design/pcv-about.jpg"
import people from "../images/design/pcv-people.jpg"
import fellowships from "../images/design/pcv-fellowships.jpg"

import voiCard from "../images/design/card-voi.png"
import voiProgram from "../images/design/voi-program.jpg"
import voiPoster from "../images/design/voi-poster.png"

import pennappsLogoCard from "../images/design/card-pennapps-logos.png"
import pennappsCloud from "../images/design/pennapps-cloud.png"
import pennappsSpring from "../images/design/pennapps-spring.png"
import pennappsSustainability from "../images/design/pennapps-sustainability.png"

import pennappsPlatyCard from "../images/design/card-pennapps-platy.png"
import pennappsPlatyTriangle from "../images/design/platy-triangle.png"
import pennappsPlatyLeaves from "../images/design/platy-leaves.png"

import mtLogoCard from "../images/design/card-mt-logo.png"
import mtLogo from "../images/design/mt-logo.png"

import personalCard from "../images/design/card-personal.png"
import personal from "../images/design/personal-art.jpg"

import k4kCard from "../images/design/card-k4k.png"
import k4kCovers from "../images/design/k4k-covers-bg.png"
import k4kSpread from "../images/design/k4k-spread-bg.png"

const Design = () => {

    return (
        <div>
            <Navbar/>
            <h1 class="pt-16 px-48">design</h1>
            <div class="flex flex-wrap justify-items-start justify-center mx-8">
                <Card
                    image={pcvCard}
                    title="Penn Climate Ventures Logo Design" 
                    skills={["Adobe Illustrator"]}
                    year="2022"
                    subtitle="Designed as the Head of Design for Penn Climate Ventures."
                    modalImgs={[pcv]}/>
                <Card
                    image={generalCard}
                    title="Penn Climate Ventures General Website Design"           
                    skills={["Figma"]}
                    year="2022"
                    subtitle={<>View the Figma file <a target="_blank" href="https://www.figma.com/file/VHarLpDtEqM6j4KC6LFZeN/PCV-General-Website-Design?type=design&node-id=0%3A1&mode=design&t=7o044DXm6FZGmJGq-1" >
                        here</a>.</>}
                    modalImgs={[general, about, people, fellowships]}/>
                <Card
                    image={ideathonCard}
                    title="Penn Climate Ventures Ideathon Website Design" 
                    skills={["Figma"]}
                    year="2021"
                    subtitle={<>View the figma file <a target="_blank" href="https://www.figma.com/file/Lc4SznHXvOh0r19HGmY4mJ/PCV-Ideathon%2FPrize-Home-Page-Design?type=design&node-id=0%3A1&mode=design&t=F5wXxeJfx2cdtp1e-1">
                        here</a> and the website <a target="_blank" href="https://ideathon.pennclimateventures.org/">
                        here</a>.</>}
                    modalImgs={[ideathon]}/>
                <Card
                    image={pennappsLogoCard}
                    title="PennApps Logo and Banner Designs" 
                    skills={["Adobe Illustrator"]}
                    year="2021, 2022"
                    subtitle="Logo and banner designs for various iterations of the University of Pennsylvania's collegiate hackathon, each corresponding to a different theme (cloud, spring, sustainability). Designed as part of the PennApps creative team."
                    modalImgs={[pennappsCloud, pennappsSpring, pennappsSustainability]}/>
                <Card
                    image={pennappsPlatyCard}
                    title="PennApps Mascot Designs" 
                    skills={["Adobe Illustrator"]}
                    year="2020, 2022"
                    subtitle="Designed variations of the PennApps mascot to match the current iteration's theme (music, sustainability)."
                    modalImgs={[pennappsPlatyTriangle, pennappsPlatyLeaves]}/>
                <Card
                    image={voiCard}
                    title="'Village of Idiots' Poster and Program Design" 
                    skills={["Adobe Illustrator", "Adobe Indesign"]}
                    year="2018"
                    modalImgs={[voiPoster, voiProgram]}/>
                <Card
                    image={mtLogoCard}
                    title="Media Team Logo Design" 
                    skills={["Adobe Illustrator"]}
                    year="2018"
                    modalImgs={[mtLogo]}/>
                <Card
                    image={k4kCard}
                    title="Kids4Kids Code+Create Brochure Design" 
                    subtitle="Brochure design for the Code+Create program hosted by NGO Kids4Kids."
                    year="2018"
                    skills={["Adobe Illustrator", "Adobe Indesign"]}
                    modalImgs={[k4kCovers, k4kSpread]}/>
                <Card
                    image={personalCard}
                    title="Abstract Designs" 
                    subtitle="Personal artwork exploring abstract designs."
                    skills={["Adobe Illustrator"]}
                    year="2020"
                    description={<img src={personal} alt="cat drawing" class="px-8 m-auto clear-both"/>}/>
            </div>

            <Footer />
        </div>
    )
}

export default Design;