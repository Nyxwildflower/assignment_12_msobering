import React from "react";
import HeroImageProps from "./HeroImage.types";
import styled from "styled-components";

const StyledHeroImage = styled.img<{
  $maxHeight?: string;
}>`
  ${(props) => {
    if (props.$maxHeight) {
      return `
        object-fit: cover;
        object-position: 50% 50%;
      `;
    }
  }}
`;

const HeroImage = (props: HeroImageProps) => {
  return (
    <div style={{ width: "100%", height: props.maxHeight, overflow: "hidden" }}>
      <StyledHeroImage
        alt={props.altText}
        src={props.srcLink}
      ></StyledHeroImage>
    </div>
  );
};

export default HeroImage;
