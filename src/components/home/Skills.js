import React from "react";
import Tag from "../Tag";

const Skills = () => {
    const technicalSkills = ["C++/C#/C", "OpenGL/GLSL", "Qt", "Python", "Javascript", "HTML", "CSS", "Java", "React", "git",
        "MySQL", "noSQL", "OCaml", "MongoDB", "Node.js", "Express", "Jest", "Maya Embedded Language (MEL)"];

    const creativeSkills = ["Adobe Creative Suite", "Autodesk Maya", "Blender", "Unity", "Unreal", "Houdini", "ZBrush", "Figma", "Toon Boom Harmony"]

    return (
        <div class="grid grid-rows-2 gap-2 sm:grid-cols-2 sm:gap-4 mt-6">
            <div class="">
                <h2 class="sm:mb-4">
                    technical skills
                </h2>
                {technicalSkills.map(skill => (
                    <Tag tag={skill} />
                ))}
            </div>

            <div class="">
                <h2 class="sm:mb-4">
                    creative skills
                </h2>
                {creativeSkills.map(skill => (
                    <Tag tag={skill} />
                ))}
            </div>
        </div>
    )
}

export default Skills;