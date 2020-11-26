import React, { Component } from 'react'
import { convertHexToRgbA } from './utils'

export default class ControlsTopBar extends Component {
  render() {
    const { theme, title, subtitle } = this.props;
    const bgColor = convertHexToRgbA(theme.bgColor, 0.9);

    const controlsTopBarStyle = {
      background: "linear-gradient(to bottom, "+ bgColor +" 20%, #00000000 120%)",
      color: theme.textColor,
      position: "absolute",
      top: 0,
      left: 0,
      right:0,
      height: theme.topBarHeight
    }

    return (
      <div className="rtl-controls-top-bar" style={controlsTopBarStyle}>
        <span class="rtl-controls-top-bar-title"> {title} </span>
        <span class="rtl-controls-top-bar-subtitle"> {subtitle} </span>
      </div>
    );
  }
}