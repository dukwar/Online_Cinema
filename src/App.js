import './App.scss';
import Main from "./Components/Main/main";
import Header from "./Components/Header/header";
import Slider from "./helpersSCSS/Slider";
import News from "./Components/News/news";
import React from "react";
import Footer from "./Components/Footer/footer";
import HeaderContainer from "./Components/Header/headerContainer";
import Sidebar from "./helpersSCSS/SideBar/sidebar";




function App({children}) {
  return (
    <div >
        {/*<HeaderContainer />*/}
        <Sidebar />


      <Main>
        {children}
      </Main>

        <Footer />
    </div>
  );
}

export default App;
