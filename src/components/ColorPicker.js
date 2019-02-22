import React, { Component } from 'react'
import RangePicker from './RangePicker'

class ColorPicker extends Component {
  state = {
    team1Score: 0,
    team2Score: 0,
    team1Name: 'Team 1',
    team2Name: 'Team 2',
    team1UserInput: ''
  }
  render() {
    return (
      <div
        className="color-range-section"
        style={{ backgroundColor: `hsl(50,8%,20%)` }}
      >
        <div className="box-section">My Box</div>
        <div className="ranges-section">
          <RangePicker titleRange="H" />
          <RangePicker titleRange="S" />
          <RangePicker titleRange="L" />
        </div>
      </div>
    )
  }
}

export default ColorPicker
