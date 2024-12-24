import { FormData } from '../types/form';
import { ApplicationCriteria } from '../types/applicationStatus';

export const mapFormDataToCriteria = (formData: FormData): ApplicationCriteria => ({
  position: formData.position,
  location: formData.location,
  startTiming: formData.startTiming,
  averageTenure: formData.yearsOfExperience / (formData.numberOfCompanies || 1),
  workPriority: formData.workPriority,
  jobReason: formData.jobReason
});