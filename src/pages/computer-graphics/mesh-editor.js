import React from "react";
import Tag from "../../components/Tag";

const MeshEditor = () => {
    const skills = ["C++", "Qt"];

    return (
        <div class="py-16 px-80">
            <h1 class="float-left">Mini 3D Mesh Editor</h1>

            <div class="float-right">
                <p class="text-right">Created in 2021</p>

                {/* <a 
                    href="https://drive.google.com/file/d/1u_r8S4tTZFnA1SFUXDFhdajp_tIJeyeh/view?usp=sharing" 
                    class="bg-powder-blue text-white px-2.5 py-1 my-1.5 inline-block rounded-md hover:bg-slate-gray hover:text-white">
                        View code
                </a> */}
            </div>

            <div class="relative pb-[50%] mt-[80px] clear-both">
                <iframe src="https://player.vimeo.com/video/644563239" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen class="absolute top-0 left-0 w-full h-full" title="Volume Renderer for Medical Imaging"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                

            <div class="mb-3 mt-3">
                {skills.map(skill => (<Tag tag={skill}/>))}
            </div>

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
        </div>
    )
}

export default MeshEditor;