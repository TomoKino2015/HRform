import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormData } from '../types/form';
import { sendApplicationEmail } from '../services/emailService';
import { Send } from 'lucide-react';
import { FormField } from './FormField';
import { FormSelect } from './FormSelect';
import { FormInput } from './FormInput';
import { FormTextArea } from './FormTextArea';
import { FormHeader } from './FormHeader';
import { FormSection } from './FormSection';
import { useFormSubmit } from '../hooks/useFormSubmit';
import { 
  locationOptions, 
  japaneseOptions, 
  startTimingOptions, 
  workPriorityOptions, 
  jobReasonOptions 
} from '../constants/formOptions';

const RecruitmentForm: React.FC = () => {
  const navigate = useNavigate();
  const { handleSubmit, formData, updateField } = useFormSubmit();

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <FormHeader />
      
      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow">
        <FormSection title="Basic Information">
          <FormField label="Email" required>
            <FormInput
              type="email"
              value={formData.email}
              onChange={updateField('email')}
              required
              placeholder="your.email@example.com"
            />
          </FormField>

          <FormField label="Mobile Number" required>
            <FormInput
              type="tel"
              value={formData.mobile}
              onChange={updateField('mobile')}
              required
              placeholder="+81 90-1234-5678"
            />
          </FormField>
        </FormSection>

        <FormSection title="Position Details">
          <FormField label="Location" required>
            <FormSelect
              value={formData.location}
              onChange={updateField('location')}
              options={locationOptions}
              required
            />
          </FormField>

          <FormField label="Japanese Level" required>
            <FormSelect
              value={formData.japaneseLevel}
              onChange={updateField('japaneseLevel')}
              options={japaneseOptions}
              required
            />
          </FormField>

          <FormField label="Start Timing" required>
            <FormSelect
              value={formData.startTiming}
              onChange={updateField('startTiming')}
              options={startTimingOptions}
              required
            />
          </FormField>
        </FormSection>

        <FormSection title="Experience">
          <FormField label="Years of Experience" required>
            <FormInput
              type="number"
              value={formData.yearsOfExperience.toString()}
              onChange={updateField('yearsOfExperience')}
              required
            />
          </FormField>

          <FormField label="Number of Companies" required>
            <FormInput
              type="number"
              value={formData.numberOfCompanies.toString()}
              onChange={updateField('numberOfCompanies')}
              required
            />
          </FormField>
        </FormSection>

        <FormSection title="Additional Information">
          <FormField label="Portfolio URL">
            <FormInput
              type="url"
              value={formData.portfolioUrl}
              onChange={updateField('portfolioUrl')}
              placeholder="https://your-portfolio.com"
            />
          </FormField>

          <FormField label="Why AtHearth?" required>
            <FormTextArea
              value={formData.whyAtHearth}
              onChange={updateField('whyAtHearth')}
              required
              placeholder="Tell us why you're interested in joining AtHearth..."
            />
          </FormField>
        </FormSection>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#10d999] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Submit Application
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecruitmentForm;