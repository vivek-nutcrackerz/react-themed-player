import React, { Component } from 'react'
import { convertHexToRgbA } from './utils'
import { FaPlay, FaUndo, FaRedo, FaStepForward, FaStepBackward } from "react-icons/fa";
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

export default class ControlsBottomBar extends Component {

  reverseValue = 0;

  constructor(props, context) {
    super(props, context)
    this.state = {
      value: 25,
      reverseValue: 8
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value
    })
  }

  handleChangeReverse = (value) => {
    this.setState({
      reverseValue: value
    })
  }

  render() {
    const { theme } = this.props;
    const bgColor = convertHexToRgbA(theme.bgColor, 0.9);

    const controlsBottomBarStyle = {
      background: "linear-gradient(to top, " + bgColor + " 20%, #00000000 120%)",
      color: theme.textColor,
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: theme.bottomBarHeight
    }
    const bottomBarHeightInt = Number.parseInt(theme.bottomBarHeight, 10);
    const iconStyle = {
      height: bottomBarHeightInt / 3,
      margin: bottomBarHeightInt / 3,
      maxWidth: bottomBarHeightInt / 3
    }

    console.log(iconStyle);
    console.log(theme);

    return (
      <div className="rtl-controls-bottom-bar" style={controlsBottomBarStyle}>
        <div className='rtl-controls-bottom-bar-slider'>
          <Slider
            min={0}
            max={100}
            value={this.state.reverseValue}
            orientation='horizontal'
            tooltip={false}
            onChange={this.handleChangeReverse}
          />
        </div>
        <div className="rtl-controls-bottom-bar-buttons">
          <div style={iconStyle}>
            <FaPlay size={bottomBarHeightInt / 3} />
          </div>
          <div style={iconStyle}>
            <FaUndo size={bottomBarHeightInt / 3} />
          </div>
          <div style={iconStyle}>
            <FaRedo size={bottomBarHeightInt / 3} />
          </div>
          <div style={iconStyle}>
            <FaStepBackward size={bottomBarHeightInt / 3} />
          </div>
          <div style={iconStyle}>
            <FaStepForward size={bottomBarHeightInt / 3} />
          </div>
        </div>
      </div>
    );
  }
}