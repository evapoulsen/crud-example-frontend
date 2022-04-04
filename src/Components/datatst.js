import React from "react";
import axios from "axios";

function Data() {
    const datatst = axios.get("http://localhost:80/react-api/users").then((response) =>
    datatst = (response.data))

    return (
        datatst
    )
}

export default Data;