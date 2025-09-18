Módulo Segurança (Ditho)
📄 security_settings.json
{
  "screen": "SecuritySettings",
  "path": "/settings/security",
  "area": "Security",
  "description": "Configurações de segurança da conta e do workspace.",
  "layout": { "type": "tabs", "tabs": ["Autenticação", "SSO", "Políticas"] },
  "sections": [
    {
      "name": "Autenticação (2FA)",
      "components": [
        { "type": "qrCode", "label": "QR Code 2FA", "props": { "action": "scanWithApp" } },
        { "type": "input", "label": "Token 2FA", "props": { "placeholder": "Digite o código de 6 dígitos" } },
        { "type": "button", "label": "Ativar 2FA", "props": { "variant": "primary", "action": "enable2FA" } }
      ]
    },
    {
      "name": "SSO & SCIM",
      "components": [
        { "type": "dropdown", "label": "Provedor SSO", "props": { "options": ["Google Workspace", "Azure AD", "Okta"] } },
        { "type": "input", "label": "SSO Metadata URL" },
        { "type": "button", "label": "Configurar SSO", "props": { "variant": "primary", "action": "setupSSO" } },
        { "type": "toggle", "label": "Provisionamento automático (SCIM)" }
      ]
    },
    {
      "name": "Políticas de Acesso",
      "components": [
        { "type": "toggle", "label": "Forçar 2FA para todos os membros" },
        { "type": "toggle", "label": "Bloquear login sem SSO" },
        { "type": "dropdown", "label": "Tempo de expiração de sessão", "props": { "options": ["30 min", "1h", "8h", "24h"] } }
      ]
    }
  ],
  "flows": [
    { "trigger": "submit Token 2FA", "action": "ativar autenticação de 2 fatores" },
    { "trigger": "click Configurar SSO", "action": "validar metadados e ativar login corporativo" },
    { "trigger": "toggle políticas", "action": "salvar regras de segurança no backend" }
  ],
  "connections": {
    "backend": ["POST /security/2fa", "POST /security/sso", "PATCH /security/policies"],
    "nextScreens": ["/settings/logs"]
  }
}

📄 audit_logs.json
{
  "screen": "AuditLogs",
  "path": "/settings/logs",
  "area": "Security",
  "description": "Registro detalhado de atividades administrativas e de usuários para auditoria.",
  "layout": { "type": "table+filters" },
  "sections": [
    {
      "name": "Logs",
      "components": [
        {
          "type": "logTable",
          "label": "Tabela de Logs",
          "props": {
            "columns": ["Data", "Usuário", "Ação", "Recurso", "IP"],
            "filters": ["Usuário", "Ação", "Data"]
          }
        }
      ]
    },
    {
      "name": "Export",
      "components": [
        { "type": "button", "label": "Exportar CSV", "props": { "action": "exportCSV" } },
        { "type": "button", "label": "Exportar JSON", "props": { "action": "exportJSON" } }
      ]
    }
  ],
  "flows": [
    { "trigger": "apply filter", "action": "filtrar registros no backend" },
    { "trigger": "click Exportar CSV", "action": "baixar arquivo CSV com logs" },
    { "trigger": "click Exportar JSON", "action": "baixar arquivo JSON com logs" }
  ],
  "connections": {
    "backend": ["GET /audit/logs", "GET /audit/logs?filters=", "GET /audit/logs/export"],
    "nextScreens": []
  }
}
