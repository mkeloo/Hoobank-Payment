import React from 'react';

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} duration-300 hover:scale-110`}
  >
    Get Started
  </button>
);

export default Button;
