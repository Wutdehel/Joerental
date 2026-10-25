import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'default',
  icon,
  iconPosition = 'left',
  className = '',
  onClick,
  ...props
}) => {
  // Base styles
  const baseStyles =
    'inline-flex items-center justify-center gap-2 md:gap-4 font-cabin font-bold transition-all rounded-full hover:scale-105';

  // Variant styles
  const variants = {
    primary:
      'bg-secondary-green text-primary-white shadow-[0px_8px_16px_#3aa76d40] hover:bg-secondary-green/90',
    outline:
      'bg-transparent text-secondary-black border-2 border-secondary-yellow hover:bg-secondary-yellow/10',
    secondary:
      'bg-gray-border text-primary-black shadow-[0px_8px_16px_#1e1e1e26] hover:bg-gray-border/80',
    whatsapp:
      'bg-secondary-green text-primary-white shadow-[0px_8px_16px_#1e1e1e26] hover:bg-secondary-green/90',
  };

  // Size styles (sesuai design system: mobile → tablet → desktop)
  const sizes = {
    sm: 'px-4 py-2 text-sm md:text-base md:px-6 md:py-3',
    default:
      'px-6 py-3 text-base md:text-lg md:px-8 md:py-4 lg:px-12 lg:py-4 lg:text-xl',
    lg: 'px-8 py-4 text-lg md:text-xl md:px-12 md:py-6 lg:px-16 lg:py-6 lg:text-2xl',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8">{icon}</span>
      )}
    </button>
  );
};

export default Button;
