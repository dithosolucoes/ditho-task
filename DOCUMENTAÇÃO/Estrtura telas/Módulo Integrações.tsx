/* Fix: The file contains documentation text, not code. It has been wrapped in a block comment to prevent compilation errors. */
/*
📂 Módulo Integrações (Ditho)
📄 integrations.json
{
  "screen": "Integrations",
  "path": "/settings/integrations",
  "area": "Integrations",
  "description": "Central de integrações externas: Google, Slack, Zapier, etc.",
  "layout": { "type": "grid+list" },
  "sections": [
    {
      "name": "Connected Apps",
      "components": [
        { "type": "integrationCard", "label": "Google Drive", "props": { "status": "connected", "action": "disconnect" } },
        { "type": "integrationCard", "label": "Slack", "props": { "status": "not_connected", "action": "connect" } },
        { "type": "integrationCard", "label": "Zapier", "props": { "status": "not_connected", "action": "connect" } },
        { "type": "integrationCard", "label": "Outlook Calendar", "props": { "status": "connected", "action": "disconnect" } }
      ]
    },
    {
      "name": "Footer",
      "components": [
        { "type": "button", "label": "Ver Documentação de Integrações", "props": { "variant": "link", "action": "openDocs" } }
      ]
    }
  ],
  "flows": [
    { "trigger": "click Connect", "action": "iniciar OAuth e salvar credenciais" },
    { "trigger": "click Disconnect", "action": "revogar token e atualizar status" }
  ],
  "connections": {
    "backend": ["GET /integrations", "POST /integrations/:provider/connect", "DELETE /integrations/:provider/disconnect"],
    "nextScreens": []
  }
}

📄 api_keys.json
{
  "screen": "APIKeys",
  "path": "/settings/api",
  "area": "Integrations",
  "description": "Gestão de chaves de API para desenvolvedores.",
  "layout": { "type": "list+form" },
  "sections": [
    {
      "name": "Minhas API Keys",
      "components": [
        { "type": "apiKeyList", "label": "Lista de chaves", "props": { "columns": ["Key", "Criada em", "Último uso"] } },
        { "type": "button", "label": "Revogar", "props": { "variant": "danger", "action": "revokeKey" } }
      ]
    },
    {
      "name": "Gerar Nova Key",
      "components": [
        { "type": "input", "label": "Nome da chave", "props": { "placeholder": "Ex: integração Zapier" } },
        { "type": "button", "label": "Gerar Nova Key", "props": { "variant": "primary", "action": "createKey" } }
      ]
    }
  ],
  "flows": [
    { "trigger": "click Gerar Nova Key", "action": "criar key no backend e exibir no painel" },
    { "trigger": "click Revogar", "action": "invalidar key selecionada" }
  ],
  "connections": {
    "backend": ["GET /api-keys", "POST /api-keys", "DELETE /api-keys/:id"],
    "nextScreens": []
  }
}
*/