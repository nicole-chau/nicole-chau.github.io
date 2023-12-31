import React from "react";
import { Helmet } from 'react-helmet';
import Navbar from "../components/Navbar";
import Tag from "../components/Tag";
import profile from "../images/profile.png"
import HomeCard from "../components/HomeCard";

import computerGraphics from "../images/computer-graphics.png"
import webDev from "../images/web-dev.png"
import design from "../images/design.png"
import animation from "../images/animation.png"
import modeling from "../images/3d-modeling.png"
import illustrations from "../images/illustrations.png"
import traditional from "../images/traditional.png"

const svgStyle = "scale-75 mx-1 tablet-sm:scale-[0.8] md:scale-100 md:mx-2 inline-block hover:scale-110 ease-in-out duration-200";

const technicalSkills = ["C++", "C", "OpenGL/GLSL", "Qt","Python", "Javascript", "HTML", "CSS", "Java", "React", "git",
                         "MySQL", "noSQL", "OCaml", "MongoDB", "Node.js", "Express", "Jest"];

const creativeSkills = ["Adobe Creative Suite", "Autodesk Maya", "Blender", "Unity", "Unreal", "Houdini", "ZBrush", "Figma", "Toon Boom Harmony"]

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <title>Nicole Chau - Portfolio</title>
        <meta name="description" content="Nicole Chau Portfolio" />
      </Helmet>

      <Navbar/>
      <div class="bg-cover bg-no-repeat h-[66vh] bg-bottom sm:h-[45vh] md:w-[450px] md:h-[100vh] md:bg-right bg-[url('../images/home-mobile.png')] sm:bg-[url('../images/home-tablet.png')] md:bg-[url('../images/home.png')] overflow-hidden">

        <div class="pt-8 px-2 tablet-sm:px-28 min-[486px]:px-20 min-[436px]:px-16 sm:px-12 md:float-left md:absolute md:top-[16%] md:pl-20">
          <div class="sm:float-left mr-4 md:mr-0 md:clear-both">
            <h1 class="text-lg text-center tablet-sm:text-xl mb-4 md:mb-10 md:text-3xl text-white mx-auto">hey, i'm nicole!</h1>
            <img src={profile} alt="profile" class="min-w-[7rem] w-28 m-auto rounded-full md:w-40 block" />
          </div>

          <div class="mt-3 sm:mt-1 sm:float-right md:clear-both">
            <div class="m-auto block flex flex-col items-center ">
              <div>
                <svg class="inline-block mr-1 sm:mr-2 -mt-1 md:-ml-4 scale-75 sm:scale-100" width="24" height="24" viewBox="0 0 474 379" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FFFFFF" d="M1.05 182.4C2.71 182.36 4.37 182.28 6.04 182.28C159.65 182.28 313.26 182.28 466.87 182.28C471.137 182.28 473.27 184.477 473.27 188.87C473.27 245.62 473.16 302.37 473.36 359.12C473.4 370.83 466.8 378.43 454.39 378.41C308.94 378.12 163.48 378.17 18.03 378.37C10.37 378.38 4.79 376.35 1.31 369.54C0.609996 368.17 0.249996 366.46 0.249996 364.91C0.219996 304.33 0.249996 243.76 0.269996 183.18C0.529996 182.92 0.799996 182.66 1.06 182.39L1.05 182.4Z"/>
                  <path fill="#FFFFFF" d="M128.71 67.9701C128.71 50.5001 129.07 33.6901 128.59 16.9101C128.24 5.01006 135.15 -0.0199406 145.73 5.93918e-05C206.15 0.120059 266.57 0.0500594 326.99 0.0600594C339.01 0.0600594 344.68 5.77006 344.69 17.8101C344.69 34.2801 344.69 50.7501 344.69 67.9601H350.17C385.29 67.9601 420.41 68.0901 455.53 67.8801C466.24 67.8201 473.28 73.8401 473.27 85.6501C473.25 107.78 473.27 129.91 473.27 152.44H0.129993C0.129993 150.56 0.129993 148.78 0.129993 146.99C0.129993 125.69 0.369993 104.38 -7.00308e-06 83.0801C-0.130007 75.7801 5.87999 67.7201 14.79 67.9301C20.45 68.0601 26.11 67.9501 31.77 67.9501C62.06 67.9501 92.35 67.9501 122.65 67.9501H128.71V67.9701ZM158.31 67.9701C209.58 67.9701 260.31 67.9701 311.05 67.9701C311.55 67.9701 312.21 68.1701 312.52 67.9301C313.51 67.1401 315.14 66.2001 315.16 65.2901C315.34 53.5301 315.28 41.7601 315.28 29.9001H158.32V67.9601L158.31 67.9701Z"/>
                  <path fill="#FFFFFF" d="M1.05001 182.4C0.79001 182.66 0.52001 182.92 0.26001 183.19C0.52001 182.93 0.79001 182.67 1.05001 182.4Z"/>
                </svg>

                <p class="text-xs tablet-sm:text-sm md:text-base font-bold text-center text-white mt-2 md:mt-6 inline-block">Software Developer</p>
              </div>

              <div>
                <svg width="26" height="26" class="inline-block -ml-4 sm:-ml-7 mr-1 scale-75 sm:scale-100" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 425.7 330.17">
                  <path fill="#FFFFFF" d="m425.7,75.57c-11.43,4.08-21.84,7.8-32.62,11.65v5.71c0,42.33.01,84.66-.03,126.99,0,2.92.52,4.8,3.28,6.88,12.66,9.57,14.59,26.88,2.53,40.07,8.79,7.49,8.08,18.19,9.2,28.28,1.28,11.52,2.41,23.07,3.64,35.02h-61.61c.34-3.17.72-6.47,1.06-9.77,1.38-13.35,2.27-26.77,4.38-40,.8-5.04,4.42-9.62,6.88-14.67-10.16-10.77-9.9-24.08-.04-36.58.21-.26.4-.63.68-.72,7.28-2.37,6.34-8.28,6.32-14.05-.09-37.66-.04-75.33-.04-112.99v-5.92c-15.29,5.53-29.87,10.93-44.55,16.07-26.24,9.19-52.55,18.19-78.81,27.32-8.35,2.9-16.73,5.74-24.92,9.05-5.14,2.08-9.64,1.99-14.95.03-17.34-6.41-34.96-12.06-52.4-18.19-42.16-14.82-84.28-29.75-126.42-44.62-8.74-3.09-17.51-6.11-27.28-9.51,17.97-6.41,34.83-12.4,51.68-18.42,30.42-10.88,60.83-21.79,91.25-32.67,22.26-7.96,44.5-15.97,66.82-23.77,2.29-.8,5.29-1.06,7.52-.29,20.03,6.95,39.99,14.14,59.92,21.36,30.66,11.11,61.27,22.35,91.93,33.47,18.44,6.69,36.93,13.24,56.57,20.27Z"/>
                  <path fill="#FFFFFF" d="m85.51,131.1c7.42,2.39,14.18,4.42,20.84,6.76,18.5,6.5,36.93,13.18,55.42,19.7,16.53,5.82,33.09,11.55,49.66,17.24,1.25.43,2.85.72,4.02.31,16.39-5.69,32.75-11.5,49.09-17.32,23.91-8.52,47.79-17.09,71.7-25.6,1.05-.37,2.25-.34,3.93-.57-.35,6.12-.54,11.99-1.06,17.83-.44,4.86-1.5,9.66-1.89,14.52-1.1,13.59-1.91,27.2-3,40.79-.88,11.11-1.52,22.27-3.16,33.27-1.14,7.68-7.43,12.1-13.72,15.58-14.68,8.13-30.71,12.19-47.11,15.27-24.54,4.6-49.32,5.65-74.12,4.69-13.81-.54-27.55-3-41.29-4.85-14.95-2.01-29.3-6.33-42.73-13.15-7.54-3.83-14.88-8.56-17.03-17.74-.89-3.78-1.21-7.72-1.53-11.6-.76-9.32-1.23-18.67-2.07-27.98-1.19-13.2-2.66-26.38-3.91-39.58-.48-5.07-.69-10.16-1.05-15.24-.28-3.86-.62-7.71-.99-12.33Z"/>
                </svg>

                <p class="text-xs tablet-sm:text-sm md:text-base font-bold text-center text-white mt-3 inline-block">University of Pennsylvania</p>
              </div>
              
              <p class="text-xs tablet-sm:text-sm text-center text-white ">
                <a class="text-white hover:text-[#686868]" href="http://cg.cis.upenn.edu/dmd.html">BSE in Digital Media Design </a>
                <br/> 
                <a class="text-white hover:text-[#686868]" href="https://www.cis.upenn.edu/graduate/program-offerings/mse-in-computer-graphics-and-game-technology/">MSE in Computer Graphics <br/> and Game Technology</a></p>

              <div class="mt-6 m-auto flex justify-center md:my-24">
                <a href="mailto:nicolechau524@gmail.com" target="_blank" rel="noreferrer">
                  <svg class={svgStyle} width="30" height="30" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 383.23 269.46">
                    <path fill="#FFFFFF" d="m383.23,241.78c-1.24,2.65-2.48,5.3-3.58,7.66-38.36-38.35-76.7-76.7-114.92-114.92,37.97-37.92,76.31-76.2,114.89-114.71,1.13,2.69,2.38,5.67,3.62,8.64v213.33Z"/>
                    <path fill="#FFFFFF" d="m18.69,2.52C24.63,1.6,29.72.11,34.81.1c103.89-.14,207.78-.14,311.67,0,5.48,0,10.96,1.42,16.44,2.17.19.53.37,1.06.56,1.58-1.29.97-2.71,1.8-3.84,2.92-23.22,23.17-46.44,46.33-69.58,69.59-29.44,29.59-58.91,59.15-88.12,88.97-5.84,5.96-15.61,5.89-21.4.04C127.4,111.69,74.04,58.21,20.74,4.67c-.35-.35-.68-.71-2.05-2.15Z"/>
                    <path fill="#FFFFFF" d="m19.01,266.86c38.98-39.03,77.22-77.31,115.68-115.81.76.68,1.6,1.35,2.36,2.11,10.15,10.13,20.23,20.34,30.45,30.4,6.51,6.41,14.67,9.61,23.63,9.42,9.45-.2,18.03-3.39,24.91-10.4,9.79-9.97,19.78-19.73,29.56-29.7,1.98-2.02,3.17-1.91,5.09.04,10.04,10.24,20.23,20.33,30.34,30.51,26.95,27.15,53.88,54.32,80.82,81.48.34.35.67.72,1.73,1.86-4.45.98-8.32,2.57-12.19,2.58-106.88.14-213.77.14-320.65,0-3.72,0-7.44-1.55-11.72-2.5Z"/>
                    <path fill="#FFFFFF" d="m2.96,251.3c-1.16-5.03-2.83-8.94-2.84-12.85C-.04,169.35-.04,100.24.11,31.14c0-3.94,1.59-7.87,2.45-11.81.42-.09.85-.17,1.27-.26,38.11,38.48,76.22,76.95,114.57,115.66C80.28,173.23,42.1,211.77,2.96,251.3Z"/>
                  </svg>
                </a>

                <a href="https://github.com/nicole-chau" target="_blank" rel="noreferrer">
                  <svg class={svgStyle} width="30" height="30" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217C0 70.973 13.993 89.389 33.405 95.907C35.832 96.397 36.721 94.848 36.721 93.545C36.721 92.404 36.641 88.493 36.641 84.418C23.051 87.352 20.221 78.551 20.221 78.551C18.037 72.847 14.801 71.381 14.801 71.381C10.353 68.366 15.125 68.366 15.125 68.366C20.059 68.692 22.648 73.418 22.648 73.418C27.015 80.914 34.052 78.796 36.883 77.492C37.287 74.314 38.582 72.114 39.957 70.892C29.118 69.751 17.714 65.514 17.714 46.609C17.714 41.231 19.654 36.831 22.728 33.409C22.243 32.187 20.544 27.134 23.214 20.371C23.214 20.371 27.339 19.067 36.64 25.423C40.6221 24.3457 44.7288 23.7976 48.854 23.793C52.979 23.793 57.184 24.364 61.067 25.423C70.369 19.067 74.494 20.371 74.494 20.371C77.164 27.134 75.464 32.187 74.979 33.409C78.134 36.831 79.994 41.231 79.994 46.609C79.994 65.514 68.59 69.669 57.67 70.892C59.45 72.44 60.986 75.373 60.986 80.018C60.986 86.618 60.906 91.915 60.906 93.544C60.906 94.848 61.796 96.397 64.222 95.908C83.634 89.388 97.627 70.973 97.627 49.217C97.707 22 75.788 0 48.854 0Z" fill="#FFFFFF"/>
                  </svg>
                </a>

                <a href="https://www.linkedin.com/in/nicole-chau/" target="_blank" rel="noreferrer">
                  <svg class={svgStyle} width="30" height="30" viewBox="0 0 409 409" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-9.76585e-06 375.15V33.52C0.62999 33.39 0.71999 32.92 0.83999 32.38C3.49999 21.2 9.27999 12.38 19.32 6.25C24.08 3.35 29.23 1.87 34.31 0H373.49C373.62 0.64 374.11 0.68 374.65 0.78C383.6 2.4 391.17 6.76 397.36 13.23C405.48 21.72 408.59 32.28 408.59 43.83C408.61 150.88 408.61 257.93 408.55 364.98C408.55 368.88 408.24 372.88 407.34 376.65C405.12 385.98 400.2 393.65 392.55 399.65C385.73 404.99 378.19 408.58 369.56 408.59C259.87 408.69 150.18 408.66 40.48 408.65C26.15 408.65 15.3 402.18 7.00999 390.75C3.54999 385.99 2.16999 380.41 -0.0100098 375.14L-9.76585e-06 375.15ZM224.78 187.63C224.78 180.2 224.63 173.83 224.85 167.48C224.95 164.48 224.3 163.42 221 163.46C203.05 163.64 185.09 163.62 167.14 163.47C164.18 163.45 163.44 164.13 163.44 167.14C163.54 226.07 163.54 284.99 163.44 343.92C163.44 346.75 164.17 347.4 166.94 347.38C184.89 347.25 202.85 347.22 220.8 347.4C224.21 347.43 224.86 346.41 224.85 343.18C224.72 309.39 224.83 275.61 224.73 241.82C224.7 233.86 226.4 226.67 231.4 220.28C238.97 210.61 250.55 207.17 262.1 209.87C277.22 213.4 286.03 226.35 286 242.13C285.94 275.92 286.03 309.7 285.9 343.49C285.89 346.69 286.79 347.41 289.87 347.38C307.82 347.23 325.78 347.21 343.73 347.4C346.91 347.43 347.32 346.4 347.31 343.61C347.19 324.59 347.46 305.56 347.19 286.55C346.9 265.59 348.19 244.62 346.44 223.67C345.78 215.77 343.78 208.34 340.4 201.34C331.83 183.59 318.25 171.05 299.84 163.99C289.84 160.16 279.18 158.07 268.72 159.97C251.07 163.18 235.96 171.44 224.78 187.64V187.63ZM61.36 255.46C61.36 284.71 61.41 313.95 61.29 343.2C61.28 346.34 61.77 347.44 65.27 347.4C83.08 347.19 100.89 347.24 118.7 347.37C121.7 347.39 122.71 346.8 122.71 343.52C122.6 284.76 122.61 226 122.69 167.24C122.69 164.34 122.11 163.43 119.02 163.46C101.08 163.62 83.13 163.62 65.19 163.46C62.12 163.43 61.27 164.15 61.28 167.32C61.41 196.7 61.36 226.08 61.36 255.46ZM91.31 55.87C70.71 54.5 56.03 72.9 54.97 89.59C53.65 110.49 71.62 129.75 92.64 128.66C112.06 127.65 128.36 112.59 128.37 91.97C128.37 73.01 113.62 54.94 91.3 55.87H91.31Z" fill="#FFFFFF"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="top-[29rem] sm:top-[21rem] mx-8 md:pr-4 pb-10 md:left-[500px] md:top-[12%] absolute md:overflow-auto md:h-[80vh]">
        <p class="text-base md:text-xl mb-4 font-bold italic text-charcoal">
            check out some of my work in...
        </p>

        <div class="flex flex-wrap justify-items-start justify-center">
          <HomeCard
            image={computerGraphics}
            title="Computer Graphics" 
            page="/computer-graphics"/>
          <HomeCard
            image={webDev}
            title="Web Dev" 
            page="/web-dev"/>
          <HomeCard
            image={design}
            title="Design" 
            page="/design"/>
          <HomeCard
            image={animation}
            title="2D Animation" 
            page="/art#animation"/>
          <HomeCard
            image={modeling}
            title="3D Modeling" 
            page="/art#modeling"/>
          <HomeCard
            image={illustrations}
            title="Digital Illustrations" 
            page="/art#illustrations"/>
          <HomeCard
            image={traditional}
            title="Traditional Art" 
            page="/art#traditional"/>
        </div>

        <div class="lg:float-left lg:w-[45%] lg:mr-2">
          <p class="text-base md:text-xl mt-6 md:mt-10 mb-4 font-bold italic text-charcoal">
            technical skills
          </p>
          {technicalSkills.map(skill => (
              <Tag tag={skill}/>
          ))}
        </div>
        
        <div class="lg:float-right lg:w-[45%]">
          <p class="text-base md:text-xl mt-6 md:mt-10 mb-4 font-bold italic text-charcoal">
            creative skills
          </p>
          {creativeSkills.map(skill => (
              <Tag tag={skill}/>
          ))}
        </div>
    
      </div>
    </div>
  )
}

export default IndexPage