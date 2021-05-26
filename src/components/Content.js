import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import "firebase/firestore";
import { db } from "../firebase";
import styled from "@emotion/styled";

export const Content = () => {
  const [carddata, setCarddata] = useState([]);

  useEffect(() => {
    db.collection("card").onSnapshot((snapshot) =>
      setCarddata(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const Container = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    width: auto;

    background-color: #ebebeb;
    @media (max-width: 400px) {
      display: flex;
      flex-wrap: wrap;
    }
  `;

  return (
    <Container>
      {carddata.map((card) => (
        <Card key={card.id} id={card.id} data={card.data} />
      ))}
    </Container>
  );
};

export default Content;
