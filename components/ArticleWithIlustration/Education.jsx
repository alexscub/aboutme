/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './About.module.css';
import FlatButton from '../Shared/FlatButton/FlatButton';

const Education = ({ id, CTA }) => {
  return (
    <section id={id} className={styles.educationSection}>
      <div className="container">
 <h2 className={styles.title}>Education</h2>
        <div className={styles.imageWithDescription}>
        <ScrollAnimation animateIn='bounceInLeft'
  animateOut='bounceOutRight' offset={200}>
          <div className={styles.sideContainer}>
            <h3 className={styles.subtitle}>NATIONAL TECHNICAL UNIVERSITY OF UKRAINE “IGOR SIKORSKY KYIV POLYTECHNIC INSTITUTE”</h3>
            <p className={styles.paragraph}>
            M.Sc. Faculty of Electronics. Electronic Devices 2009 - 2015
            </p>
            <h3 className={styles.subtitle}>GoIT academy</h3>
            <p className={styles.paragraph}>
            Full Stack Development courses 2019 - 2020
            </p>
            <FlatButton onClick={CTA} label="Contact with me" />
          </div>
          </ScrollAnimation>
          
          <ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'  offset={200}>
          <div className={styles.imageContainer}>
            <img
              className={styles.decorationImage}
              src="/assets/images/publicdomainq-business-man-working.svg"
              alt="Education man"
            />
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Education;

Education.propTypes = {
  id: PropTypes.string.isRequired,
  CTA: PropTypes.func.isRequired,
};
