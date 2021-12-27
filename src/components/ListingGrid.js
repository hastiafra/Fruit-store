import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const ListingGrid = ({ itemList }) => {
  // let {id, name, imgSrc, latinName} = itemList;

  return itemList.map((item) => {
    return (
      <Container to={`/items/${item.id}`} key={item.id}>
        <Wrapper>
          <Image src={item.imageSrc} alt={item.name} />

          <Title>{item.name}</Title>

          <Para>{item.latinName}</Para>
        </Wrapper>
      </Container>
    );
  });
};

const Image = styled.img`
  width: 150px;
  display: inline-block;
  margin: auto;
  border-radius: 10px;
  margin-top: -65px;
`;

const Container = styled(Link)`
  display: inline-block;
  width: 350px;
  margin-top: 20px;
  text-decoration: none;
  padding:20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 50px;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  padding: 30px;
`;

const Title = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`;

const Para = styled.p`
  text-align: center;
  font-size: 20px;
  color: gray;
  margin-top: -20px;
`;

export default ListingGrid;

ListingGrid.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};
