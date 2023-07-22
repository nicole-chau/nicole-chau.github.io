import React from "react";
import { Helmet } from "react-helmet";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import volumeRenderer from "../images/computer-graphics/volume-renderer.png";
import pathTracer from "../images/computer-graphics/path-tracer.png";
import faceSwap from "../images/computer-graphics/face-swap.png";
import meshEditor from "../images/computer-graphics/mesh-editor.png";
import gpuPathTracer from "../images/computer-graphics/gpu-path-tracer.png";
import beatTheIllusion from "../images/computer-graphics/beat-the-illusion.png";
import beatTheIllusionVideo from "../images/computer-graphics/beat-the-illusion.mp4";
import pbrShaders from "../images/computer-graphics/pbr-shaders.png";
import shaderCards from "../images/computer-graphics/card-opengl-shaders.png";
import shaderVideo from "../images/computer-graphics/opengl-shaders.mp4";

import VolumeRenderer from "../components/VolumeRenderer";
import PathTracer from "../components/PathTracer";
import GPUPathTracer from "../components/GPUPathTracer";
import FaceSwap from "../components/FaceSwap";

const ComputerGraphics = () => {
    return (
        <div>
            <Helmet>
                <title>Nicole Chau - Computer Graphics</title>
                <meta name="description" content="Nicole Chau Portfolio - Computer Graphics" />
            </Helmet>

            <Navbar/>
            <h1 class="px-12 pt-16 md:px-48">computer graphics</h1>
            <div class="flex flex-wrap justify-items-start justify-center mx-8">
                <Card
                    image={volumeRenderer}
                    title="Volume Renderer for Medical Imaging" 
                    skills={["C++", "Qt"]}
                    year="2023"
                    link="https://github.com/nicole-chau/volume-renderer"
                    video="https://player.vimeo.com/video/844289996"
                    description={<VolumeRenderer/>}
                    />
                <Card
                    image={pathTracer}
                    title="Monte Carlo Path Tracer" 
                    skills={["C++", "Qt"]}
                    year="2022"
                    description={<PathTracer/>}/>
                <Card 
                    image={gpuPathTracer}
                    title="GPU-based Path Tracer" 
                    skills={["OpenGL", "Qt"]}
                    year="2022"
                    video="https://player.vimeo.com/video/844805583"
                    description={<GPUPathTracer/>}/>
                <Card 
                    image={faceSwap}
                    title="Face Swapping in Videos" 
                    skills={["Python"]}
                    year="2022"
                    link="https://drive.google.com/file/d/1u_r8S4tTZFnA1SFUXDFhdajp_tIJeyeh/view?usp=sharing"
                    video="https://player.vimeo.com/video/844683590"
                    description={<FaceSwap/>}/>
                <Card 
                    image={beatTheIllusion}
                    title="'Beat the Illusion' Game" 
                    skills={["Unreal", "C++"]}
                    year="2022"
                    description={
                    <>
                        <video width="1800" controls class="mb-8">
                            <source src={beatTheIllusionVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        Beat the Illusion is a puzzle game that challenges perception through optical illusions based on
                        the shape and color of 3D geometry. Combining elements of problem-solving and memory, the player must try to “beat the illusion”
                        and manipulate the game environment to determine which shapes are identical in actuality.
                        <br/><br/>
                        There are three types of shapes in the game - rectangular prisms, cylinders and cones - which can be 
                        either red, green or blue. The main goal of the 
                        game is match as many shapes together as possible before losing all lives. Lives are lost when a falling shape 
                        is incorrectly or not matched. The challenge of the game is created through the illusion of different 3D shapes
                        appearing as the same 2D shape from different angles. Players must switch the camera angle during the game
                        to correctly identify the 3D shape. Additionally, colored lights that shine on the shapes will make the 
                        shapes' original colors appear different. 
                        <br/><br/>
                        This game was created with one other collaborater as part of a Game Design course. 
                    </>}
                    />
                <Card 
                    image={meshEditor}
                    title="Mini 3D Mesh Editor" 
                    skills={["C++", "Qt"]}
                    year="2021"
                    video="https://player.vimeo.com/video/644563239"
                    description={
                        <div class="mt-6">
                            This is a mini 3D mesh editor implemented using C++ and Qt. A half-edge data structure is used to store the mesh data which includes 
                            vertices, half-edges and faces. Pointeres are also stored to relate the different mesh components and to allow for mesh traversal. 
                            Each edge is represented by two half-edges, one from each adjacent face. 
                
                            <br/> <br/>
                            Implemented features include: 
                            <ul>
                                <li>Mesh component editing</li>
                                <li>Catmull-Clark subdivision</li>
                                <li>OBJ and JSON file loading</li>
                                <li>Mesh deformation with linear blend skinning</li>
                                <li>Planarity testing (face is automatically triangulated once it becomes non planar as a result of editing vertices)</li>
                                <li>Sharp edges and vertices (select a checkbox next to any number of vertices/edges/faces in the GUI to tag it as a sharp vertex/edge/face when the mesh is smoothed
                                    ; after subdivision all vertices/edges/faces are reset to not being sharp)
                                </li>
                            </ul>
                        </div>}
                    />
                <Card 
                    image={pbrShaders}
                    title="Physically-Based Shaders" 
                    skills={["OpenGL", "Qt"]}
                    year="2022"
                    video="https://player.vimeo.com/video/845628830"
                    description={
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
                        </div>}
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