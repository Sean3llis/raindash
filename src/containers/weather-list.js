'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TransitionMotion, Motion, spring, presets } from 'react-motion';
import _ from 'lodash';
/**
 * ACTIONS
 */
import { toggleSave, closeCity } from '../actions/index';

/**
 * COMPONENTS
 */
import CityRow from '../components/city-row';

class WeatherList extends Component {
  constructor(props) {
    super(props);
    this.getDefaultStyles = this.getDefaultStyles.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.willEnter = this.willEnter.bind(this);
    this.willLeave = this.willLeave.bind(this);
  }

  getDefaultStyles() {
    return this.props.cities.map((city, i) => ({...city, key: `${city.id}`, style: {y: -100, opacity: 0}}));
  }

  getStyles() {
    return this.props.cities.map(city => {
      return {
        data: city,
        key: `${city.id}`,
        style: {
          y: spring(0, presets.wobbly),
          opacity: spring(1, presets.wobbly)
        }
      };
    });
  }

  willEnter() {
    return {
      y: -100,
      opacity: 0,
    };
  }

  willLeave() {
    return {
      opacity: spring(0),
    };
  }

  render() {
    if (this.props.cities.length) {
      return (
        <div id="weather-list">
          <TransitionMotion
            willEnter={this.willEnter}
            willLeave={this.willLeave}
            defaultStyles={this.getDefaultStyles()}
            styles={this.getStyles()}>
            {styles =>
              <div className="block">
              {styles.map(({key, style, data}) =>
                <CityRow
                  style={style}
                  key={key}
                  onToggleSave={this.props.onToggleSave}
                  onClose={this.props.onClose}
                  data={data} />
              )};
              </div>
            }
          </TransitionMotion>
        </div>
      );
    } else {
      return (
        <div id="weather-list">
          <div className="block"></div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    onToggleSave: cityID => { dispatch( toggleSave(cityID) )},
    onClose: cityID => { dispatch( closeCity(cityID) )},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
