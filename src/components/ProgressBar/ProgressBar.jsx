import React from 'react';
import PropTypes from 'prop-types';

const baseClass = {
  position: 'fixed',
  left: 0,
  transition: 'all 0.4s ease'
};

const ProgressBar = (props) => {
  const {
    position,
    progress,
    lineHeight,
    lineColor
  } = props;

  const customClass = {
    [position]: 0,
    width: `${progress}%`,
    height: `${lineHeight}px`,
    background: lineColor,
    boxShadow: `0 0 10px ${lineColor}`,
    opacity: (progress === (0 || 100))
      ? 0
      : 1
  };

  return (
    <div
      className="progress-bar"
      style={{
        ...baseClass,
        ...customClass
      }}
    />
  );
};

ProgressBar.propTypes = {
  position: PropTypes.string,
  lineColor: PropTypes.string,
  lineHeight: PropTypes.number,
  progress: PropTypes.number.isRequired
};

ProgressBar.defaultProps = {
  position: 'top',
  lineColor: '#77b6ff',
  lineHeight: 2
};

export default ProgressBar;
