import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Details.module.css';
import illustration from '../images/illustration-2.svg';
import arrow from '../images/icon-arrow.svg';
import quotes from '../images/icon-quotes.svg';
import avatar from '../images/avatar-testimonial.jpg';

const Details = () => {
  return (
    <div className={styles.details}>
      <div className={styles.curve}></div>
      <div className={styles.wrapper}>
        <div className={classNames('container', styles.detailsContent)}>
          <img
            className={styles.img}
            src={illustration}
            alt="animation of people interacting with chat bubbles"
          />
          <div className={styles.detailsText}>
            <h3 className={styles.title}>Stay productive, wherever you are</h3>
            <p className={styles.text}>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className={styles.text}>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
            <div className={styles.ctaLink}>
              <p className={styles.ctaText}>See how Fylo works </p>

              <img
                className={styles.arrow}
                src={arrow}
                alt="right arrow icon"
              />
            </div>
            <div className={styles.testimonial}>
              <img
                className={styles.quotes}
                src={quotes}
                alt="quotation marks"
              />
              <p className={styles.testimonialText}>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div className={styles.attribution}>
                <img
                  className={styles.avatar}
                  src={avatar}
                  alt="photo of Kyle Burton"
                />
                <div className={styles.avatarInfo}>
                  <h4 className={styles.name}>Kyle Burton</h4>
                  <p className={styles.testimonialTitle}>
                    Founder & CEO, Huddle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
