import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "../App";

import React from "react";
import { addPost } from "../redux/state";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={ state } addPost={ addPost }/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}