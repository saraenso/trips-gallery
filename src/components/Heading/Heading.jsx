import React from "react";
import './Heading.css'

function Heading(props) {
    return (
        <h1 className="main-header">{props.text}</h1>
    )
}

export default Heading