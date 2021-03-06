import "./input.scss"
import React, {Fragment, useState} from "react";
import classNames from "classnames";


const Input = ({onChange, onBlur, id, name, type, value, label, errors, touched}) => {

    const [active, setActive] = useState(false)
    const [isValid, setValid] = useState(false)
    let hasError = touched[name] && errors[name]

    const classes = classNames(
        'field__item',
        {isValid},
        {active}
    )

    return (
        <Fragment>
            <div className={classes}>
                <label className={value ? "reg__label" + " " + "staticLabelInput" : "reg__label"}>{label}</label>
                <input
                    id={id}
                    name={name}
                    type={type}
                    onChange={onChange}
                    value={value}
                    onFocus={() => setActive(true)}
                    onBlur={(event) => {
                        onBlur(event)
                        errors && setValid(true)
                        if (value) {
                            setValid(false)
                        }
                        setActive(false)
                    }
                    }

                />



            </div>
            {hasError ? <div className={"validate__data"}><p>{errors[name]}</p></div> : null}

        </Fragment>


    );
}

export default Input