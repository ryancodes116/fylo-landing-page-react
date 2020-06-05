import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Footer.module.css';
import logo from '../images/logo.svg';
import phone from '../images/icon-phone.svg';
import email from '../images/icon-email.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={classNames('container', styles.footerContent)}>
        <img className={styles.logo} src={logo} alt="Fylo logo" />
        <div className={styles.footerText}>
          <div className={styles.contact}>
            <div className={styles.contactMethod}>
              <img
                className={styles.contactIcon}
                src={phone}
                alt="phone icon"
              />
              <p className={styles.contactText}>Phone: +1-543-123-4567</p>
            </div>
            <div className={styles.contactMethod}>
              <img
                className={styles.contactIcon}
                src={email}
                alt="email icon"
              />
              <p className={styles.contactText}>example@fylo.com</p>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <ul className={styles.list}>
              <li className={styles.listItem}>About Us</li>
              <li className={styles.listItem}>Jobs</li>
              <li className={styles.listItem}>Press</li>
              <li className={styles.listItem}>Blog</li>
            </ul>
            <ul className={styles.list}>
              <li className={styles.listItem}>Contact Us</li>
              <li className={styles.listItem}>Terms</li>
              <li className={styles.listItem}>Privacy</li>
            </ul>
          </div>
          <div className={styles.social}>
            <div className={styles.socialWrapper}>
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className={styles.socialWrapper}>
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className={styles.socialWrapper}>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
