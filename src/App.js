import React, { Component } from 'react'
import PcIndex from './components/pc'
import MobileIndex from './components/mobile'
import MediaQuery from 'react-responsive'

class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width: 1224px)">
          <PcIndex></PcIndex>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <MobileIndex></MobileIndex>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
