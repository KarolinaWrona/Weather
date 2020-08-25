import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import HomeReducer from '../../modules/details/reducers';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    details: HomeReducer
  });

export default createRootReducer;
