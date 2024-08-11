import React from "react";
import ImgProps from "./Img.types";
import styled from "styled-components";

const StyledImg = styled.img<{
  $maxHeight?: string;
  $maxWidth?: string;
}>`
  max-height: ${(props) => (props.$maxHeight ? props.$maxHeight : "auto")}
  max-width: ${(props) => (props.$maxWidth ? props.$maxWidth : "100vw")}
`;

const Img = (props: ImgProps) => {
  return (
    <div
      style={{
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth,
        overflow: "hidden",
      }}
    >
      <StyledImg alt={props.altText} src={props.srcLink}></StyledImg>
    </div>
  );
};

export default Img;
