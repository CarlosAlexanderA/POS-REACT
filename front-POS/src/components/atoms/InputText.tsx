import type {InputHTMLAttributes} from 'react';

type InputTextProps = InputHTMLAttributes<HTMLInputElement>;

export const InputText = ({
  type = 'text',
  placeholder = '',
  className = '',
  ...props
}: InputTextProps) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`w-full pl-5 pr-4 py-2 border border-(--subtitle) rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-(--card) focus:bg-(--bg) transition-all ${className}`}
    {...props}
  />
);
