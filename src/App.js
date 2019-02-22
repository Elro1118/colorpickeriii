import React, { Component } from 'react'

class App extends Component {
  state = {
    h: 80,
    s: 60,
    l: 20,
    lists: []
  }

  addColorToList = () => {
    this.setState({
      lists: this.state.lists.concat(
        `hsl(${this.state.h},${this.state.s}%,${this.state.l}%)`
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
  render() {
    return (
      <div className="color-picker-section">
        <div
          className="box-section"
          style={{
            backgroundColor: `hsl(${this.state.h},${this.state.s}%,${
              this.state.l
            }%)`
          }}
        >
          My Box
        </div>
        <div className="ranges-section">
          <p>
            H{' '}
            <input
              className="range-input"
              type="range"
              value={this.state.h}
              onChange={this.changeValueH}
            />
          </p>
          <p>
            S{' '}
            <input
              className="range-input"
              type="range"
              value={this.state.s}
              onChange={this.changeValueS}
            />
          </p>
          <p>
            L{' '}
            <input
              className="range-input"
              type="range"
              value={this.state.l}
              onChange={this.changeValueL}
            />
          </p>
          <div>
            <button onClick={this.addColorToList}>Remember Color</button>
          </div>
        </div>

        <div className="list-hsl">
          <h2> List of HSL </h2>
          <ul>
            {this.state.lists.map(color => {
              return <li>{color}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
