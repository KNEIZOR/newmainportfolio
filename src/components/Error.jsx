import React from "react";

const Error = ({ text }) => {
    return (
        <div
            style={{ width: "100%", height: "100%" }}
            className="error d-flex flex-column align-items-center"
        >
            <h2>{text}</h2>
        </div>
    );
};

export default Error;
