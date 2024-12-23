import { FormData } from '../types/form';

export const isEligible = (data: FormData): boolean => {
  // Position check
  const validPosition = ['full-time', 'flexible'].includes(data.position);
  
  // Location check
  const validLocation = ['tokyo-area', 'planning-to-move'].includes(data.location);
  
  // Start timing check
  const validTiming = ['within-1-month', 'within-2-months', 'within-3-months'].includes(data.startTiming);
  
  // Work priority check
  const validPriority = ['challenging-work', 'product-love', 'none'].includes(data.workPriority);
  
  // Job reason check
  const validReason = ['new-skills', 'none', 'business-growth', 'social-impact'].includes(data.jobReason);
  
  // Experience check (average tenure >= 1 year)
  const averageTenure = data.yearsOfExperience / data.numberOfCompanies;
  const validExperience = averageTenure >= 1;

  return (
    validPosition &&
    validLocation &&
    validTiming &&
    validPriority &&
    validReason &&
    validExperience
  );
};