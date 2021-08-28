import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store"
import { saveTheme } from "./api/localStorage";
import MainApp from "./App";

store.subscribe(() => {
    saveTheme(store.getState().settingsPage.themeDark);
})

ReactDOM.render(<MainApp/>, document.getElementById('root'));


serviceWorker.unregister();
