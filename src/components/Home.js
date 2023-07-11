import React from "react";

const linkStyle = "ease-in-out duration-200 hover:text-powder-blue block py-1 text-xl mr-5"

const links = [
    {
        text: "computer graphics",
        url: "",
    },
    {
        text: "web dev",
        url: "",
    },
    {
        text: "graphic design",
        url: "",
    }
]

const Home = () => {
    return (
        <div>
            <h1>hey, i'm nicole!</h1>
            <p class="text-xl mb-4">
                check out some of my work in...
            </p>
            {links.map(link => (
                <a href={link.url} class={linkStyle}>{link.text}</a>
            ))}

        </div>
    )
}

export default Home;