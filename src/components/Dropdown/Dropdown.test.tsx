import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dropdown from "./Dropdown";

afterEach(() => {
  cleanup();
});

describe("Dropdown Component", () => {
  render(<Dropdown label="sadness" name="dropdown" options="option 1" />);

  const defaultDropdown = screen.getByText("sadness");

  test("Dropdown is visible", () => {
    expect(defaultDropdown).toBeVisible();
  });
});
