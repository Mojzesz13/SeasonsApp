import React, { Component } from 'react';
import SeasonDisplay from './SeasonsDisplay';

class App extends Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentWillUnmount() {
    console.log('test3');
  }

  render() {
    const { errorMessage, lat } = this.state;

    if (errorMessage && !lat) {
      return <div>{errorMessage}</div>;
    }
    if (lat && !errorMessage) {
      return <SeasonDisplay lat={lat} />;
    }
    return <div>Loading...</div>;
  }
}

export default App;
