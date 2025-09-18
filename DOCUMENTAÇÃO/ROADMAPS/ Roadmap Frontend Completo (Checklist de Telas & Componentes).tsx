/* Fix: The file contains documentation text, not code. It has been wrapped in a block comment to prevent compilation errors. */
/*
🎨 Roadmap Frontend Completo (Checklist de Telas & Componentes)
🔹 Fase 1 – Fundamentos (Infra + Estrutura)

📌 Backend foca em auth e hierarquia, aqui no front criamos o esqueleto de navegação e autenticação.

Áreas & Telas

🔑 Autenticação

Tela de Login (email/senha, Google, Apple, SSO).

Tela de Cadastro (form + validações).

Tela de Recuperar Senha.

Tela de Onboarding inicial (criar workspace).

🏠 Dashboard inicial

Listagem de Workspaces.

Botão “Criar Workspace”.

🗂 Workspace

Tela de Home Folder (sem projeto → estado vazio).

Tela de Folders listados.

Tela de Configurações de Workspace (nome, logo, plano, membros).

Componentes

Header (logo, menu perfil, switch tema).

Sidebar básica (Workspaces → Folders → Projects).

Botões primários/secundários.

Formulários (inputs, checkboxes, dropdowns).

Toasts de feedback (sucesso, erro).

🔹 Fase 2 – Core (Projetos & Tarefas)

📌 Aqui o front ganha a primeira versão usável (editor + tarefas).

Áreas & Telas

📄 Project Page (base)

Header do projeto (nome, menu opções, trocar view).

Sidebar do projeto (navegação interna).

Editor markdown central.

Lista de tarefas (checklist).

Estado vazio (“adicione sua primeira tarefa”).

✅ Task Modal (detalhe de tarefa)

Título + descrição (markdown).

Assignees (dropdown usuários).

Data de vencimento (date picker).

Prioridade (dropdown).

Tags (autocomplete).

Upload de arquivos (drag & drop).

Comentários básicos.

Componentes

Task item (checkbox + texto).

Botão “+ adicionar tarefa”.

Modal de detalhe (com tabs: detalhes / comentários / anexos).

File uploader (drag & drop + preview).

Markdown editor com toolbar mínima (/commands).

🔹 Fase 3 – Visualizações (Views)

📌 Mesmos dados, diferentes telas.

Áreas & Telas

🔘 View Switcher (toolbar) → botões: List, Board, Calendar, Table, Mindmap, Org Chart, Timeline.

📋 List View

Estrutura linear (padrão inicial).

📌 Board View (Kanban)

Colunas personalizáveis.

Cartões arrastáveis (drag & drop).

📅 Calendar View

Eventos por data.

Drag & drop entre dias.

📊 Table View

Colunas customizáveis.

Filtros e ordenação.

🌳 Mind Map View

Nós + sub-nós conectados.

Expandir/recolher.

🧩 Org Chart View

Hierarquia vertical.

📈 Timeline / Workflow

Gantt simplificado (tarefas em barras no tempo).

Componentes

Toggle de views.

Drag & drop universal.

Calendar grid.

Kanban columns + cards.

Mindmap node.

Timeline bar.

🔹 Fase 4 – Colaboração (Real-time)

📌 Aqui o produto ganha alma: colaboração estilo Google Docs.

Áreas & Telas

🗨 Chat do Projeto

Sidebar de chat.

Threads de mensagens.

Menções com @.

💬 Comentários em Tarefas

Inline na task modal.

🔄 Histórico & Changelog

Timeline de eventos do projeto.

Emails automáticos (UI config de notificações).

Componentes

Cursor multiusuário (avatar + highlight).

Chat box + mensagens (com timestamps, avatares).

Notificações in-app (toast, badge, dropdown de alerts).

Feed de atividade.

🔹 Fase 5 – Automação & AI

📌 O diferencial moderno → AI integrada no front.

Áreas & Telas

✨ AI Assist (no editor)

Botão /ai → expandir, resumir, traduzir, reescrever.

🚀 AI Project Studio

Tela de prompt input.

Upload de arquivos (PDF, vídeo, site).

Output = novo projeto gerado.

🤖 Agentes

Tela “Meus Agentes”.

Criar agente (nome, avatar, role, dataset).

Chat com agente.

👥 Agent Teams

Tela de orquestração de agentes.

Visualização tipo flowchart (agente → subtarefas).

🔀 Workflow Generator

Tela de automação estilo “Node Editor”.

Blocos: Trigger, Condition, Action.

Edição via chat (“adicione condição X”).

Componentes

Prompt modal (textarea + botões).

AI response box (loading states, retry).

Flow editor (drag nodes, conectar linhas).

Agent card (avatar, descrição, ações).

🔹 Fase 6 – Usuário & Times

📌 Camada social e de organização.

Áreas & Telas

👤 Perfil (nome, avatar, timezone, preferências).

👥 Membros do Workspace

Lista de usuários + roles.

Convite por email/link.

⚙️ Configurações do Workspace

Nome, logo, plano, billing.

Notificações globais.

Componentes

Avatar uploader.

Role selector (dropdown Owner/Admin/Member/Guest).

Invite modal.

🔹 Fase 7 – Integrações

📌 Conectar Taskade ao mundo externo.

Áreas & Telas

🔗 Central de Integrações

Google Calendar.

Outlook.

Google Drive, Dropbox, OneDrive.

Slack/Discord.

Zapier/Make.

API Keys.

Componentes

Card de integração (logo + botão conectar).

Status de conexão (ativo/inativo).

API key manager (gerar, revogar).

🔹 Fase 8 – UX/UI Refinamento

📌 Agora é polimento: experiência premium.

Áreas & Telas

🔍 Pesquisa Global (full search + filtros).

🏷 Tags & Labels (gerenciador).

📄 Export/Import (tela com opções: Markdown, CSV, PDF, JSON).

📋 Formulários (criar formulário → branding → senha).

📱 Mobile Responsivo.

Componentes

Command Palette (/ ou Cmd+K).

Tag selector.

Export modal.

Form builder (inputs + design).

🔹 Fase 9 – Segurança & Compliance

📌 Camada enterprise.

Áreas & Telas

🔒 Segurança da Conta

2FA setup.

SSO.

SCIM.

📜 Compliance

Logs de auditoria.

Políticas.

Componentes

2FA QR Code + input token.

Logs table (eventos, usuários, timestamp).

🔹 Fase 10 – Monetização

📌 Tornar SaaS.

Áreas & Telas

💳 Billing & Planos

Tela de upgrade (Free → Pro → Enterprise).

Tela de billing (cartão, faturas, limites de AI).

Tela de Admin para controlar cotas (AI usage, histórico).

Componentes

Plan card (features, preço).

Billing form (Stripe/Paddle).

Usage bar (limite de AI).
*/
