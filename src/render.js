import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {addPost, updateNewPostText} from "./redux/state";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={ state } addPost={ addPost } updateNewPostText={ updateNewPostText } />
        </BrowserRouter>,
        document.getElementById('root')
    );
}