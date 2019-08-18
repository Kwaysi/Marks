import React from 'react';
import './css/Button.css';

export default function Button({ children, onclick, white, styles }) {
  return (
    <button className="button" style={styles} onClick={onclick}>
      {children}
    </button>
  );
}
