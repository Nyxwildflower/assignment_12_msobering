import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Img from "./Img";

afterEach(() => {
  cleanup();
});

describe("Img Component", () => {
  render(
    <Img
      srcLink="leaves.png"
      altText="An illustration of leaves in warm colours"
    />,
  );

  const defaultImg = screen.getByRole("img");

  test("Image is visible", () => {
    expect(defaultImg).toBeVisible();
  });
});
