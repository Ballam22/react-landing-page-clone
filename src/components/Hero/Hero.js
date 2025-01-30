import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.headline}>Welcome to Our Landing Page</h1>
      <p className={styles.subheadline}>Your success starts here.</p>
      <button className={styles.ctaButton}>Get Started</button>
    </section>
  );
};

export default Hero;
