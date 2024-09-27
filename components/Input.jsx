import React from 'react';

const Input = ({ type, handleChange, placeholder,classname }) => {
  return (
    <div className='w-full border'>
      <input
       
        type={type}
        onChange={handleChange}  
        placeholder={placeholder}
        className={ ` p-2 rounded w-full  ${classname} w-full text-[#2E2497]`}  
      />
    </div>
  );
}

export default Input;
