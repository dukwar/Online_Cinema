import cl from './main.module.scss'
import Sidebar from "../../helpersSCSS/SideBar/sidebar";
import React, {Fragment} from "react";
import Footer from "../Footer/footer";

function Main({children}) {
    return (
        <div className={cl.container}>
            {/*<Sidebar/>*/}

            {children}
            {/*<Footer/>*/}

        </div>
    );
}

export default Main;
