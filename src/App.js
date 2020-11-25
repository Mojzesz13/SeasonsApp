import React, {Component} from 'react';
import SeasonDisplay from './SeasonsDisplay';


class App extends Component {
  constructor( props ) {
    super(props);

    this.state = {
      lat:"null"
    };
  }

  render() { 
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
  return (
    <div className="App">
    
    <SeasonDisplay/>
    </div>
  );
}}

export default App;
