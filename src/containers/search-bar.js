'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/index';

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
    this.props.fetchWeather(this.state.term);
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
      <div className="collapse-search-bar">
      <i className="fa fa-long-arrow-up"></i>
      </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
