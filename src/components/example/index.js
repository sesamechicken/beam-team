import React from 'react';
import './example.css';
import hiker from './hiker.png';

export default class example extends React.Component {

  render(){
    return(
      <React.Fragment>
        <h1> Hello!</h1>
        <div>
          <img className={'krap_hiker'} src={hiker} alt='KRAP hiker' />
          <p> I like to think of this project as if...</p>
          <blockquote>Create React App and Storybook had a child and she grew up to leave home and 
            backpack across Europe to find herself.
          </blockquote>
          <p>I hope this allows you to import your npm packages/components into this app so you can work 
            on them in a Storybook-type environment, except with the ability to control <strong>everything</strong>, including the Webpack config.
          </p>
          <p>I have provided you with redux AND react-router. Most (Kroger) packages rely on one of these to work, so now you can use routing and 
            manage global state.
          </p>
          <p>Lastly, if you'd like to contribute to what is scaffolded out when people run the <code>krap</code> command, please
          check out the <a href='https://gitlab.kroger.com/test-and-learn/krap'>repo for this project here</a> and
          consider contributing! 
          </p>
        </div>
      </React.Fragment>
    )
  }
}