import React from "react";
import Tag from "../../components/Tag";


const GPUPathTracer = () => {
    const skills = ["OpenGL", "Qt"];

    return (
        <div class="py-16 px-80">
            <h1 class="float-left">GPU-based Path Tracer</h1>

            <div class="float-right mb-5">
                <p class="text-right">Created in 2022</p>
            </div>

            <div class="relative pb-[50%] mt-[80px]">
                <iframe src="https://player.vimeo.com/video/844805583" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen class="absolute top-0 left-0 w-full h-full" title="Volume Renderer for Medical Imaging"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

            <div class="my-3">
                {skills.map(skill => (<Tag tag={skill}/>))}
            </div>

            This is a GPU-based path tracer created using OpenGL and Qt. It implements the same concepts in the
            <a href="/computer-graphics/path-tracer"> Monte Carlo Path Tracer</a> but allows for real time rendering. 
            

            <br/> <br/>
            Features supported by the path tracer include:

            <ul>
                <li>Materials
                    <ul>
                        <li>Lambertian materials</li>
                        <li>Microfacet materials (e.g. rough mirrors)</li>
                        <li>Specular materials (e.g. glass, smooth mirrors)</li>
                    </ul>
                </li>
                <li>Lights
                    <ul>
                        <li>Area lights</li>
                        <li>Environment lighting</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default GPUPathTracer;