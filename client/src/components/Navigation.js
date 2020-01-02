import React from "react";
import {NavLink} from "react-router-dom"; 


const Navigation = () => {
    return (
        <>
        <div className="Nav-Area">
            <div className="Name/Logo"> Laura Lye Inc Artist </div>
            <div className="Nav-Bar"> 
                <NavLink exact to="/"> Home </NavLink>
                <NavLink exact to="/artwork"> Showcase </NavLink>
                <NavLink exact to="/shop" > Shop </NavLink>
                <NavLink exact to="/classes"> Classes </NavLink>
            </div>
        </div>
        </>
    )
};

export default Navigation; 