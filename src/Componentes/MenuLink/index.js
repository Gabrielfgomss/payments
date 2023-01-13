import styles from './MenuLink.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MenuLink() {
  return (
    <NavLink
      className={({ isActive }) => `
      ${styles.link}
      ${isActive ? styles.linkDestacado : ""}
      `}
      to='/'
      end
    >
      Ínicio
    </NavLink>
  )
}
