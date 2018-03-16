import React, { Component } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import './Demo.scss';

class Demo extends Component {
  constructor() {
    super();

    this.state = {
      progress: 0,
      position: 'top'
    };
  }

  setProgress = (progress) => {
    this.setState({ progress });
  };

  setPosition = (position) => {
    this.setState({ position });
  };

  render() {
    return (
      <div className="demo-wrapper">
        <ProgressBar
          position={this.state.position}
          progress={this.state.progress}
        />
        <h1>Progress bar Demo</h1>
        <button onClick={() => this.setPosition('top')}>Set position Top</button>
        <button onClick={() => this.setPosition('bottom')}>Set position Bottom</button>
        <button onClick={() => this.setProgress(25)}>Set state 25%</button>
        <button onClick={() => this.setProgress(50)}>Set state 50%</button>
        <button onClick={() => this.setProgress(75)}>Set state 75%</button>
        <button onClick={() => this.setProgress(100)}>Set state 100%</button>
      </div>
    );
  }
}

export default Demo;
