import React from "react";

const GPUPathTracer = () => {
    return (
        <div class="mt-6">
            This is a GPU-based path tracer created using OpenGL and Qt. It implements the same concepts in the
            Monte Carlo Path Tracer but allows for real time rendering. 
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