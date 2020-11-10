import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/store"
import { Provider } from "react-redux";


let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={ store }>
                <App store={ state } />
            </Provider>
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
