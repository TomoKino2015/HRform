import React, { useState } from 'react';
import { FormData } from '../types/form';
import { isEligible } from '../utils/validation';
import { generateEmailContent } from '../utils/email';
import { Send } from 'lucide-react';
import { FormField } from './FormField';
import { FormSelect } from './FormSelect';
import { FormInput } from './FormInput';
import { FormTextArea } from './FormTextArea';
import { locationOptions, japaneseOptions, startTimingOptions, workPriorityOptions, jobReasonOptions } from '../constants/formOptions';

const RecruitmentForm: React.FC = () => {
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
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const eligible = isEligible(formData);
    const emailContent = generateEmailContent(formData, eligible);
    console.log('Form submitted:', { formData, eligible, emailContent });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">AtHearth Application Form</h2>
          <p className="mt-2 text-gray-600">Join our team and make a difference</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField label="Email" required>
            <FormInput
              type="email"
              value={formData.email}
              onChange={updateField('email')}
              required
            />
          </FormField>

          <FormField label="Mobile / SMS" required>
            <FormInput
              type="tel"
              value={formData.mobile}
              onChange={updateField('mobile')}
              required
            />
          </FormField>

          <FormField label="Which position are you applying for?" required>
            <FormSelect
              value={formData.position}
              onChange={updateField('position')}
              options={[
                { value: 'full-time', label: 'Bilingual Customer Lead (full time)' },
                { value: 'flexible', label: 'Bilingual Customer Lead (flexible time with Incentive)' },
                { value: 'others', label: 'Others' }
              ]}
              required
            />
          </FormField>

          <FormField label="Do you live in Tokyo, Saitama, Kanagawa or Chiba now?" required>
            <FormSelect
              value={formData.location}
              onChange={updateField('location')}
              options={locationOptions}
              required
            />
          </FormField>

          <FormField label="What's your Japanese skill?" required>
            <FormSelect
              value={formData.japaneseLevel}
              onChange={updateField('japaneseLevel')}
              options={japaneseOptions}
              required
            />
          </FormField>

          <FormField label="When do you want to start working?" required>
            <FormSelect
              value={formData.startTiming}
              onChange={updateField('startTiming')}
              options={startTimingOptions}
              required
            />
          </FormField>

          <FormField label="What is the most important for you to work on?" required>
            <FormSelect
              value={formData.workPriority}
              onChange={updateField('workPriority')}
              options={workPriorityOptions}
              required
            />
          </FormField>

          <FormField label="What is the primary reason to start the new job?" required>
            <FormSelect
              value={formData.jobReason}
              onChange={updateField('jobReason')}
              options={jobReasonOptions}
              required
            />
          </FormField>

          <FormField label="The total amount of years of full-time working (Not including part-time)" required>
            <FormInput
              type="number"
              value={formData.yearsOfExperience}
              onChange={updateField('yearsOfExperience')}
              required
            />
          </FormField>

          <FormField label="The total numbers of companies worked as full-time (Not including part-time)" required>
            <FormInput
              type="number"
              value={formData.numberOfCompanies}
              onChange={updateField('numberOfCompanies')}
              required
            />
          </FormField>

          <FormField label="URL of LinkedIn or Google Drive (Your portfolio)" required>
            <FormInput
              type="url"
              value={formData.portfolioUrl}
              onChange={updateField('portfolioUrl')}
              required
              placeholder="https://"
            />
          </FormField>

          <FormField label="Why are you applying for AtHearth?">
            <FormTextArea
              value={formData.whyAtHearth}
              onChange={updateField('whyAtHearth')}
              placeholder="Feel free to write the name of your friend who introduced AtHearth or any questions!"
              rows={5}
            />
          </FormField>

          <div className="pt-5">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Send className="w-5 h-5 mr-2" />
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecruitmentForm;