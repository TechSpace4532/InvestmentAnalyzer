import React from "react";
import { render } from "@testing-library/react-native";
import ResultScreen from "../src/screens/ResultScreen";

describe("Result Screen", () => {
  test("Displays correct risk category", () => {
    const { getByText } = render(<ResultScreen route={{ params: { score: 12 } }} navigation={{ navigate: jest.fn() }} />);
    expect(getByText("Medium Risk")).toBeTruthy();
  });

  test("Applies animation effect", () => {
    const { getByTestId } = render(<ResultScreen route={{ params: { score: 22 } }} navigation={{ navigate: jest.fn() }} />);
    expect(getByTestId("animatedContainer")).toHaveStyle({ transform: [{ scale: 0 }] });
});
});
