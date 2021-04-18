import React from "react";
import cl from './news__item.module.scss'


function NewsItem() {


    return (
        <>
            <div className={cl.news__item}>
                <img src="https://admin.kinomax.ru/data/news/2021/03/300311_84536.png" alt=""/>
                <h6 className={cl.title}>Купи билет заранее на фильм «Чернобыль» и получи шанс встретиться с Данилой Козловским!</h6>
                <p className={cl.text}>
                    С 30 марта по 14 апреля 2021 года покупай
                    билеты на фильм «Чернобыль», участвуй в
                    акции и получи шанс стать одним из трех победителей,
                    которые смогут встретиться лично с
                    Данилой Козловским и обсудить фильм.
                </p>
                <time>30 марта 2021 г.</time>
            </div>

        </>


    );
}

export default NewsItem;
