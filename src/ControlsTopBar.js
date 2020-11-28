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
    const topBarHeightInt = Number.parseInt(theme.topBarHeight,10);
    const textStyle = {
      height: (topBarHeightInt*3)/5,
      paddingTop: topBarHeightInt/5
    }
    const titleStyle = {...textStyle, fontSize: (topBarHeightInt*3)/5}
    const subtitleStyle = {...textStyle, fontSize: (topBarHeightInt*2)/5, color: "rga(255,255,255, 0.7)"}

    return (
      <div className="rtl-controls-top-bar" style={controlsTopBarStyle}>
        <span class="rtl-controls-top-bar-title" style={titleStyle}> {title} </span>
        <span class="rtl-controls-top-bar-subtitle" style={subtitleStyle}> {subtitle} </span>
      </div>
    );
  }
}