import { useState } from 'react';
import InternRegister from './assets/components/InternRegister';
import InternAllocation from './assets/components/InternAllocation';
import MentorAssignment from './assets/components/MentorAssignment';
import InternTracking from './assets/components/InternTracking';
import Dashboard from './assets/components/Dashboard';
import './index.css';

const STEPS = [
  { id: 1, label: 'Registration',  icon: '📝' },
  { id: 2, label: 'Allocation',    icon: '🎯' },
  { id: 3, label: 'Mentor',        icon: '👨‍🏫' },
  { id: 4, label: 'Tracking',      icon: '📊' },
  { id: 5, label: 'Dashboard',     icon: '🚀' },
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [appData, setAppData] = useState({});

  const goToStep = (step) => {
    if (step <= currentStep || completedSteps.includes(step - 1)) {
      setCurrentStep(step);
    }
  };

  const completeStep = (step, data = {}) => {
    setCompletedSteps(prev => [...new Set([...prev, step])]);
    setAppData(prev => ({ ...prev, ...data }));
    setCurrentStep(step + 1);
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="navbar-brand">
          <img src="/logo.png" alt="Logo" className="navbar-logo"
            onError={e => { e.target.style.display='none'; }} />
          <span className="navbar-title">AR INFOTEK — Internship Portal</span>
        </div>

        <div className="navbar-steps">
          {STEPS.map(step => (
            <button
              key={step.id}
              className={`nav-step ${currentStep === step.id ? 'active' : ''} ${completedSteps.includes(step.id) ? 'completed' : ''}`}
              onClick={() => goToStep(step.id)}
            >
              <span className="step-num">
                {completedSteps.includes(step.id) ? '✓' : step.id}
              </span>
              {step.icon} {step.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ===== PAGE CONTENT ===== */}
      {currentStep === 1 && (
        <InternRegister
          onComplete={(data) => completeStep(1, { registration: data })}
        />
      )}
      {currentStep === 2 && (
        <InternAllocation
          registration={appData.registration}
          onComplete={(data) => completeStep(2, { allocation: data })}
          onBack={() => setCurrentStep(1)}
        />
      )}
      {currentStep === 3 && (
        <MentorAssignment
          allocation={appData.allocation}
          onComplete={(data) => completeStep(3, { mentor: data })}
          onBack={() => setCurrentStep(2)}
        />
      )}
      {currentStep === 4 && (
        <InternTracking
          appData={appData}
          onComplete={() => completeStep(4, {})}
          onBack={() => setCurrentStep(3)}
        />
      )}
      {currentStep === 5 && (
        <Dashboard
          appData={appData}
          onBack={() => setCurrentStep(4)}
        />
      )}
    </div>
  );
}