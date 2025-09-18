/* Fix: The file contains documentation text, not code. It has been wrapped in a block comment to prevent compilation errors. */
/*
📂 Módulo Usuário & Times (Ditho)
📄 profile.json
{
  "screen": "Profile",
  "path": "/profile",
  "area": "User",
  "description": "Configurações pessoais do usuário (avatar, nome, idioma, timezone, preferências).",
  "layout": { "type": "form+sidebar" },
  "sections": [
    {
      "name": "Avatar",
      "components": [
        { "type": "avatarUploader", "label": "Foto de Perfil" },
        { "type": "button", "label": "Remover Avatar", "props": { "action": "removeAvatar" } }
      ]
    },
    {
      "name": "Informações Básicas",
      "components": [
        { "type": "input", "label": "Nome" },
        { "type": "input", "label": "Email", "props": { "disabled": true } },
        { "type": "dropdown", "label": "Idioma", "props": { "options": ["Português", "Inglês", "Espanhol"] } },
        { "type": "dropdown", "label": "Timezone", "props": { "options": ["GMT-3", "GMT-5", "GMT+1"] } }
      ]
    },
    {
      "name": "Preferências",
      "components": [
        { "type": "toggle", "label": "Notificações por Email" },
        { "type": "toggle", "label": "Tema Escuro Automático" },
        { "type": "dropdown", "label": "Layout padrão dos projetos", "props": { "options": ["List", "Board", "Calendar"] } }
      ]
    },
    {
      "name": "Footer",
      "components": [
        { "type": "button", "label": "Salvar Alterações", "props": { "variant": "primary", "action": "saveProfile" } }
      ]
    }
  ],
  "flows": [
    { "trigger": "click Salvar Alterações", "action": "atualizar dados no backend" },
    { "trigger": "upload Avatar", "action": "enviar imagem para servidor" },
    { "trigger": "toggle Preferência", "action": "salvar preferências no backend" }
  ],
  "connections": {
    "backend": ["GET /me", "PATCH /me", "POST /me/avatar", "DELETE /me/avatar"],
    "nextScreens": ["/dashboard"]
  }
}

📄 workspace_members.json
{
  "screen": "WorkspaceMembers",
  "path": "/workspace/:id/members",
  "area": "Teams",
  "description": "Gestão de membros e permissões dentro de um workspace.",
  "layout": { "type": "list+form" },
  "sections": [
    {
      "name": "Lista de Membros",
      "components": [
        { "type": "userList", "label": "Membros", "props": { "columns": ["Nome", "Email", "Role", "Status"] } },
        { "type": "dropdown", "label": "Alterar Role", "props": { "options": ["Owner", "Admin", "Member", "Guest"] } },
        { "type": "button", "label": "Remover Membro", "props": { "variant": "danger", "action": "removeMember" } }
      ]
    },
    {
      "name": "Convidar Novos Membros",
      "components": [
        { "type": "input", "label": "Email(s)", "props": { "placeholder": "Digite emails separados por vírgula" } },
        { "type": "dropdown", "label": "Role", "props": { "options": ["Admin", "Member", "Guest"] } },
        { "type": "button", "label": "Enviar Convites", "props": { "variant": "primary", "action": "inviteMembers" } }
      ]
    }
  ],
  "flows": [
    { "trigger": "submit Enviar Convites", "action": "enviar convites por email e atualizar lista" },
    { "trigger": "click Alterar Role", "action": "atualizar role do usuário no backend" },
    { "trigger": "click Remover Membro", "action": "remover usuário do workspace" }
  ],
  "connections": {
    "backend": ["GET /workspaces/:id/members", "POST /workspaces/:id/invite", "PATCH /workspaces/:id/members/:userId", "DELETE /workspaces/:id/members/:userId"],
    "nextScreens": ["/workspace/:id/settings"]
  }
}
*/
