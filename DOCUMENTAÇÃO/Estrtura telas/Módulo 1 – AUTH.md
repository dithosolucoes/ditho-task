🚀 Começando com o Módulo 1 – AUTH


📄 login.json
{
  "screen": "Login",
  "path": "/login",
  "area": "Auth",
  "description": "Tela de autenticação do usuário.",
  "layout": {
    "type": "centeredCard",
    "background": "dark",
    "width": 420
  },
  "sections": [
    {
      "name": "Header",
      "components": [
        { "type": "logo", "label": "Ditho" },
        { "type": "subtitle", "label": "Organize. Colabore. Crie com AI." }
      ]
    },
    {
      "name": "Form",
      "components": [
        { "type": "input", "label": "Email", "props": { "placeholder": "Digite seu e-mail", "validation": "email" } },
        { "type": "input", "label": "Senha", "props": { "type": "password", "placeholder": "Digite sua senha", "toggleVisibility": true } },
        { "type": "button", "label": "Entrar", "props": { "variant": "primary", "action": "submitForm" } },
        { "type": "link", "label": "Esqueci minha senha", "props": { "action": "goToForgotPassword" } }
      ]
    },
    {
      "name": "Social Login",
      "components": [
        { "type": "button", "label": "Entrar com Google", "props": { "icon": "google", "action": "socialLogin" } },
        { "type": "button", "label": "Entrar com Apple", "props": { "icon": "apple", "action": "socialLogin" } }
      ]
    },
    {
      "name": "Footer",
      "components": [
        { "type": "text", "label": "Não tem conta?" },
        { "type": "link", "label": "Criar conta grátis", "props": { "action": "goToRegister" } }
      ]
    }
  ],
  "flows": [
    { "trigger": "click Entrar", "action": "autenticar usuário no backend" },
    { "trigger": "click Esqueci minha senha", "action": "redirect /forgot-password" },
    { "trigger": "click Entrar com Google", "action": "OAuth Google" },
    { "trigger": "click Entrar com Apple", "action": "OAuth Apple" },
    { "trigger": "click Criar conta grátis", "action": "redirect /register" }
  ],
  "connections": {
    "backend": ["POST /auth/login", "OAuth Google", "OAuth Apple"],
    "nextScreens": ["/dashboard", "/register", "/forgot-password"]
  }
}

📄 register.json
{
  "screen": "Register",
  "path": "/register",
  "area": "Auth",
  "description": "Cadastro de novo usuário.",
  "layout": { "type": "centeredCard", "background": "dark", "width": 420 },
  "sections": [
    {
      "name": "Form",
      "components": [
        { "type": "input", "label": "Nome" },
        { "type": "input", "label": "Email", "props": { "validation": "email" } },
        { "type": "input", "label": "Senha", "props": { "type": "password" } },
        { "type": "input", "label": "Confirmar senha", "props": { "type": "password" } },
        { "type": "button", "label": "Criar conta", "props": { "variant": "primary", "action": "submitForm" } }
      ]
    },
    {
      "name": "Footer",
      "components": [
        { "type": "text", "label": "Já tem conta?" },
        { "type": "link", "label": "Entrar", "props": { "action": "goToLogin" } }
      ]
    }
  ],
  "flows": [
    { "trigger": "submit Criar conta", "action": "registrar usuário no backend e redirecionar para onboarding" },
    { "trigger": "click Entrar", "action": "redirect /login" }
  ],
  "connections": {
    "backend": ["POST /auth/register"],
    "nextScreens": ["/onboarding", "/login"]
  }
}

📄 forgot_password.json
{
  "screen": "ForgotPassword",
  "path": "/forgot-password",
  "area": "Auth",
  "description": "Tela para recuperar senha.",
  "layout": { "type": "centeredCard", "background": "dark", "width": 420 },
  "sections": [
    {
      "name": "Form",
      "components": [
        { "type": "input", "label": "Email", "props": { "validation": "email" } },
        { "type": "button", "label": "Enviar link de recuperação", "props": { "variant": "primary", "action": "submitForm" } }
      ]
    }
  ],
  "flows": [
    { "trigger": "submit Enviar link", "action": "backend envia email com link de reset" }
  ],
  "connections": {
    "backend": ["POST /auth/forgot-password"],
    "nextScreens": ["/login"]
  }
}

📄 onboarding.json
{
  "screen": "Onboarding",
  "path": "/onboarding",
  "area": "Auth",
  "description": "Primeiro acesso do usuário para configurar workspace inicial.",
  "layout": { "type": "wizard", "background": "dark", "steps": 2 },
  "sections": [
    {
      "name": "Workspace Setup",
      "components": [
        { "type": "input", "label": "Nome do Workspace" },
        { "type": "fileUploader", "label": "Logo" },
        { "type": "button", "label": "Criar Workspace", "props": { "variant": "primary", "action": "createWorkspace" } }
      ]
    },
    {
      "name": "Invite Members",
      "components": [
        { "type": "input", "label": "Emails para convite (separados por vírgula)" },
        { "type": "button", "label": "Enviar Convites", "props": { "variant": "secondary", "action": "inviteMembers" } },
        { "type": "button", "label": "Pular", "props": { "action": "skipInvites" } }
      ]
    }
  ],
  "flows": [
    { "trigger": "submit Criar Workspace", "action": "criar workspace no backend e avançar para convites" },
    { "trigger": "submit Enviar Convites", "action": "enviar convites e redirecionar para dashboard" },
    { "trigger": "click Pular", "action": "redirecionar para dashboard sem convites" }
  ],
  "connections": {
    "backend": ["POST /workspaces", "POST /workspaces/:id/invite"],
    "nextScreens": ["/dashboard"]
  }
}
