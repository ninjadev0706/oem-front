import React, { useEffect, useState, useCallback } from "react";

import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { useApi } from "../hooks";

import config from "../config/app";

const Pool = () => {
    const api = useApi();
    const params = useParams();
    const history = useHistory();

    return (
        <div>

        </div>
    );

}

export default Pool;