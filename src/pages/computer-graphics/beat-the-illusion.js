import React from "react";
import Tag from "../../components/Tag";
import Navbar from "../../components/Navbar";
import demo from "../../images/computer-graphics/beat-the-illusion.mp4"

const BeatTheIllusionBody = () => {
    return (
        <div>
            <video width="1800" controls class="mb-8">
                <source src={demo} type="video/mp4" />
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
        </div>
    )
}

export { BeatTheIllusionBody };

const BeatTheIllusion = () => {
    const skills = ["Unreal", "C++"];

    return (
        <div>
            <Navbar/>

            <div class="py-20 px-80">
                <div class="float-left inline">
                    <h1>'Beat the Illusion' Game</h1>
                    <div class="mb-3 -mt-10">
                        {skills.map(skill => (<Tag tag={skill}/>))}
                    </div>
                </div>

                <div class="float-right inline mt-3">
                    <p class="text-right">Created in 2022</p>
                </div>
            </div>
        </div>
    )
}

export default BeatTheIllusion;