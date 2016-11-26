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
    this.submitIcon = this.submitIcon.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: '' });
  }

  submitIcon() {
    if (this.props.requestingWeather) {
      return (<i className="fa fa-circle-o-notch fa-fw fa-spin" aria-hidden="true"></i>)
    } else {
      return (<i className="fa fa-plus" aria-hidden="true"></i>);
    }
  }

  render() {
    return (
      <div id="search-bar">
      <div className="block">
      <form onSubmit={this.onFormSubmit}>
        <input
          tabIndex={1}
          disabled={this.props.requestingWeather}
          onChange={this.onInputChange}
          value={this.state.term}
          placeholder="City Name"
          type="text"
        />
        <button type="submit">{this.submitIcon()}</button>
      </form>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state ~~>', state);
  return {
    cities: state.cities,
    requestingWeather: state.requestingWeather
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
