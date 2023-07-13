import React from "react";
import Card from "../../components/Card";
import volumeRenderer from "../../images/computer-graphics/volume-renderer-rgb.png"
import pathTracer from "../../images/computer-graphics/path-tracer1.png"
import faceSwap from "../../images/computer-graphics/face-swap.gif"
import meshEditor from "../../images/computer-graphics/mesh-editor.gif"
import gpuPathTracer from "../../images/computer-graphics/gpu-path-tracer.gif"


const ComputerGraphics = () => {
    return (
        <div class="p-16">
            <h1>computer graphics</h1>
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
                    title="Face Swapping in Videos" 
                    image={faceSwap}
                    page="/computer-graphics/face-swap"/>
                <Card 
                    title="Mini 3D Mesh Editor" 
                    image={meshEditor}
                    page="/computer-graphics/mesh-editor"/>
                <Card 
                    title="GPU-based Path Tracer" 
                    image={gpuPathTracer}
                    page="/computer-graphics/gpu-path-tracer"/>
            </div>
        </div>
    )
}

export default ComputerGraphics;