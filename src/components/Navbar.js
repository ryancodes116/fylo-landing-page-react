import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Navbar.module.css';
import logo from '../images/logo.svg';

const Navbar = () => {
  return (
    <nav className={classNames('container', styles.navbar)}>
      <img className={styles.logo} src={logo} alt="Fylo logo" />
      <ul className={styles.navList}>
        <li className={styles.listItem}>
          <a className={styles.link} href="#">
            Features
          </a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.link} href="#">
            Team
          </a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.link} href="#">
            Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
