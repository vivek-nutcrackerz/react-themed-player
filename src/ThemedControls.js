import React, { Component } from 'react'
import ControlsBottomBar from './ControlsBottomBar';
import ControlsTopBar from './ControlsTopBar';

export default class ThemedControls extends Component {


  render() {

    const {theme, metadata, playPause, playerState, setSeek} = this.props;

    return (
      <div className="rtl-controls-container" style={{}}>
        <ControlsTopBar theme={theme} title={metadata.title} subtitle={metadata.subtitle}/>
        <ControlsBottomBar theme={theme} playPause={playPause} playerState={playerState}
          setSeek={setSeek}/>
      </div>
    );
  }
}
