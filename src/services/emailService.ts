import { FormData } from '../types/form';
import { evaluateApplication } from '../utils/evaluationCriteria';
import { generateEmail } from '../utils/emailGenerator';

const mapFormDataToCriteria = (formData: FormData) => ({
  position: formData.position,
  location: formData.location,
  startTiming: formData.startTiming,
  averageTenure: formData.yearsOfExperience / (formData.numberOfCompanies || 1),
  workPriority: formData.workPriority,
  jobReason: formData.jobReason
});

export const sendApplicationEmail = async (formData: FormData): Promise<void> => {
  try {
    const criteria = mapFormDataToCriteria(formData);
    const status = evaluateApplication(criteria);
    const emailContent = generateEmail(status);
    
    await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: formData.email,
        ...emailContent
      }),
    });
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send application email');
  }
};