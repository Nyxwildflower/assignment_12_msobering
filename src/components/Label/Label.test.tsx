import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Label from "./Label";

afterEach(() => {
  cleanup();
});

describe("Label Component", () => {
  render(
    <Label
      label="Test Label"
      backgroundColor="#124E66"
      fontSize="3em"
      fontColor="#FFF"
    />,
  );

  const defaultLabel = screen.getByText("Test Label");

  test("Label is visible", () => {
    expect(defaultLabel).toBeVisible();
  });
});
