import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DatabaseNoticeModal } from './components/DatabaseNoticeModal';
import { HomePage } from './pages/HomePage';
import { ApplyPage } from './pages/ApplyPage';

const AppLayout: React.FC = () => {
  const [dbModalOpen, setDbModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 flex flex-col justify-between">
      <div>
        {/* Sticky Header Navigation */}
        <Navbar
          onOpenDatabaseModal={() => setDbModalOpen(true)}
          onApplyClick={() => navigate('/apply')}
        />

        {/* Dynamic Page Router */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/application" element={<Navigate to="/apply" replace />} />
          <Route path="/wl" element={<Navigate to="/apply" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer onApplyClick={() => navigate('/apply')} />

      {/* Database Modal Notice */}
      <DatabaseNoticeModal
        isOpen={dbModalOpen}
        onClose={() => setDbModalOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};

export default App;
