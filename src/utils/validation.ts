import { FormData } from '../types/form';

const isValidPosition = (position: string): boolean => 
  ['full-time', 'flexible'].includes(position);

const isValidLocation = (location: string): boolean => 
  ['tokyo-area', 'planning-to-move'].includes(location);

const isValidTiming = (timing: string): boolean => 
  ['within-1-month', 'within-2-months', 'within-3-months'].includes(timing);

const isValidPriority = (priority: string): boolean => 
  ['challenging-work', 'product-love', 'none'].includes(priority);

const isValidReason = (reason: string): boolean => 
  ['new-skills', 'none', 'business-growth', 'social-impact'].includes(reason);

const hasMinimumAverageTenure = (years: number, companies: number): boolean => 
  companies > 0 ? (years / companies) >= 1 : false;

export const isEligible = (data: FormData): boolean => {
  return (
    isValidPosition(data.position) &&
    isValidLocation(data.location) &&
    isValidTiming(data.startTiming) &&
    isValidPriority(data.workPriority) &&
    isValidReason(data.jobReason) &&
    hasMinimumAverageTenure(data.yearsOfExperience, data.numberOfCompanies)
  );
};