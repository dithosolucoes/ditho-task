import React, { useState } from 'react';
import { AuthFlow } from './components/auth/AuthFlow';
import { OnboardingWizard } from './components/onboarding/OnboardingWizard';
import { Dashboard } from './components/dashboard/Dashboard';
import { AppView } from './types';

const App = () => {
    const [appView, setAppView] = useState<AppView>('dashboard');

    const handleLogin = () => setAppView('dashboard');
    const handleRegister = () => setAppView('onboarding');
    const handleOnboardingComplete = () => setAppView('dashboard');

    const renderView = () => {
        switch (appView) {
            case 'auth': 
                return (
                    <div className="auth-wrapper">
                        <AuthFlow onLogin={handleLogin} onRegister={handleRegister} />
                    </div>
                );
            case 'onboarding': 
                return (
                    <div className="auth-wrapper">
                        <OnboardingWizard onComplete={handleOnboardingComplete} />
                    </div>
                );
            case 'dashboard': 
                return <Dashboard />;
            default: 
                return (
                    <div className="auth-wrapper">
                        <AuthFlow onLogin={handleLogin} onRegister={handleRegister} />
                    </div>
                );
        }
    };

    return <>{renderView()}</>;
};

export default App;
