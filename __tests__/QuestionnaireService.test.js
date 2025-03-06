import { getRiskCategory } from "../src/services/QuestionnaireService";

test("Returns Low Risk for score <= 10", () => {
  expect(getRiskCategory(7)).toBe("Low Risk");
});

test("Returns Medium Risk for score between 11 and 20", () => {
  expect(getRiskCategory(15)).toBe("Medium Risk");
});

test("Returns High Risk for score > 20", () => {
  expect(getRiskCategory(21)).toBe("High Risk");
});
