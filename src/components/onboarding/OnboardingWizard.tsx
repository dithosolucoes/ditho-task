import React, { useState } from 'react';

export const OnboardingWizard = ({ onComplete }: { onComplete: () => void; }) => {
    const [step, setStep] = useState(1);

    const handleWorkspaceSubmit = (e: React.FormEvent) => { 
        e.preventDefault(); 
        setStep(2); 
    };

    const handleInvitesSubmit = (e: React.FormEvent) => { 
        e.preventDefault(); 
        onComplete(); 
    };

    const handleSkip = (e: React.MouseEvent) => { 
        e.preventDefault(); 
        onComplete(); 
    };

    return (
        <div className="onboarding-container">
            {step === 1 && (
                <>
                    <header className="onboarding-header">
                        <h2>Crie seu primeiro Workspace</h2>
                        <p>Workspaces são onde seus projetos e equipes vivem.</p>
                    </header>
                    <form className="auth-form" onSubmit={handleWorkspaceSubmit}>
                        <div className="form-group">
                            <label htmlFor="workspace-name">Nome do Workspace</label>
                            <input type="text" id="workspace-name" placeholder="Ex: Marketing, Produto" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="workspace-logo">Logo (Opcional)</label>
                            <input type="file" id="workspace-logo" className="file-input" />
                        </div>
                        <button type="submit" className="btn btn-primary-auth">Continuar</button>
                    </form>
                </>
            )}
            {step === 2 && (
                <>
                    <header className="onboarding-header">
                        <h2>Convide sua equipe</h2>
                        <p>Ditho é melhor com colaboradores. Você pode pular e convidar depois.</p>
                    </header>
                    <form className="auth-form" onSubmit={handleInvitesSubmit}>
                        <div className="form-group">
                            <label htmlFor="invite-emails">Emails</label>
                            <textarea id="invite-emails" placeholder="email1@exemplo.com, email2@exemplo.com..." rows={4}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary-auth">Enviar Convites</button>
                        <button onClick={handleSkip} className="btn btn-secondary">Pular por agora</button>
                    </form>
                </>
            )}
        </div>
    );
};
