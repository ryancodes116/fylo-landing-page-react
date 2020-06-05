import React from 'react';
import classNames from 'classnames';
import styles from '../styles/SignUp.module.css';

const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <div className={classNames('container', styles.signUpContent)}>
        <div className={styles.signUpText}>
          <h3 className={styles.title}>Get early access today</h3>
          <p className={styles.text}>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <form className={styles.form}>
          <input
            className={styles.email}
            type="email"
            placeholder="email@example.com"
          />
          <button className={styles.btn}>Get Started For Free</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
