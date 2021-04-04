import React from "react";
import {Link, Outlet, useLocation} from "react-router-dom";

function Whoops404(){
    let location = useLocation();
    return (
        <div>
            <h1>Resource not found at {location.pathname} </h1>
        </div>
    );
}
export default Whoops404;