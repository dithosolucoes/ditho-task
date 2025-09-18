🧠 Roadmap Inteligente – Ordem de Criação das Funcionalidades
===============================================================

Esta é a ordem de implementação sugerida para construir o Ditho de forma incremental e lógica, garantindo que cada fase construa sobre uma base sólida.

### 🔹 Fase 1 – Fundamentos (Infra + Estrutura)
*   **Foco:** Garantir a base técnica e estrutural.
*   **Itens:** Autenticação, Contas, Hierarquia (Workspaces, Folders, Projects), Permissões, Setup de BD e WebSockets.
*   **Por quê?** É o esqueleto. Sem isso, nada mais pode ser construído.

### 🔹 Fase 2 – Projetos & Tarefas (Core do Produto)
*   **Foco:** Criar a funcionalidade central de produtividade.
*   **Itens:** CRUD de tarefas (com subtarefas), Atributos (assignee, data), Comentários, Uploads, Editor Markdown com /commands.
*   **Por quê?** É o coração da ferramenta. Tudo gira em torno de criar e gerenciar tarefas.

### 🔹 Fase 3 – Visualizações (Views)
*   **Foco:** Oferecer flexibilidade na organização da informação.
*   **Itens:** List View, Board View, Calendar View, Table View, Mind Map, Timeline.
*   **Por quê?** Transforma um simples "to-do app" em uma ferramenta de gerenciamento de projetos versátil. É um grande diferencial de UX.

### 🔹 Fase 4 – Colaboração
*   **Foco:** Tornar o produto multiusuário e verdadeiramente colaborativo.
*   **Itens:** Sync Real-time (CRDT/OT), Multi-cursor, Chat de projeto, **Vídeo Conferência Integrada**, Comentários avançados (threads), Notificações, Histórico.
*   **Por quê?** É o que transforma a ferramenta de uso pessoal para uma solução de equipe.

### 🔹 Fase 5 – Automação & AI
*   **Foco:** Implementar o diferencial competitivo e as funcionalidades "mágicas".
*   **Itens:** AI Assist no editor, AI Project Studio, **Biblioteca de Templates de AI**, Automations (Trigger → Action), AI Agents, Agent Teams (orquestração).
*   **Por quê?** A AI precisa de um ecossistema de dados e colaboração para ser eficaz. Esta fase constrói a inteligência sobre a estrutura existente.

### 🔹 Fase 6 – Usuário & Times
*   **Foco:** Refinar a experiência social e de gerenciamento.
*   **Itens:** Perfil do usuário, Gerenciamento de times, Convites, Roles avançadas.
*   **Por quê?** Com o produto funcional, agora refinamos como as equipes são gerenciadas dentro dele.

### 🔹 Fase 7 – Integrações
*   **Foco:** Conectar o Ditho com o ecossistema de ferramentas do usuário.
*   **Itens:** Calendários, Storage, Comunicação (Slack), Automação (Zapier), **Conectores de AI (para dados externos)**, API Pública.
*   **Por quê?** Aumenta o valor do produto ao se encaixar nos fluxos de trabalho existentes dos usuários.

### 🔹 Fase 8 – UX/UI Refinamento
*   **Foco:** Polir a experiência do usuário para um nível premium.
*   **Itens:** Drag & drop universal, Atalhos de teclado, Pesquisa global, Tags & labels, Recorrência, Export/import, Formulários, Modo offline, Apps mobile.
*   **Por quê?** É o que torna o produto "delightful" de usar, incentivando a retenção.

### 🔹 Fase 9 – Segurança & Compliance
*   **Foco:** Preparar o produto para clientes corporativos (Enterprise).
*   **Itens:** 2FA, SSO + SCIM, Logs de auditoria, Compliance (GDPR, SOC2).
*   **Por quê?** Requisitos essenciais para vendas B2B de grande porte.

### 🔹 Fase 10 – Modelo de Negócio
*   **Foco:** Monetizar o produto.
*   **Itens:** Planos (Free/Pro/Enterprise), Billing, Limites de uso.
*   **Por quê?** A última etapa, implementada quando já existe um produto completo e valioso para ser vendido.

---
**Fluxo Resumido:** Esqueleto → Coração → Visão → Colaboração → Inteligência (AI) → Conectividade → Polimento → Enterprise → Dinheiro.
