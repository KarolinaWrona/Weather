import React, { Component } from "react";
import Search from "../../components/Search";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getWeatherDetails } from "../details/actions";
import "./styles.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
    };
  }

  onChangeValue = (value) => this.setState({ searchValue: value });

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.getWeatherDetails(this.state.searchValue, this.props.history);
  };

  render() {
    return (
      <div className="home d-flex align-items-center justify-content-center">
        <form onSubmit={this.handleSubmit}>
          <Search
            searchValue={this.state.searchValue}
            onChangeValue={this.onChangeValue}
            isRequired
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getWeatherDetails,
};

export default withRouter(connect(null, mapDispatchToProps)(Home));
