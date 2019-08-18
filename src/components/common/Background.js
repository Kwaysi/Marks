import React from 'react';
import './css/background.css';

export const AnimatedBg = ({children}) => {
  return (
    <>
      <section className="animatedbg">
        <div class='box'>
            <div class='wave -one'></div>
            <div class='wave -two'></div>
            <div class='wave -three'></div>
        </div>
      </section>
      <div className="main-frame">
        {children}
      </div>
    </>
  );
}