import React, { Component, useState } from 'react'
import ReactPlayer from 'react-player'
import ThemedControls from './ThemedControls';
import { convertHexToRgbA } from './utils'

export default class Player extends Component {

  alteredOnPlay = undefined;
  alteredProps = undefined;
  playerRef = undefined;
  state = {
    progress: 0,
    playing: true,
    paused: true,
    setPlaying: true, 
    setSeek: 0,
    duration: 0
  }

  constructor(props) {
    super(props);
    this.setAlteredProps(props);
    this.alteredProps = { ...props, onPlay: this.alteredonPlay, 
      onPause: this.alteredonPause, onDuration: this.alteredonDuration, 
      onProgress: this.alteredonProgress, progressInterval: 400 }
    this.setTheme(props.theme);
    this.playPause = this.playPause.bind(this)
  }

  setAlteredProps(props) {
    let eventProps = ["onPlay", "onPause", "onDuration", "onProgress"]
    eventProps.forEach((val, index) => {
      if (props[val]) {
        let temp = props[val]
        this['altered'+val] = (e) => {
          this[val](e);
          temp(e);
        }
      }
      else
        this['altered'+val] = (e) => {
          this[val](e);
        }
    })
  }

  onPlay(e) {
    this.setState({ ...this.state, playing: true, paused: false });
  }

  onPause(e) {
    this.setState({ ...this.state, paused: true, playing: false });
  }

  onDuration(e) {
    console.log(e);
    this.setState({ ...this.state, duration: e });
  }

  onProgress(e) {
    this.setState({ ...this.state, progress: e.played, playedSeconds: e.playedSeconds });
  }

  setSeek(e, t) {
    console.log("set seek " + e);
    this.playerRef.seekTo(e, t);
    this.setState({ ...this.state, setPlaying: true });
  }

  setTheme(theme) {
    document.documentElement.style.setProperty('--highlight-color', theme.highlightColor);
    document.documentElement.style.setProperty('--icon-focus-color', convertHexToRgbA(theme.highlightColor, 0.3));
  }

  playPause() {
    console.log("Play pause");
    this.setState({ ...this.state, setPlaying: !this.state.setPlaying });
  }

  render() {
    const { theme, width, height, metadata } = this.props;
    this.alteredProps = { ...this.alteredProps, 
      playing: this.state.setPlaying
    }
    return (
      <div className="react-themed-player" width={width} height={height}>
        <ReactPlayer {...this.alteredProps} playing={this.state.setPlaying} ref={(r)=>this.playerRef = r}/>
        <ThemedControls theme={theme} metadata={metadata} playPause={this.playPause} 
          playerState={this.state} setSeek={(e,t)=>this.setSeek(e,t)}/>
      </div>);
  }
}