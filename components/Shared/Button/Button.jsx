/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({
  type = 'button',
  label,
  onClick = () => {},
  customClassName = '',
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${customClassName}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  customClassName: PropTypes.string,
};
