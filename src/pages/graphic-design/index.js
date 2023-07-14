import React from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import pcvCard from "../../images/graphic-design/card-pcv.png"
import pcv from "../../images/graphic-design/pcv-logo.png"


const GraphicDesign = () => {
    return (
        <div>
            <Navbar/>
            <h1 class="pt-16 px-36">graphic design</h1>
            <div class="flex flex-wrap justify-items-start justify-center">
                <Card
                    title="Penn Climate Ventures Logo Design" 
                    image={pcvCard}
                    skills={["Adobe Illustrator"]}
                    description="Penn Climate Ventures Logo Design"
                    displayImg={pcv}/>
            </div>

            <Footer />
        </div>
    )
}

export default GraphicDesign;