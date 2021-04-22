import React from "react";
import Button from "../Button/button";
import "./Intro.scss"

function Intro() {


    return (
        <>
            <div className="intro">
                <div className="slider__content">
                    <h1>LATEST ONLINE MOVIES</h1>
                    <h4>IN SPACE NO ONE CAN HEAR YOU SCREAM.</h4>
                    <Button>
                        Смотреть трейлер
                    </Button>
                </div>
            </div>



        </>
    );
}

export default Intro;