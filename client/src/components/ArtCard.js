import React from "react";
import styled from "styled-components"; 
import rabbit from "../images/rabbit.JPG"; 


const ArtCard = () => {
    return(
        <>
        <div className="Art-Card-Area">
            {/* want to add an onClick handler to direct the user to a page for each artwork*/}
            {/* Totally mock data, otherwise have to build it out for every single piece of artwork wanting to showcase */}
            <div className="Image-Area">
                <SizedImg src={rabbit} alt="flower crown rabbit" />
            </div>
            <div className="Title">
                <h4> Bobbi the Spring King of Easter </h4>
            </div>
        </div>
        </>
    )
};

export default ArtCard; 

const SizedImg = styled.img`
height: 150px;
`