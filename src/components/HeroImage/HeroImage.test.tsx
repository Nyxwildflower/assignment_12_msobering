import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroImage from "./HeroImage";

afterEach(() => {
  cleanup();
});

describe("Hero Image Component", () => {
  render(
    <HeroImage
      srcLink="test-image.jpg"
      altText="An illustration of leaves in warm colours"
    />,
  );

  const defaultHeroImage = screen.getByRole("img");

  test("Hero Image is visible", () => {
    expect(defaultHeroImage).toBeVisible();
  });
});
