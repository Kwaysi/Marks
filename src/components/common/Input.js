import React from 'react';
import './css/Input.css';


export default function Input({ placeHolder, type, handleChange, label, value, name, change, icon, cn, hFor }) {
  return (
    <div className="form-element">
      <label htmlFor={hFor}>{label}</label><br />
      <input placeholder={placeHolder} type={type} onChange={handleChange} value={value} name={name} className={cn} id={hFor} />
    </div>
  );
}
