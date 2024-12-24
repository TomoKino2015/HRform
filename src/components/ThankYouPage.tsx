import React from 'react';
import { useLocation } from 'react-router-dom';
import ThankYouAccepted from './ThankYouAccepted';
import ThankYouRejected from './ThankYouRejected';

const ThankYouPage: React.FC = () => {
  const location = useLocation();
  const status = location.state?.status;

  return status === 'NG' ? <ThankYouRejected /> : <ThankYouAccepted />;
};

export default ThankYouPage;