import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormData } from '../types/form';
import { sendApplicationEmail } from '../services/emailService';
import { evaluateApplication } from '../utils/evaluationCriteria';
import { mapFormDataToCriteria } from '../utils/formMapper';

export const useFormSubmit = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    mobile: '',
    position: 'full-time',
    location: 'tokyo-area',
    japaneseLevel: 'native',
    startTiming: 'within-1-month',
    workPriority: 'challenging-work',
    jobReason: 'new-skills',
    yearsOfExperience: 0,
    numberOfCompanies: 0,
    portfolioUrl: '',
    whyAtHearth: ''
  });

  const updateField = (field: keyof FormData) => (value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: field === 'yearsOfExperience' || field === 'numberOfCompanies'
        ? parseInt(value) || 0
        : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendApplicationEmail(formData);
      const criteria = mapFormDataToCriteria(formData);
      const status = evaluateApplication(criteria);
      navigate('/thank-you', { state: { status } });
    } catch (error) {
      console.error('Failed to submit application:', error);
      alert('Failed to submit application. Please try again.');
    }
  };

  return {
    formData,
    updateField,
    handleSubmit
  };
};