import React from "react";
import { Helmet } from "react-helmet";
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
import shaderCards from "../../images/computer-graphics/card-opengl-shaders.png"
import shaderVideo from "../../images/computer-graphics/opengl-shaders.mp4"

import { VolumeRendererBody } from "./volume-renderer.js";
import { PathTracerBody } from "./path-tracer.js";
import { GPUPathTracerBody } from "./gpu-path-tracer.js";
import { FaceSwapBody } from "./face-swap";
import { BeatTheIllusionBody } from "./beat-the-illusion";
import { MeshEditorBody } from "./mesh-editor";
import { PBRShadersBody } from "./physically-based-shaders";

const ComputerGraphics = () => {
    return (
        <div>
            <Helmet>
                <title>Nicole Chau - Computer Graphics</title>
                <meta name="description" content="Nicole Chau Portfolio - Computer Graphics" />
            </Helmet>

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
                    title="Physically-Based Shaders" 
                    // page="/computer-graphics/physically-based-shaders"
                    skills={["OpenGL", "Qt"]}
                    year="2022"
                    video="https://player.vimeo.com/video/845628830"
                    description={<PBRShadersBody/>}
                    />
                <Card 
                    image={shaderCards}
                    title="OpenGL Shaders" 
                    skills={["OpenGL", "Qt"]}
                    year="2021"
                    description={<>
                        <video width="1800" controls class="mb-8">
                            <source src={shaderVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p>
                            Implementation of various surface shaders and post-process shaders in OpenGL. 
                            <br/><br/>
                            <ul>
                                <li>Surface shaders
                                    <ul>
                                        <li>Lambert</li>
                                        <li>Blinn-Phong</li>
                                        <li>Matcap</li>
                                        <li>Color gradient</li>
                                        <li>Vertex deformation</li>
                                    </ul>
                                </li>
                                <li>Post-process shaders
                                    <ul>
                                        <li>Grayscale</li>
                                        <li>Gaussian blur</li>
                                        <li>Sobel</li>
                                        <li>Bloom</li>
                                        <li>Worley noise</li>
                                    </ul>
                                </li>
                            </ul>
                        </p>
                    </>}
                    />
            </div>

            <Footer />
        </div>
    )
}

export default ComputerGraphics;