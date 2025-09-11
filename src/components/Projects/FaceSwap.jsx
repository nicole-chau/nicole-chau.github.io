import React from "react";

const FaceSwap = () => {
    return (
        <div>
            <h2>Overview</h2>

            This project was completed with two other collaborators as our final project for a computer vision class. 
            The goal of this project is to automatically detect and swap faces in two arbitrary videos while accounting for lighting/exposure/shadows differences to produce visually appealing results.
            It was implemented using Python and the OpenCV library. 

            <h2>Technical Approach</h2>   
            <h3>1. Landmark detection</h3> 
            <p>
                We first establishing a set of corresponding feature locations in screen space between the source image and the target image. 
                such that the eyes in the source can be correctly mapped onto the eyes in the target and so on. 
                For this task, we utilized a DLib facial detector that maps a template of 68 facial landmarks onto a detected face. 
            </p>

            <h3>2. Feature extraction</h3>
            <p>
                We define a convex hull that acts as a mask encapsulating the landmarks detected in the previous step to ensure only a small portion 
                of the source image is retargeted onto the target image. 
            </p>

            <h3>3. Delaunay Triangulation</h3>
            <p>
                In order to warp the image onto the target face accurately, we first need to triangulate the mask defined. This is completed with the Delaunay Triangulation method that ensures 
                the areas of the triangles in this triangulation are maximally equal.
            </p>

            <h3>4. Warping</h3>
            <p>
                With triangulations for both images created, we are now able to apply affine transformations to the coordinates of the triangle vertices in the source image mask to reshape it into the shape of the mask in the target image. 
                Each of these triangles are warped according to the transformation matrix which yields a warped version of the source mask that is ready to be overlaid on top of the target mask.
            </p>

            <h3>5. Face Swapping</h3>
            <p>
                With the source mask warped and transformed, all that is required is just to overlay the mask on top of the target image and paint in the pixels into that mask. This is done by just drawing the mask over the center of the bounding box of the target mask.
            </p>

            <h3>6. Gradient Domain Blending</h3>
            <p>
                To blend the source face with the target image more smoothly, the built-in cv2 seamlessClone() function was used to implement gradient domain blending. 
                This allows us to make the face swap appear more natural by accounting for changes in exposure, lighting, etc.
            </p>
        </div>
    )
}

export default FaceSwap;