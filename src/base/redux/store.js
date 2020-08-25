import { routerMiddleware } from "connected-react-router";
import thunk from 'redux-thunk';
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import createRootReducer from "./rootReducer";
export const history = createBrowserHistory();

export default (initialState) => {
  const middlewares = [thunk, routerMiddleware(history)];

  const store = createStore(
    createRootReducer(history),
    initialState,
    applyMiddleware(...middlewares)
  );

    return store;

};
