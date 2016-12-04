import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TransitionMotion, Motion, spring, presets } from 'react-motion';
import { Link } from 'react-router';

import { toggleSave, closeCity } from '../actions/index';

import SaveIcon from '../components/save-icon';
import WeatherChart from '../components/chart-weather';
import RainChart from '../components/chart-rain';

class CityDetail extends Component {
  constructor(props) {
    super(props);
    props.cities.forEach(city => {
      if (city.id === Number(props.params.id)) this.city = city;
    });
  };

  renderTempBar(percent) {
    let style = {
      width: `${percent}%`
    };
    return (
      <div className="progress-wrapper">
        <div className="progress">
          <Motion defaultStyle={{width: 0}} style={{width: percent * 100}}>
            {value => <div className="progress-bar progress-bar-danger" style={{width: `${value.width}%`}}></div>}
          </Motion>
        </div>
      </div>
    );
  };

  render() {
    const ID = this.city.id;
    const data = this.city;
    const color = '#1e2f41';
    let closeIcon = (<i className="fa fa-close close-icon icon"></i>);
    let currentSaveIcon = (data.saved)
      ? (<i className="fa fa-toggle-on save-icon icon"></i>)
      : (<i className="fa fa-toggle-off save-icon icon"></i>);
    return (
      <div className="row city-detail card">
        <div className="col-sm-12">

        <div className="icon-wrapper">
          <span onClick={() => this.props.onClose(ID)}>
            {closeIcon}
          </span>
          <span onClick={() => this.props.onToggleSave(ID)}>
            {currentSaveIcon}
          </span>
          <span>
            <Link to={'/'}>
              <i className="fa fa-compress detail-icon icon"></i>
            </Link>
          </span>
        </div>

          <div className="rain-wrapper">
            <RainChart title={'Rain'} data={data} units="°" />
            <WeatherChart title={'Temperature'} data={data.temps} color={color} units="°" />
          </div>

        </div>
        <div className="clearfix"></div>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(CityDetail);
