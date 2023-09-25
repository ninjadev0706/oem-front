import React from "react";
import ReactDOM from "react-dom";

import { Provider as ReduxProvider } from "react-redux";
import "./assets/sass/index.scss";

// ** Initialize Store
import configureStore from "./redux/store";

// ** Import App
import App from "./App";

const store = configureStore();

ReactDOM.render(
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>,
    document.getElementById("app-root")
);
