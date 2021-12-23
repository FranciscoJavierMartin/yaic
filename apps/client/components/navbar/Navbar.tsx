import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href='/'>
        <a className={styles.home}>Yaic</a>
      </Link>
      <div className={styles.search}>
        <input type='search' placeholder='Search' />
      </div>
      <div className={styles.userAccess}>
        <Link href='/signup'>
          <a className={styles.signup}>Sign Up</a>
        </Link>
        <Link href='/signin'>
          <a className={styles.signin}>Sign In</a>
        </Link>
      </div>
    </div>
  );
}
