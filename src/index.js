import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import RecentContainer from "./Components/Recent/RecentContainer";
import {Provider} from "react-redux";
import store from "./Redux/store";
import TimeSessionContainer from "./Components/allFilms/allFilmsContainer";
import FilmContainer from "./Components/allFilms/FIlmItem/filmContainer";
import RecentContainerMemo from "./Components/Recent/RecentContainer";
import Register from "./Components/Register/register";
import Login from "./Components/Login/Login";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Switch>
              <Provider store={store}>
                  <App>

                      <Route exact path={'/'} component={RecentContainerMemo} />
                      <Route path={'/timesession'} component={TimeSessionContainer} />
                      <Route path={'/film/:id?'} component={FilmContainer} />
                      <Route path={'/register'} component={Register} />
                      <Route exact path={'/login'} component={Login} />
                  </App>



              </Provider>


          </Switch>

      </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
