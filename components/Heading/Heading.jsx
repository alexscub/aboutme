import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.css';
import Button from '../Shared/Button/Button';

const Heading = ({ id, CTA }) => {
  return (
    <section id={id} className={styles.heading}>
      <div className={styles.headingContainer}>
        <h1 className={styles.headingTitle}>
        Oleksandr Skubachevskyi React-JS developer
        </h1>
        <p className={styles.paragraph}>
        I have half-year experience with programming front-end part of web applications. I like to work in team, using scrum methodology, i like to
see result of my work every meeting.<br/>
I want to become strong developer, who work in team. I strive to constantly learn new technologies
throughout my life and to use it. I want to develop applications, which will solves business problems.
        </p>
        <Button onClick={CTA} label="Contact with me" />
      </div>
    </section>
  );
};
export default Heading;

Heading.propTypes = {
  id: PropTypes.string.isRequired,
  CTA: PropTypes.func.isRequired,
};
