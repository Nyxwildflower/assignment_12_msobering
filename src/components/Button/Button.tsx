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

const StyledButton = styled.button<{
  $backgroundColor?: string;
  $size?: string;
}>`
  border: none;
  border-radius: 25px;
  width: ${(props) => props.$size};
  ${(props) => {
    switch (props.disabled) {
      case true:
        return `
          background-color: #999;
        `;
      default:
        return `
          background-color: ${props.$backgroundColor};
          &:hover {
            opacity: 0.5;
            cursor: pointer;
          }
        `;
    }
  }}
  padding: 1em;
  font-size: 1em;
  color: #d3d9d4;
`;

const Button = (props: ButtonProps) => {
  return (
    <StyledButton
      style={{ background: props.backgroundColor, width: props.size }}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.label}
    </StyledButton>
  );
};

export default Button;
