import { FormData } from '../types/form';
import { ACCEPTED_TEMPLATE, REJECTED_TEMPLATE } from '../constants/emailTemplates';

export const generateEmailContent = (data: FormData, isEligible: boolean) => {
  return isEligible ? ACCEPTED_TEMPLATE : REJECTED_TEMPLATE;
};