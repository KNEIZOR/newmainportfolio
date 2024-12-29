import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ({
    variantColor = "light",
    size = "50px",
    text = "Идет загрузка...",
    marginTop = "0px"
}) => {
    return (
        <div style={{width: "100%", height: "100%"}} className="loader d-flex flex-column justify-content-center align-items-center">
            <Spinner
                style={{ width: size, height: size, marginTop: marginTop }}
                animation="border"
                variant={variantColor}
            />
            <h2 style={{marginTop: 20}}>{text}</h2>
        </div>
    );
};

export default Loader;
