import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import QuestionnaireScreen from "../src/screens/QuestionnaireScreen";
import { getQuestions } from "../src/services/QuestionDataProvider";

jest.mock("../src/services/QuestionDataProvider", () => ({
  getQuestions: jest.fn(),
}));

describe("Questionnaire Screen", () => {
  beforeEach(() => {
    getQuestions.mockReturnValue([
      {
        id: "1",
        question: "What is your investment experience?",
        options: ["Novice", "Intermediate", "Expert"],
        scores: [1, 2, 3],
      },
    ]);
  });

  test("Renders questionnaire screen correctly", () => {
    const { getByText } = render(<QuestionnaireScreen navigation={{ navigate: jest.fn() }} />);
    expect(getByText("What is your investment experience?")).toBeTruthy();
  });

  test("Allows user to select an answer", () => {
    const { getByTestId } = render(<QuestionnaireScreen navigation={{ navigate: jest.fn() }} />);
    fireEvent.press(getByTestId("option-1-0"));
    
    expect(getByTestId("option-1-0")).toHaveStyle({ backgroundColor: "#4CAF50" });
  });
});
