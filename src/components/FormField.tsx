import React from 'react';

interface FormFieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({ label, required = false, children }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}{required && '*'}
      </label>
      <div className="mt-1">{children}</div>
    </div>
  );
};