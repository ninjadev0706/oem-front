import React, { useEffect, useState, useCallback } from "react";

import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
// import { useApi } from "../hooks";
import Header from "../components/Header";
import '../assets/sass/styles.scss';

import config from "../config/app";

const Login = () => {
    // const api = useApi();
    const params = useParams();
    const history = useHistory();

    return (
        <div>
            <Header></Header>
            <div className="content-body">
                <div className="login-content">
                    <div className="login-title">Log in</div>
                    <div className="login-subtitle">Log into your admin account</div>
                    <input type="text" className="login-input input-name" placeholder="User"></input>
                    <input type="password" className="login-input input-pass" placeholder="Password"></input>
                    <button className="login-btn" onClick={() => history.push(`/selectwallet`)}>Log in</button>
                </div>
            </div>
        </div>
    );

}

export default Login;