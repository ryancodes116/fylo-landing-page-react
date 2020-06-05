import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Header.module.css';
import Navbar from './Navbar';
import Intro from './Intro';

const Header = () => {
  return (
    <div>
      <Navbar />
      <Intro />
    </div>
  );
};

export default Header;
