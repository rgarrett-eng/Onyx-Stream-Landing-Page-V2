import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';
import { SetupGuide } from '@/pages/SetupGuide';
import { PrivacyPolicy } from '@/pages/PrivacyPolicy';
import { TermsOfService } from '@/pages/TermsOfService';
import { RegisterPage } from '@/pages/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/setup" element={<SetupGuide />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
