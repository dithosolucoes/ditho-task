📂 Módulo Projects (Ditho)
📄 project_base.json
{
  "screen": "ProjectBase",
  "path": "/project/:id",
  "area": "Projects",
  "description": "Tela principal de um projeto com tarefas, notas, views e colaboração.",
  "layout": {
    "type": "split",
    "sidebar": "right",
    "main": "editor+views"
  },
  "sections": [
    {
      "name": "Header",
      "components": [
        { "type": "title", "label": "Nome do Projeto" },
        { "type": "viewSwitcher", "props": { "options": ["List", "Board", "Calendar", "Table", "Mindmap", "Org Chart", "Timeline"], "default": "List" } },
        { "type": "menu", "label": "Ações do Projeto", "props": { "items": ["Duplicar", "Exportar", "Excluir"] } }
      ]
    },
    {
      "name": "Main Content",
      "components": [
        { "type": "editor", "label": "Editor Markdown", "props": { "commands": ["/task", "/note", "/divider", "/ai"] } },
        { "type": "taskList", "label": "Lista de Tarefas" },
        { "type": "button", "label": "Adicionar Tarefa", "props": { "variant": "primary", "action": "openTaskModal" } }
      ]
    },
    {
      "name": "Sidebar",
      "components": [
        { "type": "chat", "label": "Chat do Projeto" },
        { "type": "activityFeed", "label": "Histórico de alterações" }
      ]
    }
  ],
  "flows": [
    { "trigger": "click Adicionar Tarefa", "action": "abrir task_modal.json" }
  ]
}
