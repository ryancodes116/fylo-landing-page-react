import React from 'react';
import styles from '../styles/Header.module.css';
import Navbar from './Navbar';
import Intro from './Intro';

const Header = () => {
  return (
    <div className={styles.header}>
      <Navbar />
      <Intro />
    </div>
  );
};

export default Header;
