import React from 'react';
import road from '../../Assets/road.mp4';
import keke from '../../Assets/images/keke.png';

export const Video = ({children}) => {
  return (
    <div>
      <video autoPlay muted loop id="bg-video">
        <source src={road} type="video/mp4" />
      </video>
      <div className="keke">

      </div>
      <div className="content">
        {children}
      </div>
    </div>
  )
}