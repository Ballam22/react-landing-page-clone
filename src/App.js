import React from 'react';
import styles from './App.module.scss';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className={styles.app}>
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
