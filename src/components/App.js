import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Header";
import Homepage from "./Homepage";
import About from "./About";
import ItemDetails from "./ItemDetails";
import { createGlobalStyle } from "styled-components";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path ="/items/:itemId">

            <ItemDetails/>
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
body{
  font-family:"Raleway", sans-serif;
}`;
export default App;
