import React from "react";
import { Helmet } from 'react-helmet';
import Navbar from "../components/Navbar";
import HomeCard from "../components/home/HomeCard";
import Profile from "../components/home/Profile";
import Skills from "../components/home/Skills";

import computerGraphics from "../images/computer-graphics.png"
import webDev from "../images/web-dev.png"
import design from "../images/design.png"
import art from "../images/art.png"

const IndexPage = () => {
  return (
    <div class="min-h-screen bg-white-smoke">
      <Helmet>
        <title>Nicole Chau - Portfolio</title>
        <meta name="description" content="Nicole Chau Portfolio" />
        <link rel="stylesheet" href="https://use.typekit.net/xvs8jwx.css"/>      
      </Helmet>
      <Navbar page="/"/>

      <div class="grid auto-rows-min lg:grid-cols-3">
        <Profile />

        <div class="row-span-2 lg:col-span-2 flex flex-col justify-start px-12 lg:px-20 pb-10 pt-4 lg:pt-20 2xl:px-40">
          <div class="mb-4 2xl:mb-24">
            <h1 class="mb-4 2xl:mb-8">
              My Work
            </h1>

            <div class="flex flex-wrap justify-items-start justify-center gap-8">
              <HomeCard
                color="bg-card-blue"
                image={computerGraphics}
                title="Computer Graphics"
                page="/computer-graphics" />
              <HomeCard
                color="bg-card-tan"
                image={webDev}
                title="Web Dev"
                page="/web-dev" />
              <HomeCard
                color="bg-card-pink"
                image={design}
                title="Design"
                page="/design" />
              <HomeCard
                color="bg-card-tan"
                image={art}
                title="Art"
                page="/art"
                description="2D Animation, 3D Modeling, Digital Illustrations" />
            </div>
          </div>

          <Skills />
        </div>
      </div>
    </div>
  )
}

export default IndexPage;