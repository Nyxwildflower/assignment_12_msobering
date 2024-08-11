import React from "react";
import CardProps from "./Card.types";
import styled from "styled-components";

const StyledCard = styled.div<{
  $backgroundColor?: string;
  $size?: string;
}>`
  border-radius: 20px;
  width: ${(props) => props.$size};
  background-color: ${(props) => props.$backgroundColor};
  padding: 10px 20px;
`;

const StyledTitle = styled.h1`
  margin: 10px 0px;
  font-size: 3em;
`;

const StyledSubtitle = styled.h2`
  margin: 0px;
  font-size: 1.5em;
`;

const StyledContent = styled.p`
  font-size: 1em;
`;

const Card = (props: CardProps) => {
  return (
    <StyledCard
      style={{ background: props.backgroundColor, width: props.size }}
    >
      <StyledTitle>{props.title}</StyledTitle>
      <StyledSubtitle>{props.subtitle}</StyledSubtitle>
      <StyledContent>{props.content}</StyledContent>
    </StyledCard>
  );
};

export default Card;
