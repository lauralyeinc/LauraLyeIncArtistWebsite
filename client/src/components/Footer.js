import React from "react";

const Footer = () => {
    return (
        <>
        <div className="Footer-Area">
            <div className="Name/Logo-Footer">
                <h4> LauraLyeInc Artist </h4>
            </div>
            <div className="Footer-Nav-Bar">
            <NavLink to="/Home"> Home </NavLink>
            <NavLink exact to="/artwork"> Showcase </NavLink>
            <NavLink exact to="/shop" > Shop </NavLink>
            <NavLink exact to="/classes"> Classes </NavLink>
            </div>
            <div className="Social-Media">
                <p> 
                    Contact me: email 
                    youtube, facebook, instagram, twitter 
                </p>
            </div>
        </div>
        </>
    )
};