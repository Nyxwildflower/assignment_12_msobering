import React from "react";
import TextProps from "./Text.types";
import styled from "styled-components";

const StyledText = styled.p<{
  $fontSize?: string;
}>`
  padding: 15px;
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "1em")};
`;

const Text = (props: TextProps) => {
  return (
    <StyledText style={{ fontSize: props.fontSize }}>{props.label}</StyledText>
  );
};

export default Text;
