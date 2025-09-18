import React, { useState } from 'react';
import { AuthView } from '../../types';

export const RegisterForm = ({ setView, onRegisterSuccess }: { setView: (view: AuthView) => void; onRegisterSuccess: () => void; }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    
    const handleFormSubmit = (e: React.FormEvent) => { 
        e.preventDefault(); 
        onRegisterSuccess(); 
    };

    return (
        <>
            <form className="auth-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome completo</label>
                    <input type="text" id="name" placeholder="Digite seu nome" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Digite seu e-mail" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <div className="input-wrapper">
                        <input type={passwordVisible ? "text" : "password"} id="password" placeholder="Crie uma senha" required />
                        <button type="button" className="password-toggle" onClick={() => setPasswordVisible(!passwordVisible)} aria-label="Mostrar/esconder senha">
                            {passwordVisible ? '👁️' : '👁️‍🗨️'}
                        </button>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirmar senha</label>
                    <div className="input-wrapper">
                        <input type={confirmPasswordVisible ? "text" : "password"} id="confirm-password" placeholder="Confirme sua senha" required />
                        <button type="button" className="password-toggle" onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)} aria-label="Mostrar/esconder senha">
                            {confirmPasswordVisible ? '👁️' : '👁️‍🗨️'}
                        </button>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary-auth">Criar conta</button>
            </form>
            <footer className="auth-footer">
                <span>Já tem conta? </span>
                <a href="#" onClick={(e) => { e.preventDefault(); setView('login'); }}>Entrar</a>
            </footer>
        </>
    );
};
