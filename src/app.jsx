const axios = require('axios');
import TopSpot from './topspot';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    }
  }

  componentWillMount() {
    axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }

  // renderTopSpotsData() {
  //   return this.state.topspots.map(item => {
  //     return (
  //       <div className='panel panel-default info'>
  //         <div className='panel-body'>
  //           <h3>{item.name}</h3>
  //           <h5>{item.description}</h5>
  //         </div>
  //       </div>  
  //     );
  //   });
  // };

  render() {
    return (
      <div className='App'>
        <div className='panel panel-default'>
          <div className='panel-body'>
            <h2>San Diego Top Spots</h2>
            <h4>A list of the top 30 places to see in San Diego, California</h4>
          </div>
        </div>
        {/* {this.renderTopSpotsData()} */}
        {this.state.topspots.map(topspot => (
        <TopSpot
            key={topspot.id}
            name={topspot.name}
            description={topspot.description}
            location={topspot.location} />
    ))}
      </div>
    );
  }
}

export default App;







   