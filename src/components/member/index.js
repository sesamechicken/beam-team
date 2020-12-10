import React from "react";
import './member.css';

export default class Member extends React.Component {


  render(){
    const { avatar, name, bio } = this.props.info;

    return(
      <div className='profile'>
        <img height='200' src={avatar} />
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
    )
  }
}