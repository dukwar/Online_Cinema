import React, {Fragment} from "react";
import './button.scss'
import classNames from "classnames";


function Button({
                    children, onClick, className, disabled, active, ...attrs
                }) {

    const classes = classNames(
        'btn1',
        className,
        { active },
    );



    return (
        <Fragment>
            <button
                className={classes}
                onClick={onClick}
                disabled={disabled}
                {...attrs}
            >
                {children}

            </button>

        </Fragment>
    );
}

export default Button;