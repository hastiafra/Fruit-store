import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";

const ItemDetails = (props) => {
  const params = useParams();
  console.log(params);

  const item = items[params.itemId];
  // const {alice,bob} = sellers
  const sellerInfo = sellers[item.sellerId];
  let quantity = item.quantity
  console.log(item);
  console.log(sellers);
  return (
    <Container>
      <FruitImg src={item.imageSrc} alt={item.name} />
      <div>
        <FruitTitle>{item.name}</FruitTitle>
        <LatinName>{item.latinName}</LatinName>
        <FruitDes>{item.description}</FruitDes>
        <Pro>
          Product of <BoldSpan>{item.countryOfOrigin}</BoldSpan>
        </Pro>
        <BuyButton>
             { quantity !== 0 ? `$ ${item.price} - Buy now` : "Out of Stock" }
             </BuyButton> 
        <SellerImg src={sellerInfo.avatarSrc} />

        <SellerDetail>
          Sold by : <BoldSpan>{sellerInfo.storeName}, by {sellerInfo.id}</BoldSpan>
        </SellerDetail>

      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const FruitImg = styled.img`
  width: 450px;
  display: inline-block;
  margin: 50px 100px 20px 20px;
  border-radius: 20px;
`;

const FruitTitle = styled.p`
  display: inline-block;
  font-weight: bold;
  margin: 50px 0px 10px;
  font-size: 40px;
`;
const SellerImg = styled.img`
  width: 70px;
  height: 70px;
  display: inline-block;
  border-radius:50%;
  vertical-align: middle;
`;

const LatinName = styled.p`
  font-size: 20px;
  color: gray;
  margin-top: 0px;
`;

const BuyButton = styled.button`
  display: block;
  margin: 20px 0px;
  font-size: 20px;
  padding: 20px;
  border-radius: 20px;
  border: none;
  background-color: #4f1fa2;
  color: white;
  height: 60px;
  width: fit-content;

  :hover{
    background-color:skyBlue;
    color:black;
  }
`;

const FruitDes = styled.p`
  display: inline-block;
  width: 500px;
  padding-top: 20px;
`;

const Pro = styled.p`
  font-style: Italic;
`;
const BoldSpan = styled(Pro)`
  font-weight: bold;
  display: inline-block;
`;

const SellerDetail = styled(FruitDes)`
vertical-align: middle;
padding-top: 0px;
padding-left: 20px;
`



export default ItemDetails;
