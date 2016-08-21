import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';
import Footer from '../components/footer';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <SearchBar />
        <WeatherList />
        {/*<Footer />*/}
      </div>
    );
  }
}
