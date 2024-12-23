export type Position = 'full-time' | 'flexible' | 'others';

export type Location = 
  | 'tokyo-area'
  | 'planning-to-move'
  | 'remote'
  | 'previous-resident'
  | 'previous-tourist'
  | 'never-visited'
  | 'tourist-only';

export type JapaneseLevel = 
  | 'native'
  | 'business'
  | 'conversational'
  | 'none';

export type StartTiming = 
  | 'within-1-month'
  | 'within-2-months'
  | 'within-3-months'
  | 'within-6-months'
  | 'not-interested';

export type WorkPriority = 
  | 'work-life-balance'
  | 'no-evaluation'
  | 'challenging-work'
  | 'stable-income'
  | 'product-love'
  | 'none';

export type JobReason = 
  | 'new-skills'
  | 'better-salary'
  | 'culture-fit'
  | 'business-growth'
  | 'more-responsibility'
  | 'social-impact'
  | 'none';

export interface FormData {
  email: string;
  mobile: string;
  position: Position;
  location: Location;
  japaneseLevel: JapaneseLevel;
  startTiming: StartTiming;
  workPriority: WorkPriority;
  jobReason: JobReason;
  yearsOfExperience: number;
  numberOfCompanies: number;
  portfolioUrl: string;
  whyAtHearth: string;
}