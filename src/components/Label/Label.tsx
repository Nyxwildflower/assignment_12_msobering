import React from "react";
import LabelProps from "./Label.types";
import styled from "styled-components";

const StyledLabel = styled.h2<{
  $backgroundColor?: string;
  $fontSize?: string;
  $fontColor?: string;
}>`
  padding: 10px;
  backgroundcolor: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : "none"};
  border-radius: ${(props) => (props.$backgroundColor ? "0px" : "10px")};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "1em")};
  color: ${(props) => (props.$fontColor ? props.$fontColor : "#000")};
`;

const Label = (props: LabelProps) => {
  return (
    <StyledLabel
      style={{
        background: props.backgroundColor,
        fontSize: props.fontSize,
        color: props.fontColor,
      }}
    >
      {props.label}
    </StyledLabel>
  );
};

export default Label;
