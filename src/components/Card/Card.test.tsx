import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";

afterEach(() => {
  cleanup();
});

describe("Card Component", () => {
  render(
    <Card
      backgroundColor={"#D3D9D4"}
      title="test"
      subtitle="subtitle"
      content="Content with subtitle"
    />,
  );

  const defaultCard = screen.getByText("test").parentElement;

  test("Card is visible", () => {
    expect(defaultCard).toBeVisible();
  });
});
