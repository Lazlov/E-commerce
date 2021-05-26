import React from "react";

import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

const Nav = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-end;
  justify-content: center;
  background-color: #ffffff;
  height: 3.5rem;
  @media (max-width: 450px) {
    width: auto;
  }
`;

const Badge = styled.div`
  font-size: 0.938rem;
  color: white;
  text-align: center;
  width: 1.188rem;
  border-radius: 1.188rem;
  padding: 1.188rem, 1.188rem;
  position: absolute;
  margin-right: 0.5rem;
  top: 0.375rem;
  background-color: #007aff;
`;

const Img = styled.img`
  height: 2.813rem;
  width: auto;
  margin: 0 1rem;
  border: transparent;
`;

export const Header = () => {
  const items = useSelector((state) => state.cart);
  return (
    <Nav>
      <Link to="/cart">
        <Img src="https://i.pinimg.com/originals/15/bb/55/15bb559cdd28f56d7c17b00498b4a946.png"></Img>
      </Link>
      {items.cartItems.length ? (
        <Badge>{items.cartItems.length}</Badge>
      ) : (
        <div></div>
      )}
    </Nav>
  );
};

export default Header;
