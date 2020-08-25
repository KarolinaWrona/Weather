import axios from "axios";
import { API_KEY, SET_WEATHER_DETAILS, appURLS } from "../../utils/Globals";

export const getWeatherDetails = (city, history) => {
  return (dispatch) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pl&units=metric`;
    return axios
      .get(url)
      .then((response) => {
        dispatch({
          type: SET_WEATHER_DETAILS,
          payload: response.data,
        });
        history.push(appURLS.DETAILS);
      })
      .catch((error) => alert("This city doesn't exist"));
  };
};
