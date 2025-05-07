import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LandingPage from "./pages/LandingPage";
import Dashborad from './pages/Home/Dashborad';
import EditResue from './pages/ResumeUpdate/EditResue';

const App = () => {
  return (
    <>
    <div>
      <Router>
        <Routes>
          { /*Default Route */ }
          <Route path="/" element={< LandingPage />} />
          <Route path="/dashboard" element={< Dashborad />} />
          <Route path="/resume/:resumeId" element={< EditResue />} />
        </Routes>
      </Router>
    </div>

    <Toaster
      toastOptions={{
        className: "",
        style: {
          fontSize: "13px",
        },
      }}
    />
    </>
  );
};

export default App;