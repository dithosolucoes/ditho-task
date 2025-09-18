import React, { useState } from 'react';
import { AuthView } from '../../types';
import { GoogleIcon, AppleIcon } from '../common/Icons';

export const LoginForm = ({ setView, onAuthSuccess }: { setView: (view: AuthView) => void; onAuthSuccess: () => void; }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    
    const handleFormSubmit = (e: React.FormEvent) => { 
        e.preventDefault(); 
        onAuthSuccess(); 
    };

    return (
        <>
            <form className="auth-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Digite seu e-mail" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <div className="input-wrapper">
                        <input type={passwordVisible ? "text" : "password"} id="password" placeholder="Digite sua senha" required />
                        <button type="button" className="password-toggle" onClick={() => setPasswordVisible(!passwordVisible)} aria-label="Mostrar/esconder senha">
                            {passwordVisible ? '👁️' : '👁️‍🗨️'}
                        </button>
                    </div>
                </div>
                <a href="#" onClick={(e) => { e.preventDefault(); setView('forgotPassword'); }} className="forgot-password-link">
                    Esqueci minha senha
                </a>
                <button type="submit" className="btn btn-primary-auth">Entrar</button>
            </form>
            <div className="divider">OU</div>
            <section className="social-login">
                <button className="btn btn-social"><GoogleIcon /> Entrar com Google</button>
                <button className="btn btn-social"><AppleIcon /> Entrar com Apple</button>
            </section>
            <footer className="auth-footer">
                <span>Não tem conta? </span>
                <a href="#" onClick={(e) => { e.preventDefault(); setView('register'); }}>Criar conta grátis</a>
            </footer>
        </>
    );
};
