import React from "react";
import {Spinner} from "react-bootstrap";


const Preloader = () => {
    return (
        <>
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="danger" />
        </>


    )
}

export default Preloader