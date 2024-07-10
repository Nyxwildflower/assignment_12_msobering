import React from "react";
import ButtonProps from "./Button.types";
import styled from "styled-components";

/*
https://visme.co/blog/website-color-schemes/
212A31
2E3944
124E66
748D92
D3D9D4
*/

const StyledButton = styled.button`
  border: 2px solid #212A31;
  border-radius: 25px;
  padding: 1em;
  background-color: #212A31;
  font-size: 1em;
  color: #D3D9D4;
`;

const Button = (props: ButtonProps) => {
  return <StyledButton onClick={props.onClick}>{props.label}</StyledButton>;
};

export default Button;