import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import RecentContainer from "./Components/Recent/RecentContainer";
import {Provider} from "react-redux";
import store from "./Redux/store";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Switch>
              <Provider store={store}>
                  <App>
                      <Route path={'/home'} component={RecentContainer} />
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
