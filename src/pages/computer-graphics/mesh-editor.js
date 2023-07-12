import React from "react";
import Tag from "../../components/Tag";

const MeshEditor = () => {
    const skills = ["C++", "Qt"];

    return (
        <div class="py-16 px-80">
            <h1 class="float-left">Mini 3D Mesh Editor</h1>

            <div class="float-right">
                <p class="text-right">Created in </p>

                {/* <a 
                    href="https://drive.google.com/file/d/1u_r8S4tTZFnA1SFUXDFhdajp_tIJeyeh/view?usp=sharing" 
                    class="bg-powder-blue text-white px-2.5 py-1 my-1.5 inline-block rounded-md hover:bg-slate-gray hover:text-white">
                        View code
                </a> */}
            </div>

            <div class="relative pb-[50%] mt-[80px] clear-both">
                <iframe src="https://player.vimeo.com/video/644563239" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen class="absolute top-0 left-0 w-full h-full" title="Volume Renderer for Medical Imaging"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                

            <div class="mb-3">
                {skills.map(skill => (<Tag tag={skill}/>))}
            </div>

        </div>
    )
}

export default MeshEditor;