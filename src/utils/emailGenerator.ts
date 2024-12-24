import { ApplicationStatus } from '../types/applicationStatus';

const EMAIL_TEMPLATES = {
  VIP: {
    subject: 'Your registration is completed!',
    body: `Your registration is completed!
Now, let's set up the meeting for the interview and prepare for it.

1. Schedule a meeting now  
[Meeting setup URL] 

Thank you for your time. Please take a look at the following information about AtHearth's business before the meeting.
We look forward to making this a mutually beneficial meeting.

2. Check the pre-documents
https://www.lawinsider.com/dictionary/preliminary-document

If you have any questions, please reply to this email or talent@athearth.com.`
  },
  OK: {
    subject: 'Your registration is completed!',
    body: `Your registration is completed!
Now, let's set up the meeting for the interview and prepare for it.

1. Schedule a meeting now  
[Meeting setup URL] 

Thank you for your time. Please take a look at the following information about AtHearth's business before the meeting.
We look forward to making this a mutually beneficial meeting.

2. Check the pre-documents
https://www.lawinsider.com/dictionary/preliminary-document

If you have any questions, please reply to this email or talent@athearth.com.`
  },
  NG: {
    subject: 'Your registration is completed!',
    body: `Your registration is completed!
We would get back to you in case we confirm a mutual fit.

Meanwhile, you can also check the other positions as follows.
Thank you for your time & cooperation.

https://www.reddit.com/r/NoStupidQuestions/comments/14xo93a/besides_politics_is_there_another_occupation/

If you have any questions, please reply to this email or talent@athearth.com.`
  }
};

export const generateEmail = (status: ApplicationStatus) => {
  return EMAIL_TEMPLATES[status];
};