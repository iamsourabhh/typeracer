import {
  GET_RANDOM_TEXT_LOADING,
  GET_RANDOM_TEXT_SUCCESS,
  GET_RANDOM_TEXT_ERROR,
  USER_INPUT,
  RACE_COMPLETE
} from "../../redux/actions/actionTypes";

const INITIAL_STATE = {
  text: "",
  isLoading: false,
  isError: false,
  inputText: "",
  matchedText: "",
  pointerLocation: 0,
  remainingText: "",
  typedText: "",
  errorPointer: 0,
  wordCount: 0,
  disableType: false
};

const typeRacerReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_RANDOM_TEXT_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case GET_RANDOM_TEXT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        text: payload.text,
        newText: payload.text,
        pTagArray: payload.pTagArray
      };
    case GET_RANDOM_TEXT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        text: ""
      };
    case USER_INPUT:
      const { inputText } = payload;
      const { text } = state;
      if (
        state.text.charAt(state.pointerLocation) ===
        inputText.charAt(inputText.length - 1)
      ) {
        let iText = "";
        let wordCount = state.wordCount;
        // if spacebar is pressed and is matched empty inputbox
        if (inputText.charAt(inputText.length - 1) === " ") {
          iText = "";
          wordCount++;
        } else {
          iText = payload.inputText;
        }
        // if previous state was error

        if (state.isError === true) {
          iText = inputText.charAt(inputText.length - 1);
        }
        return {
          ...state,
          inputText: iText,
          pointerLocation: state.pointerLocation + 1,
          matchedText: text.substring(0, state.pointerLocation + 1),
          newText: text.substring(state.pointerLocation + 1),
          errorText: "",
          isError: false,
          errorPointer: 0,
          wordCount: wordCount
        };
      } else {
        let errorTill;
        if (state.errorPointer === 0) {
          errorTill = state.pointerLocation + 1;
        } else {
          errorTill = state.errorPointer + 1;
        }
        return {
          ...state,
          errorPointer: errorTill,
          inputText: payload.inputText,
          // errorText: text.substring(state.pointerLocation, errorTill),
          errorText: text.substring(state.pointerLocation, errorTill),
          isError: true,
          newText: text.substr(errorTill)
        };
      }
    case RACE_COMPLETE:
      return {
        ...state,
        disableType: true,
        toShowResults: true
      };
    default:
      return state;
  }
};
export default typeRacerReducer;
