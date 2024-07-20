import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

afterEach(() => {
  cleanup();
})

describe("Button Component", () => {
  render(<Button onClick={() => {console.log("Button Pressed")}} label="Click Me"/>)
  const button = screen.getAllByText("Click Me")[0];

  test("Button is visible", () => {
    expect(button).toBeInTheDocument();
  })
})