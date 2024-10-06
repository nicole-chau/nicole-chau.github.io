import React from "react";
import { Helmet } from 'react-helmet';
import Navbar from "../components/Navbar";
import HomeCard from "../components/HomeCard";
import Profile from "../components/home/Profile";
import Skills from "../components/home/Skills";

import computerGraphics from "../images/computer-graphics.png"
import webDev from "../images/web-dev.png"
import design from "../images/design.png"
import art from "../images/art.png"

const IndexPage = () => {
  return (
    <div class="h-min-screen bg-white-smoke">
      <Helmet>
        <title>Nicole Chau - Portfolio</title>
        <meta name="description" content="Nicole Chau Portfolio" />
      </Helmet>

      <Navbar />

      <div class="grid auto-rows-min lg:grid-cols-3">
        <Profile />

        <div class="row-span-2 lg:col-span-2 flex flex-col justify-evenly px-12 lg:px-28 pb-10 pt-8 lg:pt-32">
          <div>
            <h2 class="mb-4">
              check out some of my work in...
            </h2>

            <div class="flex flex-wrap justify-items-start justify-center gap-4">
              <HomeCard
                color="bg-card-blue"
                image={computerGraphics}
                title="computer graphics"
                page="/computer-graphics" />
              <HomeCard
                color="bg-card-tan"
                image={webDev}
                title="web dev"
                page="/web-dev" />
              <HomeCard
                color="bg-card-pink"
                image={design}
                title="design"
                page="/design" />
              <HomeCard
                color="bg-card-tan"
                image={art}
                title="art"
                page="/art"
                description="2D animation, 3D modeling, digital illustrations" />
              {/* <HomeCard
                color="bg-card-pink"
                image={modeling}
                title="3D Modeling"
                page="/art#modeling" />
              <HomeCard
                color="bg-card-blue"
                image={illustrations}
                title="Digital Illustrations"
                page="/art#illustrations" /> */}
              {/* <HomeCard
              image={traditional}
              title="Traditional Art" 
  page="/art#traditional"/> */}
            </div>
          </div>

          <Skills />
        </div>
      </div>
    </div>
  )
}

export default IndexPage;