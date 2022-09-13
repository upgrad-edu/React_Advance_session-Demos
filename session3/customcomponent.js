import React, { Component } from 'react';
import emoji from './emoji.svg'

export default class Instructions extends Component {

  render() {
    return(
      <>
        <img alt="laughing crying emoji" src={emoji} />
        <p>Click on an emoji to view the emoji short name.</p>
      </>
    )
  }
}
