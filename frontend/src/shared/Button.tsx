import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit';
  children: React.ReactNode;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary' | 'success';
  onClick?: () => void;
}

const Button = ({ 
  type = 'button', 
  children, 
  fullWidth = false, 
  variant = 'primary',
  onClick
}: ButtonProps) => {
  const baseStyles = "font-medium transition duration-150 rounded-md px-4 py-2 text-white";
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    success: "bg-green-500 hover:bg-green-600",
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
