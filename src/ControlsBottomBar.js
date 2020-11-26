import React, { Component } from 'react'
import { convertHexToRgbA } from './utils'

export default class ControlsBottomBar extends Component {
  render() {
    const { theme } = this.props;
    const bgColor = convertHexToRgbA(theme.bgColor, 0.9);

    const controlsBottomBarStyle = {
      background: "linear-gradient(to top, "+ bgColor +" 20%, #00000000 120%)",
      color: theme.textColor,
      position: "absolute",
      bottom: 0,
      left: 0,
      right:0,
      height: theme.bottomBarHeight
    }

    return (
      <div className="rtl-controls-bottom-bar" style={controlsBottomBarStyle}>
      </div>
    );
  }
}