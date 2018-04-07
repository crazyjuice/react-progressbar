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
    zIndex,
    className,
    customStyles,
    ...rest
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
    zIndex,
    ...customStyles
  };
  return (
    <div
      className={`progress-bar ${className}`.trim()}
      style={{
        ...baseClass,
        ...customClass
      }}
      {...rest}
    />
  );
};

ProgressBar.propTypes = {
  position: PropTypes.string,
  lineColor: PropTypes.string,
  lineHeight: PropTypes.number,
  progress: PropTypes.number.isRequired,
  zIndex: PropTypes.number,
  className: PropTypes.string,
  customStyles: PropTypes.shape()
};

ProgressBar.defaultProps = {
  position: 'top',
  lineColor: '#77b6ff',
  lineHeight: 2,
  zIndex: 100,
  className: '',
  customStyles: {}
};
