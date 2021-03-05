import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux"
import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
import createSagaMiddleware from "redux-saga";
import {
    watchGetCharacter,
    watchGetCharacters,
} from "./redux/sagas";

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(applyMiddleware(saga)));

saga.run(watchGetCharacters);
saga.run(watchGetCharacter);




ReactDOM.render(
    <Provider store={store}>
       <React.StrictMode>
         <App />
       </React.StrictMode>,
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
