import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/store"
import StoreContext from "./StoreContext";


let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={ store }>
                <App store={ store } state={ state }/>
            </StoreContext.Provider>
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
