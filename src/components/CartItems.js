import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { remove, increase, decrease } from "../redux/actions";
import styled from "@emotion/styled";
import Media from "react-media";

// const Button = styled.button`
//   background-color: #ffffff;
//   cursor: pointer;
//   margin: 1rem 1rem;
//   &:hover {

//   };
// `
const Container = styled.div`
  height: auto;
  width: 37.5rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 21.875rem 4.688rem 6.25rem;
  border-top: 0.1rem solid;
  @media (max-width: 600px) {
    grid-template-columns: 9rem 5rem 5rem;
    width: 21rem;
  }
`;
const Text = styled.h2`
  padding: 1rem 0.2rem;
  margin-left: 0.313rem;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.16667;
  font-weight: 600;
  letter-spacing: 0.009em;
`;

const NameSection = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 0.5fr 0.5fr;
  align-items: center;
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const PriceSection = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
`;
const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    margin-left: 1.875rem;
  }
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0px 0.625rem;
  text-decoration: none;
  cursor: pointer;
  border: none;
  background: none;
  color: ${(props) => (props.blue ? "#06c" : "black")};
  @media (max-width: 600px) {
    padding: ${(props) => (props.blue ? "0px 0px" : "0px, 0.625rem")};
  }
`;

const ImgArea = styled.img`
  height: 90px;
  width: auto;
  border: transparent;
  justify-self: center;
`;

export const CartItems = ({ id, data }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);
  console.log(items);
  const removeId = (id) => {
    dispatch(remove(id));
  };
  const incQty = (id) => {
    dispatch(increase(id));
  };
  const decQty = (id) => {
    dispatch(decrease(id));
  };
  return (
    <Container>
      <NameSection>
        <Media query="(min-width: 599px)">
          <ImgArea src={data[4]}></ImgArea>
        </Media>
        <Text>{data[1]}</Text>
        <Button blue onClick={() => removeId(data[0])}>
          Remove
        </Button>
      </NameSection>

      <ButtonSection>
        <Button onClick={() => decQty(data[0])}>–</Button>
        <Text>{data[3]}</Text>
        <Button onClick={() => incQty(data[0])}>+</Button>
      </ButtonSection>

      <PriceSection>
        <Text>{data[2] * data[3]}$</Text>
      </PriceSection>
    </Container>
  );
};

export default CartItems;
