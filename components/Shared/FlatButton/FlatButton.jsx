/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlatButton.module.css';

const FlatButton = ({ type = 'button', label, onClick = () => {} }) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default FlatButton;

FlatButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
};
