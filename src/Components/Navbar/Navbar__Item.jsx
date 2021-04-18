import './navbar.scss'
import classNames from "classnames";
import {NavLink} from "react-router-dom";


function NavbarItem({children, onClick, navBetween, className, filter, ...attrs}) {


    const onClickAction = e => {
        if (onClick) {
            e.preventDefault();
            return onClick(filter);
        }
    };


    const classes = classNames(
        'nav__item',
        className,
        {navBetween},
    )

    const Tag = attrs.to ? NavLink : 'button'


    return (
        <>
            <Tag
                className={classes}
                onClick={onClickAction}
                filter={filter}
                {...attrs}
            >{children}</Tag>

        </>


    );
}

export default NavbarItem;