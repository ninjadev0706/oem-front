import React from "react";
import ReactDOM from "react-dom";
import { hydrate, render } from "react-dom";

import { Provider as ReduxProvider } from "react-redux";
import "./assets/sass/index.scss";

// ** Initialize Store
import configureStore from "./redux/store";

// ** Import App
import App from "./App";

const store = configureStore();

const rootElement = document.getElementById("app-root");
if (rootElement.hasChildNodes()) {
    hydrate(<ReduxProvider store={store}>
        <App />
    </ReduxProvider>, rootElement);
} else {
    render(<ReduxProvider store={store}>
        <App />
    </ReduxProvider>, rootElement);
}