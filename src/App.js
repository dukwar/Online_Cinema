import './App.scss';
import Main from "./Components/Main/main";
import Header from "./Components/Header/header";
import Slider from "./helpersSCSS/Slider";
import News from "./Components/News/news";
import React from "react";
import Footer from "./Components/Footer/footer";
import HeaderContainer from "./Components/Header/headerContainer";




function App({children}) {
  return (
    <div >
        <HeaderContainer />
        <Slider size={200}/>

      <Main>
        {children}
      </Main>

        <Footer />
    </div>
  );
}

export default App;
