import './App.scss';
import Main from "./Components/Main/main";
import Header from "./Components/Header/header";
import Slider from "./helpersSCSS/Slider";
import News from "./Components/News/news";
import React from "react";
import Footer from "./Components/Footer/footer";




function App({children}) {
  return (
    <div >
        <Header />
        <Slider size={200}/>

      <Main>
        {children}
      </Main>

        <Footer />
    </div>
  );
}

export default App;
