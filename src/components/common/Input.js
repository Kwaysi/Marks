import React from 'react';
import './css/Input.css';


export default function Input({ placeHolder, type, handleChange, label, value, name, change, icon, cn }) {
  return (
    <div className="form-element">
      <label>{label}</label><br />
      <input placeholder={placeHolder} type={type} onChange={handleChange} value={value} name={name} className={cn} />
    </div>
  );
}
