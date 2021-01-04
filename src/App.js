import React, { Component } from 'react';
import SeasonDisplay from './SeasonsDisplay';
import Spinner from './Spinner';

class App extends Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContnet() {
    const { errorMessage, lat } = this.state;

    if (errorMessage && !lat) {
      return <div>{errorMessage}</div>;
    }
    if (lat && !errorMessage) {
      return <SeasonDisplay lat={lat} />;
    }
    return <Spinner message='Plese accept location request' />;
  }

  render() {
    return (
      <div style={{ border: '5px solid red' }} className='border'>
        {this.renderContnet()}
      </div>
    );
  }
}

export default App;
