import { SET_WEATHER_DETAILS } from "../../utils/Globals";

const INITIAL_STATE = {
  data: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_WEATHER_DETAILS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
