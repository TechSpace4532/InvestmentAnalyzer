import { createStore } from "redux";

const initialState = { answers: {} };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ANSWER":
      return { ...state, answers: { ...state.answers, [action.payload.questionId]: action.payload.score } };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
