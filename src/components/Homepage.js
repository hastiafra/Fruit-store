import React from "react";
import styled from "styled-components";
import ListingGrid from "./ListingGrid";
import { items } from "../data";

const Homepage = () => {
  return (
    <>
      <HomePar>
        Fruit emporium sells the finest fruits from this world and beyond.
      </HomePar>

      <BoldSpa>Browse items:</BoldSpa>

      <Container>
        <ListingGrid itemList={Object.values(items)} />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-evenly;
  align-items: center;
`;

const HomePar = styled.p`
  margin: 30px;
  padding: 10px 40px 10px 40px;
  font-size: 20px;
`;
const BoldSpa = styled.span`
  font-weight: bold;
  margin: 30px;
  padding: 10px 40px 10px 40px;
  font-size: 20px;
`;

export default Homepage;
