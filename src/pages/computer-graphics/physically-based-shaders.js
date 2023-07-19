import React from "react";
import Navbar from "../../components/Navbar";
import Tag from "../../components/Tag";

const PBRShadersBody = () => {
    return (
        <div class="mt-6">
            This is an implementation of a physically-based shader in OpenGL and Qt completed as a project
            for an Advanced Rendering course. This includes implementing
            the Cook-Torrance BRDF, Lambertian BRDF, diffuse irradiance and glossy irradiance. 
            <br/> <br/>
            References:
            <ul>
                <li>
                    <a href="https://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes_v2.pdf">Real Shading in Unreal Engine 4</a>
                </li>
                <li>
                    <a href="https://learnopengl.com/PBR/IBL/Diffuse-irradiance">Learn OpenGL: Diffuse Irradiance</a>
                </li>
                <li>
                    <a href="https://learnopengl.com/PBR/IBL/Specular-IBL">Learn OpenGL: Specular IBL</a>
                </li>
            </ul>

        </div>
    )
}

export { PBRShadersBody };

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