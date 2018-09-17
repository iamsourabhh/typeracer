import { combineReducers } from "redux";
import typeRacerReducer from "../pages/TypeRacer/TypeRacer.reducer";
const rootReducer = combineReducers({
  app: typeRacerReducer
});

export default rootReducer;
