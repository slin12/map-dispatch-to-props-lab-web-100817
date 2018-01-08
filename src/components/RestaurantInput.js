import React, { Component } from "react";
import { addRestaurant } from "../actions/restaurants";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

export class RestaurantInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      location: ""
    };
  }

  handleOnNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state);
  }

  render() {
    return (
      <form onSubmit={event => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={event => this.handleOnNameChange(event)}
            placeholder="restaurant name"
          />
        </p>
        <p>
          <input
            type="text"
            onChange={event => this.handleOnLocationChange(event)}
            placeholder="location"
          />
        </p>
        <input type="submit" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addRestaurant }, dispatch);
};

export const ConnectedRestaurantInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantInput);
