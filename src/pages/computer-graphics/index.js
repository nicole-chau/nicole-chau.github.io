import React from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import volumeRenderer from "../../images/computer-graphics/volume-renderer.png";
import pathTracer from "../../images/computer-graphics/path-tracer.png";
import faceSwap from "../../images/computer-graphics/face-swap.png";
import meshEditor from "../../images/computer-graphics/mesh-editor.png";
import gpuPathTracer from "../../images/computer-graphics/gpu-path-tracer.png";
import beatTheIllusion from "../../images/computer-graphics/beat-the-illusion.png";
import pbrShaders from "../../images/computer-graphics/pbr-shaders.png";

import { VolumeRendererBody } from "./volume-renderer.js";
import { PathTracerBody } from "./path-tracer.js";
import { GPUPathTracerBody } from "./gpu-path-tracer.js";
import { FaceSwapBody } from "./face-swap";
import { BeatTheIllusionBody } from "./beat-the-illusion";
import { MeshEditorBody } from "./mesh-editor";

const ComputerGraphics = () => {
    return (
        <div>
            <Navbar/>
            <h1 class="pt-16 px-48">computer graphics</h1>
            <div class="flex flex-wrap justify-items-start justify-center mx-8">
                <Card
                    image={volumeRenderer}
                    title="Volume Renderer for Medical Imaging" 
                    // page="/computer-graphics/volume-renderer"
                    skills={["C++", "Qt"]}
                    year="2023"
                    link="https://github.com/nicole-chau/volume-renderer"
                    video="https://player.vimeo.com/video/844289996"
                    description={<VolumeRendererBody/>}
                    />
                <Card
                    image={pathTracer}
                    title="Monte Carlo Path Tracer" 
                    // page="/computer-graphics/path-tracer"
                    skills={["C++", "Qt"]}
                    year="2022"
                    description={<PathTracerBody/>}/>
                <Card 
                    image={gpuPathTracer}
                    title="GPU-based Path Tracer" 
                    // page="/computer-graphics/gpu-path-tracer"
                    skills={["OpenGL", "Qt"]}
                    year="2022"
                    video="https://player.vimeo.com/video/844805583"
                    description={<GPUPathTracerBody/>}/>
                <Card 
                    image={faceSwap}
                    title="Face Swapping in Videos" 
                    // page="/computer-graphics/face-swap"
                    skills={["Python"]}
                    year="2022"
                    link="https://drive.google.com/file/d/1u_r8S4tTZFnA1SFUXDFhdajp_tIJeyeh/view?usp=sharing"
                    video="https://player.vimeo.com/video/844683590"
                    description={<FaceSwapBody/>}/>
                <Card 
                    image={beatTheIllusion}
                    title="'Beat the Illusion' Game" 
                    // page="/computer-graphics/beat-the-illusion"
                    skills={["Unreal", "C++"]}
                    year="2022"
                    description={<BeatTheIllusionBody/>}
                    />
                <Card 
                    image={meshEditor}
                    title="Mini 3D Mesh Editor" 
                    // page="/computer-graphics/mesh-editor"
                    skills={["C++", "Qt"]}
                    year="2021"
                    video="https://player.vimeo.com/video/644563239"
                    description={<MeshEditorBody/>}
                    />
                <Card 
                    image={pbrShaders}
                    title="Physically Based Shaders" 
                    // page="/computer-graphics/physically-based-shaders"
                    skills={["OpenGL", "Qt"]}
                    year="2022"
                    video="https://player.vimeo.com/video/845628830"
                    />
            </div>

            <Footer />
        </div>
    )
}

export default ComputerGraphics;