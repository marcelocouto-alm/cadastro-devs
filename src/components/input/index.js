import React from 'react';

const Input = ({ type, placeholder, name, value, onChange }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  )
}

export default Input