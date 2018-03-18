import React, { Component } from 'react';
import { ProgressBar } from '../ProgressBar/ProgressBar';
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
          zIndex={1000}
        />
        <h1>Progress Bar Demo</h1>
        <p>(NOTE: Progress bar will appear if prop <span className="text-bold">progress</span> is greater than 0,<br />
          Progress bar will disappear if prop <span className="text-bold">progress</span> will reach 100%)
        </p>
        <div className="btn-group">
          <h4>Progress</h4>
          <button onClick={() => this.handleState('progress', 25)}>25%</button>
          <button onClick={() => this.handleState('progress', 50)}>50%</button>
          <button onClick={() => this.handleState('progress', 75)}>75%</button>
          <button onClick={() => this.handleState('progress', 100)}>100%</button>
        </div>
        {(this.state.progress > 0 && this.state.progress < 100) &&
        <div className="options-wrapper">
          <div className="btn-group">
            <h4>Line height</h4>
            <button
              className={this.state.lineHeight === 8 ? 'active' : ''}
              onClick={() => this.handleState('lineHeight', 8)}
            >
              8px
            </button>
            <button
              className={this.state.lineHeight === 2 ? 'active' : ''}
              onClick={() => this.handleState('lineHeight', 2)}
            >
              2px
            </button>
          </div>
          <div className="btn-group">
            <h4>Line color</h4>
            <button
              className={this.state.lineColor === 'red' ? 'active' : ''}
              onClick={() => this.handleState('lineColor', 'red')}
            >
              Red
            </button>
            <button
              className={this.state.lineColor === '#77b6ff' ? 'active' : ''}
              onClick={() => this.handleState('lineColor', '#77b6ff')}
            >
              Blue
            </button>
          </div>
          <div className="btn-group">
            <h4>Position</h4>
            <button
              className={this.state.position === 'top' ? 'active' : ''}
              onClick={() => this.handleState('position', 'top')}
            >
              Top
            </button>
            <button
              className={this.state.position === 'bottom' ? 'active' : ''}
              onClick={() => this.handleState('position', 'bottom')}
            >
              Bottom
            </button>
          </div>
        </div>}
      </div>
    );
  }
}

export default Demo;
