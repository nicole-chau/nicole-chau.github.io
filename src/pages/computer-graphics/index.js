import React from "react";
import Card from "../../components/Card";

const ComputerGraphics = () => {
    return (
        <div class="p-16">
            <h1>computer graphics</h1>
            <div class="flex flex-wrap justify-items-start justify-center">
                <Card
                    title="Volume Renderer for Medical Imaging" 
                    image="https://user-images.githubusercontent.com/74137085/234706856-ad9ac68d-c2e3-4d50-a74c-39f0ee7b8109.png"
                    page="/computer-graphics/volume-renderer"/>
                <Card 
                    title="Face Swapping in Videos" 
                    image="https://user-images.githubusercontent.com/74137085/234706856-ad9ac68d-c2e3-4d50-a74c-39f0ee7b8109.png"/>
                {/* <Card title="Volume Renderer" image="https://user-images.githubusercontent.com/74137085/234706856-ad9ac68d-c2e3-4d50-a74c-39f0ee7b8109.png"/> */}
                {/* <Card title="Volume Renderer" image="https://user-images.githubusercontent.com/74137085/234706856-ad9ac68d-c2e3-4d50-a74c-39f0ee7b8109.png"/> */}
            </div>
        </div>
    )
}

export default ComputerGraphics;