'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div id="search-bar">
      <div className="block">
      <form onSubmit={this.onFormSubmit}>
        <input
          onChange={this.onInputChange}
          value={this.state.term}
          placeholder="City Name"
          type="text"
        />
        <button type="submit"><i className="fa fa-plus" aria-hidden="true"></i></button>
      </form>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFormSubmit: city => {
      dispatch(fetchWeather(city));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
