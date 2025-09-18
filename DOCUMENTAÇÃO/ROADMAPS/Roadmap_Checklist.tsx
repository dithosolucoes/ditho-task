/*
✅ DITHO - ROADMAP CHECKLIST MESTRE
======================================
Este é o nosso checklist central. Cada item aqui será marcado com [x] ao ser concluído.
A implementação de cada item DEVE seguir as especificações dos arquivos de documentação correspondentes.

---

### 🔹 Fase 1 – Fundamentos (Infra + Estrutura)
// Ref: Módulo 1 – AUTH.tsx
// Ref: Roadmap Frontend Completo (Checklist de Telas & Componentes).tsx

[x] **Tela de Login (/login)**
    [x] Componente: Header (Logo, Subtítulo)
    [x] Componente: Formulário (Email, Senha com visibilidade)
    [x] Componente: Link "Esqueci minha senha"
    [x] Componente: Botão de Login principal
    [x] Componente: Divisor "OU"
    [x] Componente: Botões de Login Social (Google, Apple)
    [x] Componente: Footer (Link para Criar Conta)

[x] **Tela de Cadastro (/register)**
    [x] Componente: Formulário (Nome, Email, Senha, Confirmar Senha)
    [x] Componente: Botão "Criar conta"
    [x] Componente: Footer (Link para Login)
    [x] Lógica: Validação de campos e comparação de senhas

[x] **Tela de Recuperar Senha (/forgot-password)**
    [x] Componente: Formulário (Email)
    [x] Componente: Botão "Enviar link de recuperação"
    [x] Lógica: Exibir mensagem de sucesso/confirmação

[x] **Tela de Onboarding (/onboarding)**
    [x] Passo 1: Configuração do Workspace (Nome, Logo)
    [x] Passo 2: Convite de Membros (Input de emails, Pular)
    [x] Lógica: Navegação entre os passos do wizard

[x] **Estrutura de Navegação Inicial**
    [x] Componente: Sidebar básica (placeholder)
    [x] Componente: Header básico (placeholder)
    [x] Lógica: Roteamento inicial (se não logado vai para /login, se logado vai para /dashboard)

---

### 🔹 Fase 2 – Projetos & Tarefas (Core do Produto)
// Ref: Modulo - Projetos.tsx
// Ref: Módulo Dashboard.tsx

[ ] **Tela do Dashboard (/dashboard)**
    [ ] Componente: Sidebar com lista de Workspaces
    [ ] Componente: Área principal com "Projetos Recentes"
    [ ] Componente: Botão "Criar Workspace" (abre modal)
    [ ] Componente: Botão "Novo Projeto" (abre modal)

[ ] **Tela Home do Workspace (/workspace/:id)**
    [ ] Componente: Sidebar com navegação do Workspace (Home, Configs, Membros) e lista de Folders
    [ ] Componente: Área principal com grid de projetos
    [ ] Componente: Botões "Novo Folder" e "Novo Projeto"

[ ] **Tela Base do Projeto (/project/:id)**
    [ ] Componente: Header do Projeto (Título, Switcher de Views, Menu de Ações)
    [ ] Componente: Editor Markdown com suporte a /commands
    [ ] Componente: Lista de Tarefas inicial (List View)
    [ ] Componente: Botão "Adicionar Tarefa"

[ ] **Modal de Detalhes da Tarefa**
    [ ] Componente: Título e Descrição editáveis
    [ ] Componente: Seletor de Assignees
    [ ] Componente: Seletor de Data de Vencimento
    [ ] Componente: Seletor de Prioridade
    [ ] Componente: Seletor de Tags
    [ ] Componente: Uploader de Arquivos (drag & drop)
    [ ] Seção: Comentários básicos

---

### 🔹 Fase 3 – Visualizações (Views)
// Ref: Modulo - Projetos.tsx

[ ] **Implementação do View Switcher**
    [ ] Lógica para alternar a visualização do conteúdo do projeto sem recarregar a página.

[ ] **Board View (Kanban)**
    [ ] Componente: Colunas customizáveis
    [ ] Componente: Cards de tarefas
    [ ] Lógica: Drag & drop de tarefas entre colunas

[ ] **Calendar View**
    [ ] Componente: Grid de Calendário (mês/semana/dia)
    [ ] Componente: Eventos representando tarefas com data
    [ ] Lógica: Drag & drop de tarefas entre dias

[ ] **Table View**
    [ ] Componente: Tabela com colunas customizáveis (Tarefa, Assignee, Data, etc.)
    [ ] Lógica: Filtros e ordenação por coluna

[ ] **Mind Map View**
    [ ] Componente: Nó central (Projeto) e nós filhos (Tarefas)
    [ ] Lógica: Expandir e recolher subtarefas
    [ ] Lógica: Adicionar novos nós visualmente

[ ] **Org Chart View**
    [ ] Componente: Visualização hierárquica vertical

[ ] **Timeline / Workflow View**
    [ ] Componente: Gráfico de Gantt simplificado
    [ ] Lógica: Ajuste de datas com drag & drop nas barras de tempo

---

### 🔹 Fase 4 – Colaboração
// Ref: Modulo Colaboração.tsx

[ ] **Sincronização Real-time (WebSocket)**
    [ ] Lógica: Edição de texto e tarefas visível para todos os usuários em tempo real
    [ ] Feature: Cursores multiusuário com avatares

[ ] **Chat do Projeto**
    [ ] Componente: Sidebar/painel de chat
    [ ] Componente: Lista de mensagens
    [ ] Componente: Input para nova mensagem
    [ ] Feature: Notificação de @menções

[ ] **Comentários Avançados em Tarefas**
    [ ] Lógica: Threads de respostas encadeadas
    [ ] Lógica: Notificações para usuários mencionados

[ ] **Feed de Atividade e Histórico**
    [ ] Tela: Feed de atividades do projeto
    [ ] Tela: Histórico de alterações (Changelog)

[ ] **Central de Notificações**
    [ ] Componente: Dropdown/painel de notificações in-app (lidas/não lidas)

---

### 🔹 Fase 5 – Automação & AI
// Ref: Modulo IA e automação.tsx

[ ] **AI Assist no Editor**
    [ ] Lógica: Ativar com /ai
    [ ] Ações: Expandir, resumir, traduzir, reescrever

[ ] **AI Project Studio (/ai/studio)**
    [ ] Tela: Input de prompt (texto, upload de arquivo, URL)
    [ ] Tela: Preview do projeto gerado
    [ ] Lógica: Salvar preview como um novo projeto

[ ] **Hub de Agentes de AI (/ai/agents)**
    [ ] Tela: Listagem dos agentes criados
    [ ] Tela: Formulário para criação de novo agente (Nome, Papel, Treino)

[ ] **Chat com Agente (/ai/agent/:id/chat)**
    [ ] Tela: Interface de chat para interagir com um agente específico

[ ] **Construtor de Automações (/automation/workflows)**
    [ ] Tela: Canvas visual (node editor)
    [ ] Componente: Toolbox com blocos (Trigger, Action, Condition)
    [ ] Lógica: Conectar blocos para criar workflows

---

### 🔹 Fase 6 – Usuário & Times
// Ref: Módulo usuários e times.tsx

[ ] **Tela de Perfil (/profile)**
    [ ] Seção: Avatar, Nome, Email, Idioma, Timezone
    [ ] Seção: Preferências de notificação e tema

[ ] **Tela de Membros do Workspace (/workspace/:id/members)**
    [ ] Componente: Lista de membros (Nome, Email, Role)
    [ ] Componente: Formulário para convidar novos membros
    [ ] Lógica: Alterar role e remover membros

[ ] **Tela de Configurações do Workspace (/workspace/:id/settings)**
    [ ] Aba Geral: Nome do Workspace, Logo
    [ ] Aba Membros: (Reutiliza a tela de membros)
    [ ] Aba Plano: (Visualização do plano atual)

---

### 🔹 Fase 7 – Integrações
// Ref: Módulo Integrações.tsx

[ ] **Central de Integrações (/settings/integrations)**
    [ ] Componente: Grid de cards de integrações (Google Calendar, Slack, etc.)
    [ ] Lógica: Botões para Conectar/Desconectar (fluxo OAuth)

[ ] **Gestão de Chaves de API (/settings/api)**
    [ ] Componente: Lista de chaves de API geradas
    [ ] Componente: Formulário para gerar nova chave

---

### 🔹 Fase 8 – UX/UI Refinamento
// Ref: Módulo a mais.tsx

[ ] **Pesquisa Global**
    [ ] Componente: Overlay de busca (ativado por atalho, ex: Cmd+K)
    [ ] Lógica: Busca em tempo real em projetos, tarefas, etc.

[ ] **Construtor de Formulários (/forms/:id)**
    [ ] Tela: Canvas para montar formulários
    [ ] Componente: Paleta de campos (Texto, Seleção, Upload)
    [ ] Seção: Opções de branding e segurança (senha)

[ ] **Funcionalidades Adicionais**
    [ ] Lógica: Drag & drop universal (tarefas, folders, projetos)
    [ ] Lógica: Recorrência de tarefas
    [ ] Lógica: Exportação (CSV, PDF, JSON)
    [ ] Lógica: Modo Offline

---

### 🔹 Fase 9 – Segurança & Compliance
// Ref: Módulo Segurança..tsx

[ ] **Configurações de Segurança (/settings/security)**
    [ ] Aba: Ativação de 2FA (QR Code)
    [ ] Aba: Configuração de SSO/SCIM
    [ ] Aba: Políticas de acesso (forçar 2FA)

[ ] **Logs de Auditoria (/settings/logs)**
    [ ] Componente: Tabela de logs com filtros
    [ ] Lógica: Exportação dos logs

---

### 🔹 Fase 10 – Modelo de Negócio
// Ref: Módulo Billing.tsx (a ser criado)

[ ] **Tela de Planos e Upgrade**
    [ ] Componente: Comparativo de planos (Free, Pro, Enterprise)
    [ ] Lógica: Botão de Upgrade que leva ao fluxo de pagamento

[ ] **Tela de Billing**
    [ ] Componente: Formulário de pagamento (Stripe/Paddle)
    [ ] Seção: Histórico de faturas
    [ ] Seção: Visualização de uso e limites (AI, storage)
