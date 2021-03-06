import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/store"
import { Provider } from "react-redux";
import { saveTheme } from "./api/localStorage";

store.subscribe(() => {
    saveTheme(store.getState().settingsPage.themeDark);
})

ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store }>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));


serviceWorker.unregister();
