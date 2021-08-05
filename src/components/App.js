import React, { Component } from "react";
import CreateLink from "./CreateLink";
import LinkList from "./LinkList";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <CreateLink/>
        </div>
        <div>
          <LinkList/>
        </div>
      </div>
    );
  }
}

export default App;
