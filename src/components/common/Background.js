import React from 'react';
import './css/background.css';

export const AnimatedBg = ({children}) => {
  return (
    <>
      <section className="animatedbg">
        <div className='box'>
            <div className='wave -one'></div>
            <div className='wave -two'></div>
            <div className='wave -three'></div>
        </div>
      </section>
      <div className="main-frame">
        {children}
      </div>
    </>
  );
}