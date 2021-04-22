import React from "react";
import {Spinner} from "react-bootstrap";


const Preloader = () => {
    return (
        <div className='preloader'>
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="danger" />
        </div>


    )
}

export default Preloader