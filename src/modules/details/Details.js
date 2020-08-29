import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./stylesDetails.css";

class Details extends Component {
  goBackAction = () => this.props.history.goBack();

  render() {
    const { data } = this.props.details;

    if (data === null) {
      this.goBackAction();
      return null;
    }

    const temp = Math.round(data.main.temp);

    return (
      <div className="details d-flex justify-content-center align-items-center">
        <div className="details_box">
          <h2>{data.name}</h2>
          <img
            src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            alt="Weather icon"
          />
          <p>{data.weather[0].description}</p>
          <p>Temperature: {temp}°C</p>
          <p>Pressure: {data.main.pressure} hPa</p>
          <p>Wind: {data.wind.speed} m/s </p>
        </div>
        <button className="btn-back" onClick={this.goBackAction}>
          Back
        </button>
      </div>
    );
  }
}

function mapStateToProps({ details }) {
  return {
    details,
  };
}

export default withRouter(connect(mapStateToProps)(Details));
