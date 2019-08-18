import React from 'react';
import './css/background.css';

export const AnimatedBg = ({children}) => {
  return (
    <>
      <section className="animatedbg">
        <div class="view">
          <div class="plane main">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </div>
      </section>
      <div className="main-frame">
        {children}
      </div>
    </>
  );
}