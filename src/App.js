import React, { Component } from 'react'

class App extends Component {
  state = {
    h: 80,
    s: 60,
    l: 20,
    a: 100,
    lists: []
  }

  addColorToList = () => {
    this.setState({
      lists: this.state.lists.concat(
        `hsla(${this.state.h},${this.state.s}%,${this.state.l}%,${
          this.state.a
        }%)`
      )
    })
  }

  changeValueH = event => {
    this.setState({
      h: event.target.value
    })
  }
  changeValueS = event => {
    this.setState({
      s: event.target.value
    })
  }
  changeValueL = event => {
    this.setState({
      l: event.target.value
    })
  }
  changeValueA = event => {
    this.setState({ a: event.target.value })
  }

  render() {
    return (
      <div className="main">
        <h2>HSL COLOR PICKER</h2>
        <div className="color-picker-section">
          <div className="external-box-section">
            <div
              className="box-section"
              style={{
                backgroundColor: `hsla(${this.state.h},${this.state.s}%,${
                  this.state.l
                }%, ${this.state.a}%)`
              }}
            />
            <p className="hsla-section">
              hsla({this.state.h},{this.state.s}%,{this.state.l}%,
              {this.state.a}%)
            </p>
          </div>
          <div className="ranges-section">
            <div className="range-section">
              <p>H &nbsp;</p>
              <input
                className="range-input"
                min="0"
                max="360"
                type="range"
                value={this.state.h}
                onChange={this.changeValueH}
              />
              <p>&nbsp;{this.state.h}</p>
            </div>
            <div className="range-section">
              <p>S &nbsp;</p>
              <input
                className="range-input"
                type="range"
                value={this.state.s}
                onChange={this.changeValueS}
              />
              <p>&nbsp;{this.state.s}</p>
            </div>
            <div className="range-section">
              <p>L &nbsp;</p>
              <input
                className="range-input"
                min="0"
                max="100"
                type="range"
                value={this.state.l}
                onChange={this.changeValueL}
              />
              <p>&nbsp;{this.state.l}</p>
            </div>
            <div className="range-section">
              <p>A &nbsp;</p>
              <input
                className="range-input"
                min="0"
                max="100"
                type="range"
                value={this.state.a}
                onChange={this.changeValueA}
              />
              <p>&nbsp;{this.state.a}</p>
            </div>
            <div>
              <button onClick={this.addColorToList}>Remember Color</button>
            </div>
          </div>

          <div className="list-hsl">
            <h2> List of HSL </h2>
            <ul>
              {this.state.lists.map(color => {
                return (
                  <li>
                    {color}
                    <div
                      className="little-box"
                      style={{
                        backgroundColor: `${color}`
                      }}
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
