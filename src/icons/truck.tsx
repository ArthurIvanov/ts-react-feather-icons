import React from 'react';
import PropTypes from 'prop-types';
import { IconProps } from '../types';

const Truck: React.FC<IconProps> = props => {
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
      <rect x="1" y="3" width="15" height="13"></rect>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
      <circle cx="5.5" cy="18.5" r="2.5"></circle>
      <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
  );
};

Truck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Truck.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Truck;
