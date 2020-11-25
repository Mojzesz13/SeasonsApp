import React, { Component } from 'react';
import SeasonDisplay from './SeasonsDisplay';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errorMessage: '',
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    const { errorMessage, lat } = this.state;

    if (errorMessage && !lat) {
      return <div>{this.state.errorMessage}</div>;
    }
    if (lat && !errorMessage) {
      return <div className='App'> Latitude: {lat} </div>;
    }
    return <div>Loading...</div>;
  }
}

export default App;
