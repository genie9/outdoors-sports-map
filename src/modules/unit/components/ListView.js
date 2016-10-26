import React, {Component, PropTypes} from 'react';
import {View} from './View.js';

const UnitListItem = ({name, address, details}) =>
  <div className="list-view-item">
    <div className="list-view-item__unit-name">{name}</div>
    <div className="list-view-item__unit-address">{address}</div>
    <div className="list-view-item__unit-details">{details}</div>
  </div>;


export class ListView extends Component {
  static propTypes = {
    units: PropTypes.array
  };

  render() {
    const {units} = this.props;
    return (
      <View id="list-view" className="list-view">
          {units && units.map( (unit, index) => <UnitListItem name={unit.name.fi} key={index} />)}
      </View>
    );
  }
}