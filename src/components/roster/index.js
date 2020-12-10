import React from 'react';
import { render } from 'react-dom';
import Member from '../member';

export default class Roster extends React.Component {

  render(){
    const {team} = this.props;

    return(
      <div>
        <h2>Beam Team Team</h2>
        {
          team.map((teammate) => <Member key={teammate.name} info={teammate} />)
        }
      </div>
    )
  }
}