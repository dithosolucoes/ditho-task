📂 Módulo Dashboard (Ditho)
📄 dashboard.json
{
  "screen": "Dashboard",
  "path": "/dashboard",
  "area": "Dashboard",
  "description": "Tela inicial do usuário, com visão geral de workspaces e projetos recentes.",
  "layout": {
    "type": "split",
    "sidebar": "left",
    "main": "grid"
  },
  "sections": [
    {
      "name": "Sidebar",
      "components": [
        { "type": "logo", "label": "Ditho" },
        { "type": "list", "label": "Workspaces", "props": { "items": ["Workspace A", "Workspace B"], "action": "goToWorkspace" } },
        { "type": "button", "label": "Criar Workspace", "props": { "variant": "primary", "action": "openCreateWorkspaceModal" } }
      ]
    },
    {
      "name": "Main",
      "components": [
        { "type": "title", "label": "Meus Projetos Recentes" },
        { "type": "cardGrid", "label": "Projetos", "props": { "items": [] } },
        { "type": "button", "label": "Novo Projeto", "props": { "variant": "primary", "action": "openCreateProjectModal" } }
      ]
    }
  ],
  "flows": [
    { "trigger": "click Criar Workspace", "action": "abrir modal de criação de workspace" },
    { "trigger": "click Novo Projeto", "action": "abrir modal de criação de projeto" },
    { "trigger": "click Workspace item", "action": "abrir workspace selecionado" }
  ],
  "connections": {
    "backend": ["GET /workspaces", "GET /projects/recent", "POST /workspaces", "POST /projects"],
    "nextScreens": ["/workspace/:id", "/project/:id"]
  }
}

📄 workspace_home.json
{
  "screen": "WorkspaceHome",
  "path": "/workspace/:id",
  "area": "Dashboard",
  "description": "Tela principal de um workspace, listando folders, projetos e subspaces.",
  "layout": {
    "type": "split",
    "sidebar": "left",
    "main": "list+grid"
  },
  "sections": [
    {
      "name": "Sidebar",
      "components": [
        { "type": "title", "label": "Workspace Name" },
        { "type": "menu", "label": "Navegação", "props": { "items": ["Home", "Configurações", "Membros"] } },
        { "type": "list", "label": "Folders", "props": { "items": ["Marketing", "Produto"], "action": "goToFolder" } },
        { "type": "button", "label": "Novo Folder", "props": { "action": "openCreateFolderModal" } }
      ]
    },
    {
      "name": "Main",
      "components": [
        { "type": "title", "label": "Projetos do Workspace" },
        { "type": "cardGrid", "label": "Projetos", "props": { "items": [] } },
        { "type": "button", "label": "Novo Projeto", "props": { "variant": "primary", "action": "openCreateProjectModal" } }
      ]
    }
  ],
  "flows": [
    { "trigger": "click Novo Projeto", "action": "abrir modal de criação de projeto" },
    { "trigger": "click Novo Folder", "action": "abrir modal de criação de folder" },
    { "trigger": "click Projeto", "action": "abrir tela do projeto" },
    { "trigger": "click Configurações", "action": "abrir workspace_config.json" }
  ],
  "connections": {
    "backend": ["GET /workspaces/:id", "GET /workspaces/:id/projects", "POST /projects", "POST /folders"],
    "nextScreens": ["/project/:id", "/workspace/:id/settings"]
  }
}

📄 workspace_config.json
{
  "screen": "WorkspaceConfig",
  "path": "/workspace/:id/settings",
  "area": "Dashboard",
  "description": "Configurações do workspace: nome, logo, plano, membros.",
  "layout": {
    "type": "tabs",
    "tabs": ["Geral", "Membros", "Plano"]
  },
  "sections": [
    {
      "name": "Geral",
      "components": [
        { "type": "input", "label": "Nome do Workspace" },
        { "type": "fileUploader", "label": "Logo do Workspace" },
        { "type": "button", "label": "Salvar alterações", "props": { "variant": "primary", "action": "saveChanges" } }
      ]
    },
    {
      "name": "Membros",
      "components": [
        { "type": "list", "label": "Lista de membros", "props": { "items": [] } },
        { "type": "input", "label": "Convidar por email" },
        { "type": "button", "label": "Enviar convite", "props": { "variant": "secondary", "action": "inviteMember" } }
      ]
    },
    {
      "name": "Plano",
      "components": [
        { "type": "planCard", "label": "Free" },
        { "type": "planCard", "label": "Pro" },
        { "type": "planCard", "label": "Enterprise" },
        { "type": "button", "label": "Upgrade", "props": { "variant": "primary", "action": "goToBilling" } }
      ]
    }
  ],
  "flows": [
    { "trigger": "click Salvar alterações", "action": "salvar dados do workspace" },
    { "trigger": "submit Enviar convite", "action": "enviar convite para email" },
    { "trigger": "click Upgrade", "action": "abrir tela de billing" }
  ],
  "connections": {
    "backend": ["GET /workspaces/:id", "PATCH /workspaces/:id", "POST /workspaces/:id/invite"],
    "nextScreens": ["/settings/billing"]
  }
}
