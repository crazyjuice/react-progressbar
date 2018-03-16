import React from 'react';
import PropTypes from 'prop-types';

const baseClass = {
  position: 'fixed',
  left: 0,
  height: '2px',
  background: '#77b6ff',
  boxShadow: '0 0 10px rgba(119, 182, 255, .7)',
  transition: 'all 0.4s ease'
};

const ProgressBar = (props) => {
  const customClass = {
    [props.position]: 0,
    width: `${props.progress}%`,
    opacity: (props.progress === (0 || 100))
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
  progress: PropTypes.number.isRequired
};

ProgressBar.defaultProps = {
  position: 'top'
};

export default ProgressBar;
