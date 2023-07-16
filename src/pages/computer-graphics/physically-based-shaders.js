import React from "react";
import Navbar from "../../components/Navbar";
import Tag from "../../components/Tag";

const PBRShaders = () => {
    const skills = ["OpenGL", "Qt"];
    
    return (
        <div>
            <Navbar/>

            <div class="py-20 px-80">
                <div class="float-left inline">
                    <h1>Physically-Based Shaders</h1>
                    <div class="mb-3 -mt-10">
                        {skills.map(skill => (<Tag tag={skill}/>))}
                    </div>
                </div>

                <div class="float-right inline mt-3">
                    <p class="text-right">Created in 2022</p>
                </div>

                <div class="relative pb-[50%] mt-[100px]">
                    <iframe src="https://player.vimeo.com/video/845628830" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen class="absolute top-0 left-0 w-full h-full" title="Volume Renderer for Medical Imaging"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>       
                </div>
        </div>
    )
}

export default PBRShaders;