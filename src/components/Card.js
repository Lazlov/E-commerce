import React from "react";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  background-color: ${(props) => (props.blue ? "#007aff" : "white")};
  border-radius: 1.5em;
  color: ${(props) => (props.blue ? "#fff" : "black")};
  border: ${(props) => (props.blue ? "transparent" : "1px solid")};
  cursor: pointer;
  padding: ${(props) => (props.blue ? "0.625rem 1.375em" : "0.563em 1.313em")};
  margin: 0.625em;
  font-size: 1.1em;
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    background-color: ${(props) => (props.blue ? "#045bb8" : "whitesmoke")};
  }

  @media (max-width: 450px) {
    font-size: 0.9em;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  margin: 1em;
  border-radius: 1em;
  background-color: white;
  padding: 1.5em;
  text-align: center;
  box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.2),
    0 0.375em 1.25em 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 450px) {
    width: 300px;
    margin: 1rem auto 1rem auto;
  }
`;

const ImgArea = styled.img`
  height: 20em;
  width: auto;

  border: transparent;
  @media (max-width: 450px) {
    height: 15em;
  }
`;
const Price = styled.p`
  font-size: 1.3em;
`;

export const Card = ({ id, data }) => {
  const dispatch = useDispatch();
  const add = (id, data) => {
    dispatch(addToCart(id, data));
  };

  return (
    <Container>
      <ImgArea src={data.url}></ImgArea>
      <h1>{data.name}</h1>
      <Price>{data.price}$</Price>
      <ButtonSection>
        <StyledLink blue to="/cart" onClick={() => add(id, data)}>
          Buy it now
        </StyledLink>

        <StyledLink onClick={() => add(id, data)}>Add to cart</StyledLink>
      </ButtonSection>
    </Container>
  );
};
