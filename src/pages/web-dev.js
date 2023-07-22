import React from "react";
import { Helmet } from "react-helmet";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import minder from "../images/web-dev/minder.png";
import signIn from "../images/web-dev/minder-sign-in.png";
import trending from "../images/web-dev/minder-trending.png";
import browse from "../images/web-dev/minder-browse.png";
import swipe from "../images/web-dev/minder-swipe.png";
import liked from "../images/web-dev/minder-liked.png";
import info from "../images/web-dev/minder-info.png";

import pcvIdeathon from "../images/web-dev/card-pcv-ideathon.png";
import home from "../images/web-dev/pcv-home.png"
import schedule from "../images/web-dev/pcv-schedule.png"
import faq from "../images/web-dev/pcv-faq.png"

import imageEditor from "../images/web-dev/collaborative-image-editor.png";
import logIn from "../images/web-dev/cie-log-in.png";
import images from "../images/web-dev/cie-my-images.png";
import upload from "../images/web-dev/cie-upload.png";
import edit from "../images/web-dev/cie-edit.png";
import shared from "../images/web-dev/cie-shared.png";

import snowflakeCard from "../images/web-dev/snowflake.png"
import snowflakeVideo from "../images/web-dev/snowflake-demo.mp4"

const WebDev = () => {
    return (
        <div>
            <Helmet>
                <title>Nicole Chau - Web Dev</title>
                <meta name="description" content="Nicole Chau Portfolio - Web Dev" />
            </Helmet>

            <Navbar/>
            <h1 class="px-12 pt-16 md:px-48">web dev</h1>
            <div class="flex flex-wrap justify-items-start justify-center mx-8">
                <Card
                    image={minder}
                    title="Tinder for Movies" 
                    skills={["React", "Node.js", "Express", "MySQL"]}
                    year="2022"
                    subtitle="A Tinder-like web app that allows users to swipe through and save movies."
                    modalImgs={[signIn, trending, browse, swipe, liked, info]}
                    description="
                        This is a Tinder-like web app that allows users to swipe through and save movies. 
                        The movie data is joined from the IMDb dataset and Kaggle movie dataset, and additional information was scraped using Python and fetched from the TMDB API.
                        Users can browse through trending movies or swipe through a list of movies recommended to them based on their existing liked movies. 
                        This project was completed in collaboration with three other people."
                    descriptionFirst={true}/>
                <Card
                    image={pcvIdeathon}
                    title="Penn Climate Ventures Ideathon Website" 
                    skills={["React"]}
                    year="2021"
                    subtitle={<>Designed and developed in collaboration with the Penn Climate Ventures team for the Ideathon event. 
                        <br/>
                        View the completed website <a target="_blank" href="https://ideathon.pennclimateventures.org/" >
                        here</a>.</>}
                    modalImgs={[home, schedule, faq]}/>
                <Card
                    image={imageEditor}
                    title="Collaborative Image Editor" 
                    skills={["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]}
                    year="2022"
                    link="https://github.com/nicole-chau/collaborative-image-editor/tree/master"
                    subtitle="Upload and edit images in collaboration with other users."
                    modalImgs={[logIn, images, upload, edit, shared]}
                    description="This is a simple web-based image editor that allows users to upload, edit and share images with other users.
                    Any shared images can be edited by any of the collaboraters, and changes will be updated for all collaboraters.
                    Users can adjust the brightness, contrast or saturation of an image, or apply a grayscale, sepia or inverted filter. 
                    Jimp was used to support the image editing functions."
                    descriptionFirst={true}/>
                <Card
                    image={snowflakeCard}
                    title="Snowflake Generator" 
                    skills={["Python"]}
                    year="2021"
                    link="https://github.com/nicole-chau/snowflake-generator"
                    description={
                        <>
                            <video width="1800" controls class="mb-8">
                                <source src={snowflakeVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <p>
                            This is a flask web app that procedurally generates a snowflake design using a L-system.
                            <br/><br/>
                            The L-system grammar used in this project consists of the following:
                            <ul>
                                <li>Axiom (initial configuration)
                                    <ul><li>Default: 'FX'</li></ul>
                                </li>
                                <li>Symbols that correspond to rendering/drawing instructions:
                                    <ul>
                                        <li>'F', 'X' : go forward</li>
                                        <li>'-' : rotate right</li>
                                        <li>'+' : rotate left</li>
                                        <li>'[' : save current state (position and orientation)</li>
                                        <li>']' : restore previous state (position and orientation)</li>
                                        <li>'&lt;' : halve draw distance</li>
                                        <li>'&gt;' : double draw distance</li>
                                    </ul>
                                </li>
                                <li>Grammar: rules determining what symbols should appear based on different contexts (i.e. given a single symbol (precondition), replace it with a set of symbols (post condition)
                                    <ul><li>'X' → '&lt;F[+FX][-FX]FFFF[+FX][-FX]FXF&gt;'</li></ul>
                                </li>
                            </ul>
                            <br/>
                            The drawing is created using the turtle module. The turtle's movements are defined by the generated L-system.
                            </p>
                        </>
                    }/>
            </div>
            <Footer />
        </div>
    )
}

export default WebDev;