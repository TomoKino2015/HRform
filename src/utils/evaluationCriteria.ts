import { ApplicationCriteria, ApplicationStatus } from '../types/applicationStatus';

const isValidPosition = (position: string): boolean =>
  ['position_flexible', 'position_fulltime'].includes(position);

const isValidLocation = (location: string): boolean =>
  ['location_kanto', 'location_relocate'].includes(location);

const isValidStartTiming = (timing: string): boolean =>
  ['start_1month', 'start_2month', 'start_3month'].includes(timing);

const isValidWorkPriority = (priority: string): boolean =>
  ['priority_challenge', 'priority_passion', 'priority_other'].includes(priority);

const isValidJobReason = (reason: string): boolean =>
  ['reason_skill', 'reason_growth', 'reason_impact', 'reason_other'].includes(reason);

const meetsBasicCriteria = (criteria: ApplicationCriteria): boolean => {
  return (
    isValidPosition(criteria.position) &&
    isValidLocation(criteria.location) &&
    isValidStartTiming(criteria.startTiming) &&
    criteria.averageTenure >= 1
  );
};

const meetsVIPCriteria = (criteria: ApplicationCriteria): boolean => {
  return (
    meetsBasicCriteria(criteria) &&
    isValidWorkPriority(criteria.workPriority) &&
    isValidJobReason(criteria.jobReason)
  );
};

export const evaluateApplication = (criteria: ApplicationCriteria): ApplicationStatus => {
  if (meetsVIPCriteria(criteria)) {
    return 'VIP';
  }
  if (meetsBasicCriteria(criteria)) {
    return 'OK';
  }
  return 'NG';
};