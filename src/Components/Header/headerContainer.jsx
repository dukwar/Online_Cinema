import cl from './header.module.scss'
import Navbar from "../Navbar/navbar";
import Intro from "../Intro/Intro";
import NavbarGroup from "../Navbar/navbar";
import NavbarItem from "../Navbar/Navbar__Item";
import Navbar__Item from "../Navbar/Navbar__Item";
import Header from "./header";
import {useState} from "react";

function HeaderContainer() {

   const [isDrop, setDropDown] = useState(false)

    const handleDropdownSet = () => {
        setDropDown(true)
    }

    const handleDropdownDel = () => {
        setDropDown(false)
    }

    return (
        <Header handleDropdown={handleDropdownSet}  handleDropdownDel={handleDropdownDel} isDrop={isDrop} />
    );
}

export default HeaderContainer;