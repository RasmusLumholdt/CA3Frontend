import React from "react";

const Welcome = (props) => (
    <div className="container">
        <h1 className="text-center">WELCOME {props.username}</h1>
    </div>
)

export default Welcome;