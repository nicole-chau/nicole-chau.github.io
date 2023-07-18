import React from "react";

const Tag = ({ tag }) => {
    return (
        <p class="text-sm md:text-base bg-dark-tan rounded-md inline-block px-2.5 py-1 mr-3 my-2 text-white">{tag}</p>
    )
}

export default Tag;