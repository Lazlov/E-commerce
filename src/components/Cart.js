import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../redux/actions";
import { CartItems } from "./CartItems";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";


const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
  }
`;
const Header = styled.div`
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2),
    0 0.375rem 0.5rem 0 rgba(0, 0, 0, 0.19);
  display: grid;
  grid-gap: 1rem;
  border: 0.1rem solid;
  border-bottom: transparent;
  width: 37.5rem;
  margin-top: 3em;
  background-color: white;
  grid-template-columns: 21.875rem 4.688rem 6.25rem;
  border-radius: 1em 1em 0 0;
  @media (max-width: 600px) {
    width: 21rem;
    grid-template-columns: 9rem 6rem 2rem;
    margin: 1rem auto 0 auto;
    grid-gap: 1.2rem;
  }
`;

const Items = styled.div`
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2),
    0 0.375rem 0.5rem 0 rgba(0, 0, 0, 0.19);
  width: 37.5rem;
  border: 0.1rem solid;
  border-top: transparent;
  border-radius: 0 0 1em 1em;
  background-color: #fafafa;
  @media (max-width: 600px) {
    margin: auto;
    width: 21rem;
  }
`;
const Text = styled.div`
  padding: 1rem 0.2rem;
  margin-left: 0.313rem;
  text-align: center;
`;

const Price = styled.div`
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.16667;
  font-weight: 600;
  letter-spacing: 0.009em;
  margin: 0.988rem 0px 0px 2.188rem;
`;

const Button = styled.button`
  text-decoration: none;
  background-color: white;
  border-radius: 1.5rem;

  color: black;
  border: 0.063rem solid;
  cursor: pointer;
  padding: 0.563rem 1.313rem;
  margin: 0.625rem 1.25rem;
  font-size: 1.063rem;
  &:active {
    text-decoration: none;
  }
  &:hover {
    background-color: whitesmoke;
  }
  @media (max-width: 600px) {
    margin: auto;
  }
`;
const Home = styled(Link)`
  text-align: center;
  font-size: 1rem;
  margin-top: 1.25rem;
  text-decoration: none;
  cursor: pointer;
  color: #06c;

  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const Styled = styled(Link)`
  background-color: #007aff;
  border-radius: 1.5rem;
  color: #fff;
  border: transparent;
  cursor: pointer;
  padding: 0.625rem 1.375rem;
  margin: 0.625rem 0px;
  font-size: 1.063rem;
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    background-color: #045bb8;
  }

  @media (max-width: 600px) {
    margin: auto;
  }
`;

const Bottom = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-left: 1rem;
  @media (max-width: 600px) {
    width: 21rem;
    display: grid;
    grid-template-columns: repeat(2, 10.5rem);
    margin-left: 0rem;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
`;

const FilledCart = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  justify-content: center;
  align-self: center;
`;

export const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const resetItems = () => {
    dispatch(reset());
  };

  return (
    <Container>
      {items.cartItems.length ? (
        <FilledCart>
          <Header>
            <Text>Product</Text>
            <Text>Qty</Text>
            <Text>Price</Text>
          </Header>
          <Items>
            {items.cartItems.map((item) => (
              <CartItems id={item.id} data={Object.values(item)} />
            ))}
          </Items>
          <Bottom>
            <Styled blue to="/" onClick={() => resetItems()}>
              Checkout
            </Styled>
            <Button onClick={() => resetItems()}>Clear cart</Button>
            <Home to="/">Back to shopping</Home>
            <Price>
              Total:{" "}
              {items.cartItems.reduce((summ, curr) => {
                return summ + curr.qty * curr.price;
              }, 0)}
              $
            </Price>
          </Bottom>
        </FilledCart>
      ) : (
        <EmptyCart>
          <h1>Cart is empty!</h1>
          <Home to="/">Back to shopping</Home>
        </EmptyCart>
      )}
    </Container>
  );
};
