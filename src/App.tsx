import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecruitmentForm from './components/RecruitmentForm';
import ThankYouPage from './components/ThankYouPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<RecruitmentForm />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;