import React from 'react';

interface FormInputProps {
  type: 'text' | 'email' | 'tel' | 'number' | 'url';
  value: string | number;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
}

export const FormInput: React.FC<FormInputProps> = ({ type, value, onChange, required = false, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      placeholder={placeholder}
      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
    />
  );
};