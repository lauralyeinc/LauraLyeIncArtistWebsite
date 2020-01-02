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
                    {/* May just link to etsy, for now  */}
                <NavLink exact to="/classes"> Classes </NavLink>
                    {/* Link to etsy for class payment, but "this" website hosts the videos, etc */}
            </div>
        </div>
        </>
    )
};

export default Navigation; 