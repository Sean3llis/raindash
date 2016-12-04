import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';
import Footer from '../components/footer';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <div id="logo">
          <img className="logo" src="logo.svg" alt=""/>
        </div>
        <SearchBar />
        <WeatherList />
        {/*<Footer />*/}
      </div>
    );
  }
}
