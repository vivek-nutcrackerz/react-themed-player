import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import ThemedControls from './ThemedControls';

export default class Player extends ReactPlayer {
  
  constructor(props) {
    super(props);
  }

  render() {
    const {theme, width, height, metadata} = this.props;

    return (
      <div className="react-themed-player" width={width} height={height}>
        {super.render()}
        <ThemedControls theme={theme} metadata={metadata}/>
      </div>);
  }
}