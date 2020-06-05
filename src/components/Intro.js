import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Intro.module.css';
import illustration from '../images/illustration-1.svg';

const Intro = () => {
  return (
    <div className={classNames('container', styles.intro)}>
      <img
        className={styles.img}
        src={illustration}
        alt="animation of people organizing files"
      />
      <div classNames={styles.introText}>
        <h1 className={styles.title}>
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className={styles.text}>
          Fyle stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <div className={styles.cta}>
          <input
            className={styles.email}
            type="text"
            placeholder="Enter your email..."
          />
          <button className={styles.btn}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
