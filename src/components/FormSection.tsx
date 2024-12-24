import React from 'react';

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({ title, children }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {children}
    </div>
  </div>
);