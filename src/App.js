import React, { Component} from 'react';
import Example from './components/example';
import Roster from './components/roster';
import ConnectedComponentExample from './components/connected_component';
import styles from './app.css';
import members from './members.json'

class App extends Component{

  render(){
    console.log(members)
    return(
      <div className="App">
        <div>logo</div>
        <div>stats</div>
        <Roster team={members} />
      </div>
    );
  }
}

export default App;
