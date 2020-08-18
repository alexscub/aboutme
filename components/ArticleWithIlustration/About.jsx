/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './About.module.css';
import FlatButton from '../Shared/FlatButton/FlatButton';

const About = ({ id, CTA }) => {
  return (
    <section id={id}>
      <div className="container">
        <h2 className={styles.title}>Let's get acquainted</h2>
        <div className={styles.imageWithDescription}>
        <ScrollAnimation animateIn='bounceInLeft'
  animateOut='bounceOutRight' offset={200}>
          <div className={styles.imageContainer}>
            <img
              className={styles.decorationImage}
              src="/assets/images/man-laptop-v1.svg"
              alt="Man with laptop"
            />
          </div>
          </ScrollAnimation>
          <div className={styles.sideContainer}>
            <h3 className={styles.subtitle}>I am frontend developer</h3>
            <p className={styles.paragraph}>
            Now my stack of technologies allows to develop front-end part of SPA. I can use modern  CSS and Javascript 3rd party
            libraries, such as REDUX, Formik, Axios, React-scroll, Bootstrap, Material-ui etc. I can use react-hooks, work with restfull APIs.
            I can use task runner such as gulp/webpack.
            </p>
            <p className={styles.paragraph}>
            In near future i want to learn more back-end(now i have basic knowledge of Node JS, can write simple Next-JS appliction, like this)
             end to become a Full-stack developer(MERN stack).  
            I try to stick to the KISS DRY and YAGNI principles and to use others best-practices.
            </p>
            <FlatButton onClick={CTA} label="Contact with me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

About.propTypes = {
  id: PropTypes.string.isRequired,
  CTA: PropTypes.func.isRequired,
};
