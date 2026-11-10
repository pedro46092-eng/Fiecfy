import React from 'react';
import styles from './BotaoBonus.module.css';

export default function BotaoBonus({ children, onClick }) {
  return (
    <button className={styles.botaoVerde} onClick={onClick}>
      {children}
    </button>
  );
}
