import React from "react";
import cl from './news.module.scss'
import Navbar__Item from "../Navbar/Navbar__Item";
import NewsItem from "./news__item/news__item";


function News() {


    return (
        <>
            <div className={cl.news}>
                <div className={cl.news__inner}>
                    <div className={cl.header}>
                        <h3>Новости Киномакс</h3>
                        <Navbar__Item className='navNews'>Все новости</Navbar__Item>
                    </div>
                    <div className={cl.news__items}>
                       <NewsItem />
                        <NewsItem />
                        <NewsItem />
                        <NewsItem />


                    </div>

                </div>
            </div>




        </>



    );
}

export default News;
