
import React from 'react';

export default class Keypad extends React.Component {
    render() {
      return <input type="password" onKeyUp={this.handleClick}></input>;
    }

    handleClick = () =>{
        console.log("Entering password...")
    }
  }