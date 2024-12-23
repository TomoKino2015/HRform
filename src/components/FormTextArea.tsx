import React from 'react';

interface FormTextAreaProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}

export const FormTextArea: React.FC<FormTextAreaProps> = ({ 
  value, 
  onChange, 
  required = false, 
  placeholder,
  rows = 4 
}) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      placeholder={placeholder}
      rows={rows}
      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
    />
  );
};