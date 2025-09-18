import React from 'react';
import { AuthView } from '../../types';

export const ForgotPasswordForm = ({ setView }: { setView: (view: AuthView) => void }) => {
    const handleFormSubmit = (e: React.FormEvent) => { 
        e.preventDefault(); 
        // Logic to send recovery link would go here
    };

    return (
        <>
            <p className="form-description">Digite seu e-mail e enviaremos um link para você redefinir sua senha.</p>
            <form className="auth-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Digite seu e-mail" required />
                </div>
                <button type="submit" className="btn btn-primary-auth">Enviar link de recuperação</button>
            </form>
            <footer className="auth-footer">
                <a href="#" onClick={(e) => { e.preventDefault(); setView('login'); }}>Voltar para o login</a>
            </footer>
        </>
    );
};
