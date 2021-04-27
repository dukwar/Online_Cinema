import cl from "./Login.module.scss"
import React, {Fragment, useState} from "react";
import {useFormik} from "formik";
import Input from "../Register/input";
import LoginInput from "./LoginInput";
import {NavLink} from "react-router-dom";


const Login = () => {


    return (
        <Fragment>
            <div className={cl.login}>
                <div className={cl.login__wrapper}>
                    <div className={cl.login__panel}>
                        <div className={cl.login__header}>
                            <div className={cl.logo__wrapper}></div>
                            <div className={cl.logo__text}><NavLink to={"/"}>Войдите</NavLink> с Кинопоиск ID, чтобы
                                перейти к Фильмам
                            </div>
                        </div>
                        <LoginForm/>
                    </div>
                </div>
                <div className={cl.footer}>
                    <p>Используйте режим инкогнито на чужом компьютере</p>
                    <p> инкогнито на чужом компьютере</p>
                </div>
            </div>


        </Fragment>


    );
}


const LoginForm = () => {


    const initialValues = {
        email: '',
        password: '',

    }
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

            return errors
        }


    });



    const loginData = [

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

    ]


    return (
        <form onSubmit={formik.handleSubmit}>

            {loginData.map(data =>
                <LoginInput key={data.id}
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



            <button className={cl.login__button} type="submit">Войти</button>
            <NavLink to={"/register"} className={cl.login__button} type="submit">Зарегистрироваться</NavLink>


        </form>
    );
}






export default Login