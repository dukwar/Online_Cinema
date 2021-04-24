import React from "react";
import {Carousel, Container} from "react-bootstrap";
import Photo1 from "../img/slider-img-1.jpg"
import Photo2 from "../img/slider-img-2.jpg"
import Photo3 from "../img/slider-img-3.jpg"
import classNames from "classnames";
import Button from "../Components/Button/button";
import "./Slider.scss"
import Intro from "../Components/Intro/Intro";





let Slider = ({
    width, height, className, size, ...attrs
              }) => {

    const classes = classNames(
        className,
    )

    const elemSize = size ? { height: `${size}px` } : null;

    return (
        <div>


            <Carousel >

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Photo1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="caption">

                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={Photo2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>


                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={Photo3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>


    )
}

export default Slider