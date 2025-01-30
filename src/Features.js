import React from 'react';
import styles from './Features.module.scss';

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.feature}>
        <span className={styles.icon}>📊</span>
        <h2>Analytics</h2>
        <p>Track your performance with our advanced analytics tools.</p>
      </div>
      <div className={styles.feature}>
        <span className={styles.icon}>🚀</span>
        <h2>Speed</h2>
        <p>Experience blazing-fast speeds with our optimized platform.</p>
      </div>
      <div className={styles.feature}>
        <span className={styles.icon}>🔒</span>
        <h2>Security</h2>
        <p>Your data is safe with our state-of-the-art security measures.</p>
      </div>
    </section>
  );
};

export default Features;
