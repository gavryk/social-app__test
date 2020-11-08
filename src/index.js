import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/store"


let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={ store }
                state={ state }
                // dispatch={ store.dispatch.bind(store) }
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});

serviceWorker.unregister();
