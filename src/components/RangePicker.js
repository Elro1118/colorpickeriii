import React, { Component } from 'react'

class RangePicker extends Component {
  render() {
    return (
      <div className="range-section">
        <input className="range-input" type="range" />
        <p className="title-range">{this.props.titleRange}</p>
      </div>
    )
  }
}

export default RangePicker
