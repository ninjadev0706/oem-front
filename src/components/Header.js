import React, { useState, useEffect, useCallback } from "react";

// ** Import Redux
import { theme_mode_store } from "../redux/actions/config";
import { useSelector, useDispatch } from "react-redux";

// ** Import Modules
import { useHistory } from "react-router-dom";
import { useApi } from "../hooks";

import Logo from "../assets/img/logo.png";
import '../assets/sass/header.scss'

import config from "../config/app";

// ** Import
const Header = () => {
    return (
        <div className="header-container">
            <img src={Logo} alt="logo" className="header-logo" />
            <div className="header-title">Utility Project</div>
        </div>
    );
};

export default Header;
