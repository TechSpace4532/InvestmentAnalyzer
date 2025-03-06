import React from "react";
import { render } from "@testing-library/react-native";
import ResultScreen from "../src/screens/ResultScreen";

describe("Result Screen", () => {
  test("Displays correct risk category", () => {
    const { getByText } = render(<ResultScreen route={{ params: { score: 12 } }} navigation={{ navigate: jest.fn() }} />);
    expect(getByText("Medium Risk")).toBeTruthy();
  });

  test("Applies animation effect", () => {
    const { getByText } = render(<ResultScreen route={{ params: { score: 22 } }} navigation={{ navigate: jest.fn() }} />);
    expect(getByText("High Risk").parent).toHaveStyle({ transform: [{ scale: 1 }] });
  });
});
