import Header from "./header";
import {useEffect, useState} from "react";

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