/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.css';
import FlatButton from '../Shared/FlatButton/FlatButton';

const WorkExperience = ({ id, CTA }) => {
  return (
    <section id={id}>
      <div className="container">
        <h2 className={styles.title}>imrad</h2>
        <div className={styles.imageWithDescription}>
          <div className={styles.imageContainer}>
            <img
              className={styles.decorationImage}
              src="/assets/images/imrad.jpg"
              alt="Man with laptop"
            />
          </div>
          <div className={styles.sideContainer}>
            <h3 className={styles.subtitle}>Content Manager/Technical support.</h3>
            <p className={styles.paragraph}>
            Long time I worked with developers on the customer side(as Content Manager/Technical support of site with more than 100 000 goods - electronic components). Everything is not as we would like, the developers are not doing what is needed. And once I decided to become the developer, and end Full-stack course in GoIT academy.
            </p>
            <FlatButton onClick={CTA} label="Contact with me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

WorkExperience.propTypes = {
  id: PropTypes.string.isRequired,
  CTA: PropTypes.func.isRequired,
};
