import React from "react";
import Tag from "../../components/Tag";
import custom1 from "../../images/computer-graphics/path-tracer1.png"


const PathTracer = () => {
    const skills = ["C++", "Qt"];

    return (
        <div class="py-16 px-80">
            <h1 class="float-left">Monte Carlo Path Tracer</h1>

            <div class="float-right mb-5">
                <p class="text-right">Created in 2022</p>
            </div>

            <figure class="inline-block w-full m-auto">
                <img src={custom1} alt="custom scene render 1" class="m-auto w-1/2 clear-both"/>
                <figcaption class="text-center my-2 italic">Custom scene rendered with full light integrator; 600 x 600 px, 400 samples/pixel, max 5 recursions</figcaption>
            </figure>

            <div class="mb-3">
                {skills.map(skill => (<Tag tag={skill}/>))}
            </div>

            This is a Monte Carlo path tracer implemented in C++ that renders images by computing both the direct and global
            illumination at each ray intersection. Multiple importance sampling is used to sample the direct lighting
            and russian roulette ray termination is implemented as well.
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
                        <li>Point lights</li>
                        <li>Spot lights</li>
                    </ul>
                </li>
                <li>Thin lens camera</li>
            </ul>
        </div>
    )
}

export default PathTracer;