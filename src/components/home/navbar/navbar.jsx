"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <nav className={`${styles.navbar}`}>
        <div className={styles.navContainer}>
          <div className={styles.navLeft}>
            <Link href="/" className={styles.brand}>
              ZENTARA
            </Link>
          </div>
          <div className={styles.navRight}>
            <ul className={styles.navLinks}>
              <li className={styles.navItem}>
                <Link href="/technology" className={styles.navLink}>
                  Technology
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/carrier" className={styles.navLink}>
                  Carrier
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/subscribe" className={`${styles.navLink} ${styles.subscribeBtn}`}>
                  Subscribe
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          background-color: rgba(0, 0, 0, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-inline: clamp(1rem, 4vw, 2rem);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          /* Removed all loading animations - navbar appears instantly */
          transform: translateY(0);
          opacity: 1;
        }

        .navContainer {
          max-inline-size: 75rem;
          margin-inline: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          block-size: 4.375rem;
        }

        .navLeft {
          display: flex;
          align-items: center;
          /* Removed loading animation - appears instantly */
          transform: translateX(0);
          opacity: 1;
        }

        .navRight {
          display: flex;
          align-items: center;
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: clamp(1rem, 3vw, 2rem);
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .navItem {
          /* Removed loading animation - appears instantly */
          transform: translateY(0);
          opacity: 1;
        }

        .navLink {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-weight: 300;
          font-size: clamp(0.875rem, 2vw, 1rem);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          display: inline-block;
        }

        .navLink::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ffffff, rgba(255, 255, 255, 0.8));
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navLink:hover {
          color: #ffffff;
          transform: translateY(-2px);
        }

        .navLink:hover::after {
          width: 100%;
        }

        .navLink:focus-visible {
          outline: 2px solid #ffffff;
          outline-offset: 2px;
          border-radius: 2px;
        }

        .brand {
          font-size: clamp(1.25rem, 3vw, 1.5rem);
          font-weight: 600;
          color: #ffffff;
          text-decoration: none;
          letter-spacing: 0.0625em;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .brand::before {
          content: '';
          position: absolute;
          top: 0;
          left: -5px;
          right: -5px;
          bottom: 0;
          background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
          opacity: 0;
          border-radius: 4px;
          z-index: -1;
          transition: opacity 0.3s ease;
        }

        .brand:hover {
          color: #ffffff;
          transform: scale(1.05);
        }

        .brand:hover::before {
          opacity: 1;
        }

        .brand:focus-visible {
          outline: 2px solid #ffffff;
          outline-offset: 2px;
          border-radius: 2px;
        }

        .subscribeBtn {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
          color: #ffffff;
          padding-block: 0.625rem;
          padding-inline: 1.5rem;
          border-radius: 0.5rem;
          font-weight: 400;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
        }

        .subscribeBtn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .subscribeBtn:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), #ffffff);
          color: #000000;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
        }

        .subscribeBtn:hover::before {
          left: 100%;
        }

        .subscribeBtn:hover::after {
          width: 0;
        }

        .subscribeBtn:active {
          transform: translateY(-1px) scale(1.01);
        }

        .subscribeBtn:focus-visible {
          outline: 2px solid #ffffff;
          outline-offset: 2px;
        }

        /* Enhanced responsiveness */
        @container (max-width: 30rem) {
          .navLinks {
            gap: 0.75rem;
          }
          
          .navbar {
            padding-inline: 1rem;
          }
        }

        /* Smooth scrolling enhancement */
        @media (prefers-reduced-motion: no-preference) {
          html {
            scroll-behavior: smooth;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .navbar {
            background-color: rgba(0, 0, 0, 1);
            border-bottom-width: 2px;
            border-bottom-color: #ffffff;
          }
          
          .subscribeBtn {
            border: 2px solid #ffffff;
            background: #ffffff;
            color: #000000;
          }
        }

        /* Performance optimizations */
        .navbar {
          will-change: auto; /* Removed will-change for transform since no animation */
        }

        .navLink,
        .brand,
        .subscribeBtn {
          will-change: transform;
        }
      `}</style>
    </>
  );
};

const styles = {
  navbar: 'navbar',
  navContainer: 'navContainer',
  navLeft: 'navLeft',
  navLinks: 'navLinks',
  navLink: 'navLink',
  navItem: 'navItem',
  navRight: 'navRight',
  brand: 'brand',
  subscribeBtn: 'subscribeBtn'
};

export default Navbar;