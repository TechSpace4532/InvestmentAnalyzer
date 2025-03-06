import { Strings } from "../constants/Strings";

export const getRiskCategory = (score) => {
  if (score <= 10) {
    return Strings.lowRisk;
} else if (score <= 20) {
    return Strings.mediumRisk;
} else {
    return Strings.highRisk;
}
};
