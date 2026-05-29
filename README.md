# NexusAdmin

Painel de gerenciamento futurista com tema escuro, glassmorfismo e efeitos neon.

![Temas](https://img.shields.io/badge/Temas-Escuro%20%2F%20Claro-0a0e1a?style=flat-square)
![Linguagens](https://img.shields.io/badge/HTML%2FCSS%2FJS-Puro-00d4ff?style=flat-square)
![Chart.js](https://img.shields.io/badge/Chart.js-4.4-10b981?style=flat-square)

## Páginas

| Página | Descrição |
|--------|-----------|
| **Dashboard** | Visão geral com gráficos de receita/despesas, tráfego, métricas de servidor em tempo real, transações recentes, atividade e sparklines. Seletor de período (7d/30d/90d/1y) atualiza os gráficos. |
| **Analytics** | Visitantes por hora (gráfico de barras), pageviews, tempo médio, bounce rate e retenção. |
| **Usuários** | Tabela completa com filtros (todos/ativos/inativos/admins), busca, checkboxes estilizados com estado indeterminate, ações em lote (alternar status, remover), CRUD completo via modal. |
| **Transações** | Histórico com filtros por status, stats cards, busca por cliente/ID, nova transação via modal. |
| **Projetos** | Cards com barra de progresso, links clicáveis, avatares dos membros, novo projeto com campo de link. |
| **Tarefas** | Kanban board 4 colunas (A Fazer → Em Progresso → Revisão → Concluído) com drag-and-drop nativo, nova tarefa com prioridade. |
| **Equipe** | Cards com status online/offline, botão editar (modal), botão chat (abre conversa direta). |
| **Calendário** | Grid interativo com navegação mensal, indicador de eventos, lista de próximos eventos, novo evento via modal. |
| **Configurações** | Perfil editável (salva e atualiza sidebar), notificações com toggles, aparência com seletor de tema e cor de destaque. |
| **Segurança** | Toggles 2FA/Biometria/SSO, sessões ativas com revogar, logs de segurança. |
| **Logs** | Terminal estilo sysadmin com logs automáticos a cada 8s, filtros por nível (INFO/WARN/ERROR) e texto, limpar e exportar (.txt). |

## Funcionalidades

- **Tema Claro/Escuro** — Toggle no header ou na página de Configurações, com variáveis CSS completas
- **Paleta de Comandos** — `Ctrl+K` abre busca fuzzy por páginas e ações
- **Painel de Notificações** — Slide-in com marcar todas como lidas e badge dinâmico
- **Painel de Mensagens** — Lista de contatos → conversa com chat bubbles e auto-reply
- **Sistema de Toasts** — success / error / warning / info com auto-dismiss
- **Modais Reutilizáveis** — CRUD para usuários, projetos, tarefas, eventos, transações
- **Badges Dinâmicos** — Sidebar mostra contagem real de usuários, projetos e tarefas pendentes
- **Exportação** — Dashboard como JSON, logs como TXT
- **Métricas de Servidor** — CPU/RAM/Disco/Rede atualizando a cada 5s
- **Relógio em Tempo Real** — Header com hora e data
- **Partículas Animadas** — Background com 18 partículas flutuantes
- **Sidebar Colapsável** — Toggle + menu mobile responsivo
- **Dropdown do Usuário** — Perfil, configurações, sair
- **Checkboxes Customizados** — Design futurista com estado indeterminate
- **Favicon SVG** — Ícone de raio com gradiente cyan→purple

## Tech Stack

- **HTML5** — Estrutura semântica
- **CSS3** — Variáveis CSS, glassmorfismo, animações, grid/flexbox, responsivo
- **JavaScript** (ES6+ IIFE) — Estado in-memory, DOM caching, event delegation
- **Chart.js 4.4** — Gráficos de linha, doughnut e barras
- **Font Awesome 6.5** — Ícones
- **Inter + JetBrains Mono** — Tipografia
- **DiceBear API** — Avatares dinâmicos

## Como Usar

Basta abrir o `index.html` no navegador. Não precisa de servidor — é 100% estático.

```bash
# Clonar
git clone https://github.com/NicolasBonzanini0/NexusAdmin.git

# Abrir
start index.html   # Windows
open index.html     # macOS
xdg-open index.html # Linux
```

## Estrutura

```
NexusAdmin/
├── index.html    # HTML principal com todas as páginas, modais e painéis
├── style.css     # CSS completo — tema escuro/claro, glassmorfismo, responsivo
└── script.js     # JS — estado, navegação, gráficos, CRUD, kanban, chat, etc.
```

## Screenshots

> Dashboard com tema escuro — gráficos de receita, tráfego, métricas de servidor e atividade recente.

---

Feito com ☕ por Nicolas Bonzanini
