import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Text from "./Text";

afterEach(() => {
  cleanup();
});

describe("Text Component", () => {
  render(<Text label="This is the text" />);

  const defaultText = screen.getByText("This is the text");

  test("Text is visible", () => {
    expect(defaultText).toBeVisible();
  });
});
