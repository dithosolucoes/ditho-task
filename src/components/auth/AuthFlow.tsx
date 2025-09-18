import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { ForgotPasswordForm } from './ForgotPasswordForm';
import { AuthView } from '../../types';

const AuthHeader = () => (
    <header className="auth-header">
        <div className="logo">Ditho</div>
        <p className="subtitle">Organize. Colabore. Crie com AI.</p>
    </header>
);

export const AuthFlow = ({ onLogin, onRegister }: { onLogin: () => void; onRegister: () => void; }) => {
    const [view, setView] = useState<AuthView>('login');

    return (
        <div className="auth-container">
            <AuthHeader />
            {view === 'login' && <LoginForm setView={setView} onAuthSuccess={onLogin} />}
            {view === 'register' && <RegisterForm setView={setView} onRegisterSuccess={onRegister} />}
            {view === 'forgotPassword' && <ForgotPasswordForm setView={setView} />}
        </div>
    );
};
