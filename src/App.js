import React, { Component } from "react";
import Instructions from "./components/Instructions";
import Resume from "./components/Resume";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Instructions />
        <Resume />
      </div>
    );
  };
}



export default App;
