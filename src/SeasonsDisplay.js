import React, { Component } from 'react';

class SeasonDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>Latitude: {this.props.lat}</div>;
  }
}
export default SeasonDisplay;
