📂 Módulo AI & Automations (Ditho)
📄 ai_project_studio.json
{
  "screen": "AIProjectStudio",
  "path": "/ai/studio",
  "area": "AI",
  "description": "Gerar projetos automaticamente a partir de prompts, arquivos ou sites.",
  "layout": { "type": "split", "main": "prompt+preview", "sidebar": "templates" },
  "sections": [
    {
      "name": "Prompt",
      "components": [
        { "type": "textarea", "label": "Digite seu prompt", "props": { "placeholder": "Ex: Crie um roadmap para lançamento de app de fitness" } },
        { "type": "fileUploader", "label": "Upload de arquivos" },
        { "type": "input", "label": "URL de referência", "props": { "placeholder": "Cole um site para análise" } },
        { "type": "button", "label": "Gerar Projeto com AI", "props": { "variant": "primary", "action": "generateProject" } }
      ]
    },
    {
      "name": "Preview",
      "components": [
        { "type": "projectPreview", "label": "Estrutura sugerida pela AI", "props": { "editable": true } },
        { "type": "button", "label": "Salvar Projeto", "props": { "variant": "secondary", "action": "saveProject" } }
      ]
    },
    {
      "name": "Sidebar",
      "components": [
        { "type": "templateList", "label": "Templates AI", "props": { "items": ["Marketing Plan", "Sprint Roadmap", "Research Workflow"] } }
      ]
    }
  ],
  "flows": [
    { "trigger": "click Gerar Projeto com AI", "action": "enviar prompt para AI e popular preview" },
    { "trigger": "click Salvar Projeto", "action": "criar novo projeto no backend" }
  ],
  "connections": {
    "backend": ["POST /ai/project-studio", "POST /projects"],
    "nextScreens": ["/project/:id"]
  }
}

📄 ai_agents.json
{
  "screen": "AIAgents",
  "path": "/ai/agents",
  "area": "AI",
  "description": "Gerenciar e criar agentes de AI personalizados.",
  "layout": { "type": "grid+form" },
  "sections": [
    {
      "name": "Agent List",
      "components": [
        { "type": "agentCardList", "label": "Meus Agentes", "props": { "items": [] } }
      ]
    },
    {
      "name": "Create Agent",
      "components": [
        { "type": "input", "label": "Nome do Agente" },
        { "type": "dropdown", "label": "Papel", "props": { "options": ["Project Manager", "Researcher", "Copywriter", "Analyst"] } },
        { "type": "textarea", "label": "Descrição do Agente" },
        { "type": "fileUploader", "label": "Dados de Treino (opcional)" },
        { "type": "button", "label": "Criar Agente", "props": { "variant": "primary", "action": "createAgent" } }
      ]
    }
  ],
  "flows": [
    { "trigger": "submit Criar Agente", "action": "salvar agente no backend e atualizar lista" },
    { "trigger": "click agent card", "action": "abrir agent_chat.json" }
  ],
  "connections": {
    "backend": ["GET /ai/agents", "POST /ai/agents"],
    "nextScreens": ["/ai/agent/:id/chat"]
  }
}

📄 agent_chat.json
{
  "screen": "AgentChat",
  "path": "/ai/agent/:id/chat",
  "area": "AI",
  "description": "Tela de chat com um agente de AI específico.",
  "layout": { "type": "chat" },
  "sections": [
    {
      "name": "Chat",
      "components": [
        { "type": "messageList", "label": "Histórico de Conversa com AI", "props": { "realtime": true } },
        { "type": "input", "label": "Digite sua mensagem", "props": { "placeholder": "Ex: Crie uma lista de OKRs para este projeto" } },
        { "type": "button", "label": "Enviar", "props": { "variant": "primary", "action": "sendMessage" } }
      ]
    },
    {
      "name": "Sidebar",
      "components": [
        { "type": "agentInfo", "label": "Perfil do Agente", "props": { "fields": ["Nome", "Papel", "Descrição"] } },
        { "type": "button", "label": "Configurar Agente", "props": { "action": "editAgent" } }
      ]
    }
  ],
  "flows": [
    { "trigger": "submit mensagem", "action": "enviar prompt para AI e exibir resposta" },
    { "trigger": "click Configurar Agente", "action": "abrir edição em ai_agents.json" }
  ],
  "connections": {
    "backend": ["WS /ai/agent/:id/chat"],
    "nextScreens": ["/ai/agents"]
  }
}

📄 workflow_builder.json
{
  "screen": "WorkflowBuilder",
  "path": "/automation/workflows",
  "area": "Automations",
  "description": "Construtor visual de automações com AI, estilo no-code.",
  "layout": { "type": "canvas+sidebar" },
  "sections": [
    {
      "name": "Canvas",
      "components": [
        { "type": "nodeEditor", "label": "Editor de Automação", "props": { "nodes": [], "connectable": true } }
      ]
    },
    {
      "name": "Sidebar",
      "components": [
        { "type": "toolbox", "label": "Blocos de Automação", "props": { "items": ["Trigger", "Condition", "Action", "Loop"] } },
        { "type": "button", "label": "Testar Automação", "props": { "variant": "secondary", "action": "runTest" } },
        { "type": "button", "label": "Salvar Automação", "props": { "variant": "primary", "action": "saveWorkflow" } }
      ]
    }
  ],
  "flows": [
    { "trigger": "arrastar bloco", "action": "adicionar ao canvas" },
    { "trigger": "conectar blocos", "action": "criar fluxo lógico" },
    { "trigger": "click Testar Automação", "action": "executar automação em sandbox" },
    { "trigger": "click Salvar Automação", "action": "persistir workflow no backend" }
  ],
  "connections": {
    "backend": ["GET /automation/workflows", "POST /automation/workflows", "PATCH /automation/workflows/:id"],
    "nextScreens": ["/dashboard"]
  }
}
