import React, {useState} from "react";
import cl from './register.module.scss'
import {useFormik} from "formik";
import Input from "./input";
import {NavLink} from "react-router-dom";


function Register() {


    return (
        <>
            <div className={cl.register}>
                <div className={cl.presentation}>

                    <div className={cl.presentation__wrapper}>
                        <div className={cl.logo__wrap}></div>
                        <ul className={cl.services__icons}>
                            <li className={cl.services__icon}><img
                                src="https://yastatic.net/s3/passport-static/core/v0.2.197-8/i/services_icons/customization/plus-mail.png"
                                alt=""/></li>
                            <li className={cl.services__icon}><img
                                src="https://yastatic.net/s3/passport-static/core/v0.2.197-8/i/services_icons/customization/plus-disk.png"
                                alt=""/></li>
                            <li className={cl.services__icon}><img
                                src="https://yastatic.net/s3/passport-static/core/v0.2.197-8/i/services_icons/customization/plus-kinopoisk.png"
                                alt=""/></li>
                            <li className={cl.services__icon}><img
                                src="https://yastatic.net/s3/passport-static/core/v0.2.197-8/i/services_icons/customization/plus-music.png"
                                alt=""/></li>
                        </ul>
                        <div className={cl.presentation__about}>
                            Пишите письма, сохраняйте и делитесь файлами, <br/>
                            слушайте музыку и смотрите фильмы с подпиской Яндекс.Плюс
                        </div>
                        <div className={cl.promo__offer}>
                            <span className={cl.promo__logo}>
                                <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                                    d="M21.122 2.888A15.497 15.497 0 0018 2.572C9.479 2.572 2.57 9.479 2.57 18S9.48 33.43 18 33.43c8.52 0 15.428-6.908 15.428-15.429 0-.27-.006-.54-.02-.807H22.222l-2.17 10.311h-4.11l2.17-10.311H8.424l.817-3.889h9.69l2.191-10.416z"
                                    fill="#fff"></path><path
                                    d="M32.7 13.304h-9.66l1.912-9.081a15.473 15.473 0 017.749 9.081z"
                                    fill="#fff"></path></svg>
                            </span>
                            <span
                                className={cl.promo__slogan}>При регистрации 90 дней<br/> музыки и фильмов бесплатно</span>
                        </div>

                    </div>
                    <div className={cl.presentation__footer}>
                        <span className={cl.footer__item}>Ru</span>
                        <span className={cl.footer__item}>Справка</span>
                        <span className={cl.footer__item}>Обратная связь</span>
                        <span className={cl.footer__item}>© Дмитрий К. 2021</span>

                    </div>
                </div>
                <div className={cl.register__form}>
                    <p className={cl.isLog}>Уже есть аккаунт на Яндексе? <NavLink to={"/login"}>Войти</NavLink> </p>

                    <div className={cl.form__panel}>
                        <div className={cl.form__title}>
                            <h1>Регистрация</h1>
                            <RegisterForm/>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}


const RegisterForm = () => {


    const [toggle, setToggle] = useState(true)
    const initialValues = {
        firstName: '',
        lastName: '',
        login: '',
        email: '',
        password: '',
        telephoneNumber: '',

    }
    console.log(toggle)
    const formik = useFormik({
        initialValues,

        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },

        validate: (values) => {
            const errors = {}
            if (!values.email) {
                errors.email = 'Введите адрес почты';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Некорректный формат адреса'
            }

            if (!values.password) {
                errors.password = 'Пожалуйста придумайте пароль';
            } else if (values.password.length < 6) {
                errors.password = 'Пароль должен состоять из 6 или более символов'
            }

            if (!values.firstName) {
                errors.firstName = 'Пожалуйста введите имя';
            }

            if (!values.lastName) {
                errors.lastName = 'Пожалуйста введите фамилию';
            }

            if (!values.login) {
                errors.login = 'Необходимо выбрать логин';
            }

            return errors
        }


    });



    const inputData = [
        {
            id: 'firstName',
            label: 'Имя',
            name: 'firstName',
            values: formik.values.firstName

        },

        {
            id: 'lastName',
            label: 'Фамилия',
            name: 'lastName',
            values: formik.values.lastName
        },

        {
            id: 'login',
            label: 'Логин',
            name: 'login',
            values: formik.values.login
        },

        {
            id: 'email',
            label: 'Электронная почта',
            name: 'email',
            values: formik.values.email
        },

        {
            id: 'password',
            label: 'Придумайте пароль',
            name: 'password',
            values: formik.values.password
        },

        {
            id: 'telephoneNumber',
            label: 'Номер  мобильного телефона',
            name: 'telephoneNumber',
            values: formik.values.telephoneNumber
        },
    ]


    return (
        <form onSubmit={formik.handleSubmit}>

            {inputData.map(data =>
                <Input key={data.id}
                       id={data.id}
                       label={data.label}
                       name={data.name}
                       type="text"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={data.values}
                       errors={formik.errors}
                       touched={formik.touched}

                />)}



            <button className={cl.reg__button} type="submit">Зарегистрироваться</button>

            <div className={cl.sub__confirm}>Нажимая кнопку «Зарегистрироваться»:</div>
            <div className={cl.confirm__agreement}>
                <input onClick={() => {
                    setToggle(!toggle)
                    formik.values.toggle = toggle}} type="checkbox"/>
                <div className={cl.text__agreement}>Я принимаю условия Пользовательского соглашения и даю своё согласие
                    данному сервису на обработку моей персональной информации на условиях,
                    определенных Политикой конфиденциальности.</div>
            </div>





        </form>
    );
}

export default Register;
