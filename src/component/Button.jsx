// src/Button.jsx
import React from 'react';

const Button = ({ children, borderRadius, style, className }) => {
  return (
    <div className="relative group" style={{ ...style, borderRadius }}>
      <div
        className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500"
        style={{ borderRadius }}
      />
      <div className={`relative ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Button;
