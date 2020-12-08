import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun',
  },
  winter: {
    text: 'Burr, it is chilly',
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : ' winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

class SeasonDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const season = getSeason(this.props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    
    return (
      <div>
        <i className={`${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`${iconName} icon`} />
      </div>
    );
  }
}
export default SeasonDisplay;
