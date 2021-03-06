import React from 'react';
import PropTypes from 'prop-types';
import { IconProps } from '../types';

const ShieldOff: React.FC<IconProps> = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path>
      <path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  );
};

ShieldOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ShieldOff.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ShieldOff;
