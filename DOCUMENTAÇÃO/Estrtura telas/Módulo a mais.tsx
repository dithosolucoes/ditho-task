/* Fix: The file contains documentation text, not code. It has been wrapped in a block comment to prevent compilation errors. */
/*
📂 Módulo UX/UI Extras (Ditho)
📄 global_search.json
{
  "screen": "GlobalSearch",
  "path": "/search",
  "area": "UX",
  "description": "Busca global em workspaces, projetos, tarefas, notas e membros.",
  "layout": { "type": "searchOverlay", "position": "center" },
  "sections": [
    {
      "name": "SearchBar",
      "components": [
        { "type": "input", "label": "Pesquisar", "props": { "placeholder": "Busque em projetos, tarefas, notas e membros...", "shortcut": "Ctrl+K" } }
      ]
    },
    {
      "name": "Results",
      "components": [
        { "type": "resultList", "label": "Resultados", "props": { "groupBy": "tipo", "filters": ["Tarefas", "Projetos", "Notas", "Membros"] } }
      ]
    }
  ],
  "flows": [
    { "trigger": "type query", "action": "buscar resultados em tempo real" },
    { "trigger": "click resultado", "action": "abrir tela correspondente" }
  ],
  "connections": {
    "backend": ["GET /search?q="],
    "nextScreens": ["/project/:id", "/project/:id/task/:taskId", "/workspace/:id/members"]
  }
}

📄 forms_builder.json
{
  "screen": "FormsBuilder",
  "path": "/forms/:id",
  "area": "UX",
  "description": "Criação e edição de formulários customizados para coleta de dados.",
  "layout": { "type": "canvas+sidebar" },
  "sections": [
    {
      "name": "Canvas",
      "components": [
        { "type": "formCanvas", "label": "Área de edição do formulário", "props": { "draggable": true } }
      ]
    },
    {
      "name": "Sidebar",
      "components": [
        { "type": "fieldPalette", "label": "Campos disponíveis", "props": { "items": ["Texto curto", "Texto longo", "Seleção", "Checkbox", "Upload"] } },
        { "type": "brandingOptions", "label": "Personalização", "props": { "options": ["Logo", "Cores", "Fonte"] } },
        { "type": "toggle", "label": "Proteger com senha" }
      ]
    },
    {
      "name": "Footer",
      "components": [
        { "type": "button", "label": "Salvar Formulário", "props": { "variant": "primary", "action": "saveForm" } },
        { "type": "button", "label": "Visualizar", "props": { "variant": "secondary", "action": "previewForm" } }
      ]
    }
  ],
  "flows": [
    { "trigger": "arrastar campo", "action": "adicionar ao canvas" },
    { "trigger": "click Salvar Formulário", "action": "persistir configuração no backend" },
    { "trigger": "click Visualizar", "action": "abrir preview do formulário" }
  ],
  "connections": {
    "backend": ["GET /forms/:id", "POST /forms", "PATCH /forms/:id"],
    "nextScreens": ["/forms/:id/preview"]
  }
}
*/