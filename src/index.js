import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import state, {addMsg, addPost, subscribe, updateNewMsgText, updateNewPostText} from "./redux/state";

let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={ state }
                addPost={ addPost }
                updateNewPostText={ updateNewPostText }
                addMsg={ addMsg }
                updateNewMsgText={ updateNewMsgText }
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderEntireTree(state);

subscribe(renderEntireTree);

serviceWorker.unregister();
