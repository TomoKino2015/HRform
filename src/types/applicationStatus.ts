export type ApplicationStatus = 'VIP' | 'OK' | 'NG';

export interface ApplicationCriteria {
  position: string;
  location: string;
  startTiming: string;
  averageTenure: number;
  workPriority: string;
  jobReason: string;
}