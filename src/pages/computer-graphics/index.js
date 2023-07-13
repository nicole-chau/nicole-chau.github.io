import React from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import volumeRenderer from "../../images/computer-graphics/volume-renderer.png"
import pathTracer from "../../images/computer-graphics/path-tracer.png"
import faceSwap from "../../images/computer-graphics/face-swap.png"
import meshEditor from "../../images/computer-graphics/mesh-editor.png"
import gpuPathTracer from "../../images/computer-graphics/gpu-path-tracer.png"
import beatTheIllusion from "../../images/computer-graphics/beat-the-illusion.png"


const ComputerGraphics = () => {
    return (
        <div>
            <Navbar/>
            <h1 class="pt-16 px-36">computer graphics</h1>
            <div class="flex flex-wrap justify-items-start justify-center">
                <Card
                    title="Volume Renderer for Medical Imaging" 
                    image={volumeRenderer}
                    page="/computer-graphics/volume-renderer"/>
                <Card
                    title="Monte Carlo Path Tracer" 
                    image={pathTracer}
                    page="/computer-graphics/path-tracer"/>
                <Card 
                    title="GPU-based Path Tracer" 
                    image={gpuPathTracer}
                    page="/computer-graphics/gpu-path-tracer"/>
                <Card 
                    title="Face Swapping in Videos" 
                    image={faceSwap}
                    page="/computer-graphics/face-swap"/>
                <Card 
                    title="'Beat the Illusion' Game" 
                    image={beatTheIllusion}
                    page="/computer-graphics/beat-the-illusion"/>
                <Card 
                    title="Mini 3D Mesh Editor" 
                    image={meshEditor}
                    page="/computer-graphics/mesh-editor"/>
            </div>

            <Footer />
        </div>
    )
}

export default ComputerGraphics;