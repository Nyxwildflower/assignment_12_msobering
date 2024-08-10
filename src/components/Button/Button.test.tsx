import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

afterEach(() => {
  cleanup();
});

describe("Button Component", () => {
  render(
    <Button
      onClick={() => {
        console.log("Button Pressed");
      }}
      label="Click Me"
    />,
  );

  render(
    <Button
      disabled
      onClick={() => {
        console.log("Button Pressed");
      }}
      label="Don't Click Me"
    />,
  );

  const defaultButton = screen.getByText("Click Me");
  const disabledButton = screen.getByText("Don't Click Me");

  test("Button is visible", () => {
    expect(defaultButton).toBeVisible();
  });

  test("Disabled button is grey", () => {
    expect(disabledButton).toHaveStyle("background-color: #999;");
  });
});
