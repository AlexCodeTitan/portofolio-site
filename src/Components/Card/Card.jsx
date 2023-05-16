import React from "react";
import { CardContainer } from "./Card.style";

function Card({ index, title, text }) {
  return (
    <CardContainer>
      <span>0{index + 1}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </CardContainer>
  );
}

export default Card;
