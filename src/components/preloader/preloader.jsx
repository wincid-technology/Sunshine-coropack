'use client'

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './preloader.css';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setLoadingComplete(true);
          // Trigger the GSAP animation after loading completes
          gsap.to("#container", {
            y: "-100%", 
            delay: 0.5,
            duration: 1, 
            opacity: 0,
            onComplete: () => {
              setIsVisible(false); // Hide the container after animation
            }
          });
          return prev;
        }
      });
    }, 20); // Adjust the interval for faster/slower loading

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    isVisible && (
      <div id="container" className="absolute z-50 w-full top-0">
        <div className="w-full" style={styles.container}>
              <h1>{progress}%</h1>
              <div style={styles.progressBar}>
                <div style={{ ...styles.progress, width: `${progress}%` }} />
              </div>
        </div>
      </div>
    )
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7d6a8',
  },
  progressBar: {
    width: '55px',
    height: '10px',
    backgroundColor: '#f58b27',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#0e0640',
    transition: 'width 0.1s',
  },
};

export default Preloader;
