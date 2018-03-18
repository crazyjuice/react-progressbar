import React from 'react';
import PropTypes from 'prop-types';

const baseClass = {
  position: 'fixed',
  left: 0,
  transition: 'all 0.4s ease'
};

// eslint-disable-next-line import/prefer-default-export
export const ProgressBar = (props) => {
  const {
    position,
    progress,
    lineHeight,
    lineColor,
    zIndex
  } = props;

  const customClass = {
    [position]: 0,
    width: `${progress}%`,
    height: `${lineHeight}px`,
    background: lineColor,
    boxShadow: `0 0 10px ${lineColor}`,
    opacity: (progress === (0 || 100))
      ? 0
      : 1,
    zIndex
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
  progress: PropTypes.number.isRequired,
  zIndex: PropTypes.number
};

ProgressBar.defaultProps = {
  position: 'top',
  lineColor: '#77b6ff',
  lineHeight: 2,
  zIndex: 100
};
