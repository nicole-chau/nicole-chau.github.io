import React from "react";
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

import imageEditor from "../images/web-dev/collaborative-image-editor.png";
import logIn from "../images/web-dev/cie-log-in.png";
import images from "../images/web-dev/cie-my-images.png";
import upload from "../images/web-dev/cie-upload.png";
import edit from "../images/web-dev/cie-edit.png";
import shared from "../images/web-dev/cie-shared.png";

const WebDev = () => {
    return (
        <div>
            <Navbar/>
            <h1 class="pt-16 px-48">web dev</h1>
            <div class="flex flex-wrap justify-items-start justify-center">
                <Card
                    image={minder}
                    title="Tinder for Movies" 
                    skills={["React", "Node.js", "Express", "MySQL"]}
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
                    subtitle="Designed and developed in collaboration with the Penn Climate Ventures team for the Ideathon event."
                    modalImgs={[]}/>
                <Card
                    image={imageEditor}
                    title="Collaborative Image Editor" 
                    skills={["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]}
                    subtitle="Upload and edit images in collaboration with other users."
                    modalImgs={[logIn, images, upload, edit, shared]}
                    description=""
                    descriptionFirst={true}/>
            </div>
            <Footer />
        </div>
    )
}

export default WebDev;