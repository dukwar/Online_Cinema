import './App.scss';
import Main from "./Components/Main/main";
import Header from "./Components/Header/header";
import Slider from "./helpersSCSS/Slider";
import News from "./Components/News/news";
import React, {Fragment} from "react";
import Footer from "./Components/Footer/footer";
import HeaderContainer from "./Components/Header/headerContainer";
import Sidebar from "./helpersSCSS/SideBar/sidebar";
import {withRouter} from "react-router";
import {compose} from "redux";


function App({children}) {

    return (
        <Fragment>
            {/*<HeaderContainer />*/}
            <Main>
                {children}
            </Main>

        </Fragment>
    );
}

export default App
