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
            <p>H</p>
            <input
              className="range-input"
              min="0"
              max="360"
              type="range"
              value={this.state.h}
              onChange={this.changeValueH}
            />
            <p>{this.state.h}</p>
          </div>
          <div className="range-section">
            <p>S</p>
            <input
              className="range-input"
              type="range"
              value={this.state.s}
              onChange={this.changeValueS}
            />
            <p>{this.state.s}</p>
          </div>
          <div className="range-section">
            <p>L</p>
            <input
              className="range-input"
              min="0"
              max="100"
              type="range"
              value={this.state.l}
              onChange={this.changeValueL}
            />
            <p>{this.state.l}</p>
          </div>
          <div className="range-section">
            <p>A </p>
            <input
              className="range-input"
              min="0"
              max="100"
              type="range"
              value={this.state.a}
              onChange={this.changeValueA}
            />
            <p>{this.state.a}</p>
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
    )
  }
}

export default App
