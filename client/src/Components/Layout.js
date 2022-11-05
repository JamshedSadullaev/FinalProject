import React from "react";
import {  Outlet } from "react-router-dom";
const Layout =()=>{
    return (
        <>
        <div>
            <h1>Layout Page!</h1>
            </div>
            <Outlet/>
        </>
    );
};
export default Layout;