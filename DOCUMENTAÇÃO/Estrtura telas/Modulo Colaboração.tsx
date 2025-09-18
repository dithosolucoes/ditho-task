/* Fix: The file contains documentation text, not code. It has been wrapped in a block comment to prevent compilation errors. */
/*
📂 Módulo Colaboração (Ditho)
📄 project_chat.json
{
  "screen": "ProjectChat",
  "path": "/project/:id/chat",
  "area": "Collaboration",
  "description": "Chat em tempo real dentro de um projeto.",
  "layout": { "type": "split", "main": "chat", "sidebar": "users" },
  "sections": [
    {
      "name": "Chat",
      "components": [
        { "type": "messageList", "label": "Mensagens do chat", "props": { "realtime": true } },
        { "type": "input", "label": "Nova mensagem", "props": { "placeholder": "Digite sua mensagem..." } },
        { "type": "button", "label": "Enviar", "props": { "variant": "primary", "action": "sendMessage" } }
      ]
    },
    {
      "name": "Sidebar",
      "components": [
        { "type": "userList", "label": "Usuários online", "props": { "showPresence": true } }
      ]
    }
  ],
  "flows": [
    { "trigger": "submit Nova mensagem", "action": "enviar mensagem em tempo real" },
    { "trigger": "entrada usuário", "action": "mostrar status online" },
    { "trigger": "saída usuário", "action": "mostrar offline" }
  ],
  "connections": {
    "backend": ["WS /chat/:projectId", "GET /projects/:id/users"],
    "nextScreens": []
  }
}

📄 task_comments.json
{
  "screen": "TaskComments",
  "path": "/project/:id/task/:taskId/comments",
  "area": "Collaboration",
  "description": "Comentários em threads dentro de uma tarefa.",
  "layout": { "type": "threadedComments" },
  "sections": [
    {
      "name": "Comments",
      "components": [
        { "type": "commentList", "label": "Comentários", "props": { "threaded": true, "mentions": true } },
        { "type": "input", "label": "Novo comentário", "props": { "placeholder": "Escreva um comentário..." } },
        { "type": "button", "label": "Postar", "props": { "action": "postComment" } }
      ]
    }
  ],
  "flows": [
    { "trigger": "submit Novo comentário", "action": "salvar comentário e atualizar em tempo real" },
    { "trigger": "@menção", "action": "notificar usuário mencionado" },
    { "trigger": "resposta comentário", "action": "criar thread dentro do comentário" }
  ],
  "connections": {
    "backend": ["GET /tasks/:id/comments", "POST /tasks/:id/comments"],
    "nextScreens": []
  }
}

📄 activity_feed.json
{
  "screen": "ActivityFeed",
  "path": "/project/:id/activity",
  "area": "Collaboration",
  "description": "Feed de atividades mostrando alterações do projeto em tempo real.",
  "layout": { "type": "feed" },
  "sections": [
    {
      "name": "Feed",
      "components": [
        { "type": "activityList", "label": "Histórico de Atividades", "props": { "realtime": true } }
      ]
    }
  ],
  "flows": [
    { "trigger": "nova alteração", "action": "exibir entrada no feed" },
    { "trigger": "click item", "action": "navegar para elemento relacionado (task, note, arquivo)" }
  ],
  "connections": {
    "backend": ["GET /projects/:id/activity", "WS /projects/:id/activity"],
    "nextScreens": ["/project/:id/task/:taskId"]
  }
}

📄 notifications.json
{
  "screen": "Notifications",
  "path": "/notifications",
  "area": "Collaboration",
  "description": "Central de notificações globais do usuário.",
  "layout": { "type": "panel", "position": "right" },
  "sections": [
    {
      "name": "Notifications",
      "components": [
        { "type": "notificationList", "label": "Notificações", "props": { "groupBy": "project", "readStatus": true } }
      ]
    },
    {
      "name": "Footer",
      "components": [
        { "type": "button", "label": "Marcar todas como lidas", "props": { "action": "markAllRead" } }
      ]
    }
  ],
  "flows": [
    { "trigger": "click notificação", "action": "abrir tela correspondente (task, comentário, chat)" },
    { "trigger": "click Marcar todas como lidas", "action": "atualizar status no backend" }
  ],
  "connections": {
    "backend": ["GET /notifications", "PATCH /notifications/markAllRead"],
    "nextScreens": ["/project/:id", "/project/:id/task/:taskId"]
  }
}
*/