import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Para>Fruit Emporium</Para>
      <NavBar
        activeStyle={{ color: "purple", textDecoration: "underline" }}
        exact
        to="/"
      >
        Home
      </NavBar>

      <NavBar
        activeStyle={{ color: "purple", textDecoration: "underline" }}
        to="/about"
      >
        About
      </NavBar>
    </div>
  );
};

const Para = styled.div`
  
  display: inline-block;
  font-weight: bold;
  font-size: 50px;
  margin: 40px 20px 50px 70px;
`;
const NavBar = styled(NavLink)`
  padding: 20px;
  float: right;
  display :inline-block;
  margin: 40px;
  margin: 50px 120px 20px 20px;
  font-size: 20px;
  text-decoration:none;
  font-weight: bold;
  color:blue;
  


  }

`;

export default Header;
