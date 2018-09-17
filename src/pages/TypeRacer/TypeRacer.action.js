import {
  GET_RANDOM_TEXT,
  USER_INPUT,
  RACE_COMPLETE
} from "../../redux/actions/actionTypes";

export const getRandomText = () => {
  return {
    type: GET_RANDOM_TEXT
  };
};

export const onInput = inputText => {
  return {
    type: USER_INPUT,
    payload: {
      inputText
    }
  };
};

export const raceComplete = () => {
  return {
    type: RACE_COMPLETE
  };
};
