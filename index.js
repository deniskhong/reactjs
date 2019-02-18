import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import showResults from "./showResults";
import SignUpForm from "./SignUpForm";
import './auto.css';

const rootEl = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <div style={{ padding: 15 }}>
            <h2>Simple Form</h2>
            <SignUpForm onSubmit={value => console.log("value=", value)} />
        </div>
    </Provider>,
    rootEl
);
