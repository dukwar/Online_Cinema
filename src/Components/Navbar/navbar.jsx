import './navbar.scss'
import classNames from "classnames";

function NavbarGroup({children, className}) {

    const classes = classNames(
        'nav',
        className
    )

    return (
        <nav className={classes}>
                {children}
        </nav>
    );
}

export default NavbarGroup;
