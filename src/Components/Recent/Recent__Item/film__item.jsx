import React from "react";
import "./film__item.scss"
import Poster from "../../../img/poster-1.jpg"
import Button from "../../Button/button";

function FilmItem(props) {


    return (
        <div className='recent__films__item'>

            <div className="film">
                <img className="films__img" src={props.filmImage} alt=""/>
                <div className="film__animate">
                    <Button className="filmsInTitle">
                        WATCH TRAILER
                    </Button>
                </div>
            </div>





            <div className="films__title">{props.filmTitle}</div>
            {/*<div className="films__data">{props.filmDate}</div>*/}


        </div>
    );
}

export default FilmItem;
