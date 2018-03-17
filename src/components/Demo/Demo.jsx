import React, { Component } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import './Demo.scss';

class Demo extends Component {
  constructor() {
    super();

    this.state = {
      progress: 0,
      position: 'top',
      lineHeight: 2,
      lineColor: '#77b6ff'
    };
  }

  handleState = (key, value) => this.setState({ [key]: value });

  render() {
    return (
      <div className="demo-wrapper">
        <ProgressBar
          position={this.state.position}
          progress={this.state.progress}
          lineHeight={this.state.lineHeight}
          lineColor={this.state.lineColor}
        />
        <h1>Progress Bar Demo</h1>
        <button onClick={() => this.handleState('lineHeight', 8)}>Set line height 8px</button>
        <button onClick={() => this.handleState('lineHeight', 2)}>Set line height 2px (default)</button>
        <button onClick={() => this.handleState('lineColor', 'red')}>Set line color to red</button>
        <button onClick={() => this.handleState('lineColor', '#77b6ff')}>Set line color to blue (default)</button>
        <button onClick={() => this.handleState('position', 'top')}>Set position Top</button>
        <button onClick={() => this.handleState('position', 'bottom')}>Set position Bottom</button>
        <button onClick={() => this.handleState('progress', 25)}>Set state 25%</button>
        <button onClick={() => this.handleState('progress', 50)}>Set state 50%</button>
        <button onClick={() => this.handleState('progress', 75)}>Set state 75%</button>
        <button onClick={() => this.handleState('progress', 100)}>Set state 100%</button>
      </div>
    );
  }
}

export default Demo;
