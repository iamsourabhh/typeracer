import createSagaMiddleware from "redux-saga";
import { throttle } from "lodash";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import { loadState, saveState } from "../common/localStorage";
import getRandomTextSaga from "../pages/TypeRacer/TypeRacer.saga";
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const persisitedState = loadState();

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    persisitedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(getRandomTextSaga);
  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }, 1000)
  );

  return store;
};

export default configureStore;
