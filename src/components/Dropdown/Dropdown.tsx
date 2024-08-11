import React from "react";
import DropdownProps from "./Dropdown.types";
import styled from "styled-components";

const StyledDropdown = styled.select<{
  $backgroundColor?: string;
  $size?: string;
}>`
  width: ${(props) => props.$size};
  background-color: ${(props) => props.$backgroundColor};
  padding: 5px 10px;
`;

const StyledLabel = styled.label``;

const StyledOption = styled.option``;

const Dropdown = (props: DropdownProps) => {
  return (
    <div>
      <StyledLabel>{props.label}</StyledLabel>
      <StyledDropdown
        name={props.name}
        style={{ background: props.backgroundColor, width: props.size }}
      >
        <StyledOption value={props.options}>{props.options}</StyledOption>

        {/* {props.options.map((option: any) => {
        <StyledOption value={option}>{option}</StyledOption>
      })} */}
      </StyledDropdown>
    </div>
  );
};

export default Dropdown;
