import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit';
  children: React.ReactNode;
  fullWidth?: boolean;
  variant?: 'primary' | 'link';
  onClick?: () => void;
}

const Button = ({ 
  type = 'button', 
  children, 
  fullWidth = false, 
  variant = 'primary',
  onClick
}: ButtonProps) => {
  const baseStyles = "font-medium transition duration-150";
  const variants = {
    primary: "py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    link: "text-sm text-indigo-600 hover:text-indigo-500"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;