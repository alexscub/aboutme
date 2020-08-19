/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import styles from './Navigation.module.css';

const mobileNavList =  [
  {
    title: 'About me',
    link: 'about',
  },
  { title: 'Education', link: 'education' },
  {
    title: 'Work experience',
    link: 'experience',
  },
  {
    title: 'Skills',
    link: 'skills',
  },
  {
    title: 'Projects',
    link: 'projects',
  },
  {
    title: 'Contacts',
    link: 'contacts',
  },
];

const Navigation = ({ close }) => {
  const mobileNavItems = mobileNavList.map((el, i) => (
    <Link
      onClick={el.link ? close : null}
      to={el.link || '#'}
      spy
      smooth
      duration={500}
      delay={100}
      key={i}
      className={styles.navItem}
      activeClass={styles.activeClass}
    >
      {el.title}
    </Link>
  ));
  return (
    <>
      <div className={styles.logoContainer}>
      <div className={styles.logo}>{"<AlexScub/>"}</div>
      </div>
      <nav>{mobileNavItems}</nav>
    </>
  );
};

export default Navigation;
Navigation.propTypes = {
  close: PropTypes.func.isRequired,
};
