import React from "react";
import styled from "styled-components";

const About = () =>{
    return (
        <>
        <AboutPar>
        
            Fruit emporium is founded on a very simple principle: <BoldSpan>Fruit is good.</BoldSpan>
            </AboutPar>
          

        <AboutPar>
            We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.
        </AboutPar>  </>
    )
}


const AboutPar = styled.p`
margin:30px;
padding: 10px 40px 10px 40px;
font-size:20px;
`

const BoldSpan = styled.span`
font-weight:bold;
`



export default About;