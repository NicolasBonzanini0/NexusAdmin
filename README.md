# NexusAdmin

Painel de gerenciamento e administração com tema escuro futurista, efeitos neon e SPA navigation.

![Tema](https://img.shields.io/badge/Tema-Escuro%20%2F%20Claro-0a0e1a?style=flat-square)
![Linguagens](https://img.shields.io/badge/HTML%2FCSS%2FJS-Puro-00d4ff?style=flat-square)
![Chart.js](https://img.shields.io/badge/Chart.js-4.4-10b981?style=flat-square)
![Licença](https://img.shields.io/badge/Licença-MIT-a855f7?style=flat-square)

**Demo:** [nexusadmin.vercel.app](https://nexusadmin.vercel.app)

---

## Visão Geral

NexusAdmin é um painel de gerenciamento construído como projeto de portfólio. Simula um admin dashboard real com navegação SPA, gráficos analíticos, kanban com drag-and-drop, gerenciamento de equipes, chat em tempo real e painel de administração com métricas de servidor simuladas.

---

## Funcionalidades

### Dashboard

- **Visão geral** — KPIs em tempo real (receita, usuários, pedidos, conversão), gráficos de receita/despesas, tráfego por fonte, métricas de servidor com atualização a cada 5s, transações recentes, feed de atividades e sparklines
- **Seletor de período** — 7d / 30d / 90d / 1y com atualização dinâmica dos gráficos de receita

### Gerenciamento

- **Usuários** — tabela com filtros (todos/ativos/inativos/admins), busca textual, checkboxes estilizados com estado indeterminate, ações em lote (alternar status, remover selecionados), CRUD completo via modal
- **Transações** — histórico com filtros por status, stats cards, busca por cliente/ID, nova transação via modal
- **Projetos** — cards com barra de progresso, links clicáveis que abrem em nova aba, avatares dos membros, novo projeto com campo de URL
- **Tarefas** — kanban board 4 colunas (A Fazer → Em Progresso → Revisão → Concluído) com drag-and-drop nativo HTML5, suporte a drop em colunas vazias, nova tarefa com prioridade
- **Equipe** — cards com status online/offline, editar membro (modal com nome e cargo), chat direto (abre conversa no painel de mensagens)
- **Calendário** — grid interativo com navegação mensal, indicador de eventos nos dias, lista de próximos eventos, novo evento via modal

### Sistema

- **Configurações** — perfil editável (salva e reflete no sidebar em tempo real), notificações com toggles, aparência com seletor de tema claro/escuro e cor de destaque (5 opções)
- **Segurança** — toggles 2FA / Biometria / SSO / Bloqueio após falhas, gerenciamento de sessões ativas com revogação, logs de segurança
- **Logs** — terminal estilo sysadmin com geração automática a cada 8s, filtros por nível (INFO/WARN/ERROR) e busca textual, limpar e exportar (.txt)

### UX

- **Tema claro/escuro** — toggle no header ou na página de Configurações, variáveis CSS completas com transição suave
- **Paleta de comandos** — `Ctrl+K` abre busca fuzzy por páginas e ações (navegação, novo usuário, novo projeto, nova tarefa)
- **Painel de notificações** — slide-in com marcar todas como lidas e badge com contagem dinâmica
- **Painel de mensagens** — lista de contatos → conversa com chat bubbles, input de mensagem e auto-reply simulado
- **Sistema de toasts** — success / error / warning / info com auto-dismiss em 4s
- **Modais reutilizáveis** — CRUD para usuários, projetos, tarefas, eventos e transações
- **Badges dinâmicos** — sidebar mostra contagem real de usuários e tarefas pendentes
- **Exportação** — dados do dashboard em JSON, logs do sistema em TXT
- **Métricas de servidor** — CPU / RAM / Disco / Rede com variação simulada a cada 5s e animação de progresso
- **Sidebar colapsável** — toggle de largura + menu mobile com overlay
- **Dropdown do usuário** — perfil, configurações e logout
- **Favicon SVG** — ícone de raio com gradiente inline

---

## Stack Tecnológica

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| HTML5 | — | Estrutura semântica, SPA pages |
| CSS3 | — | Variáveis CSS, animações, grid/flexbox, responsivo, tema dual |
| JavaScript | ES6+ | IIFE, estado in-memory, DOM caching, event delegation |
| Chart.js | 4.4 | Gráficos de linha, doughnut e barras |
| Font Awesome | 6.5 | Ícones |
| Inter + JetBrains Mono | — | Tipografia (Google Fonts) |
| DiceBear API | 7.x | Geração de avatares |

---

## Atalhos de Teclado

| Atalho | Ação |
|--------|------|
| `Ctrl+K` | Abrir paleta de comandos |
| `Esc` | Fechar modal, paleta ou painel |
| `Enter` | Enviar mensagem no chat |

---

## Rodando Localmente

### Pré-requisitos

Nenhum — o projeto é 100% estático, não requer Node.js, npm ou servidor.

### Instalação

```bash
git clone https://github.com/NicolasBonzanini0/NexusAdmin.git
cd NexusAdmin
```

### Abrir no navegador

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Ou simplesmente abrir o arquivo `index.html` diretamente no navegador.

---

## Deploy — Vercel

### Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy (no diretório do projeto)
vercel

# Deploy de produção
vercel --prod
```

### Via Dashboard

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Importe o repositório `NicolasBonzanini0/NexusAdmin`
3. **Framework Preset:** `Other`
4. **Build Command:** deixar vazio
5. **Output Directory:** `.` (raiz)
6. Clique em **Deploy**

A cada novo push na branch `master` o redeploy é automático.

---

## Estrutura do Projeto

```
NexusAdmin/
├── index.html      # HTML principal — todas as páginas, modais, painéis e overlays
├── style.css       # CSS — variáveis de tema, layout, componentes, responsivo
├── script.js       # JS — estado, navegação SPA, gráficos, CRUD, kanban, chat
└── README.md
```

### Arquitetura do script.js

```
script.js (IIFE)
├── state                    # Objeto in-memory — users, transactions, tasks, team, events, messages, sessions
├── toast()                  # Sistema de notificações toast
├── openModal() / closeModal()# Modais reutilizáveis
├── updateBadges()           # Sincroniza badges do sidebar com state
├── initParticles()          # Background com partículas animadas
├── initCharts()             # Chart.js — receita, tráfego, visitantes (com seletor de período)
├── initNavigation()         # SPA routing — .nav-item click → page swap
├── initTheme()              # Toggle claro/escuro + cor de destaque
├── renderUsers()            # Tabela de usuários com filtros e bulk actions
├── renderKanban()           # Kanban com drag-and-drop nativo
├── renderTeam()             # Cards de equipe com editar/chat
├── renderCalendar()         # Grid de calendário com eventos
├── renderSecurity()         # Sessões e logs de segurança
├── openChat()               # Abre conversa no painel de mensagens
├── sendChatMessage()        # Envia mensagem + auto-reply simulado
└── init()                   # Bootstrap — orquestra toda a inicialização
```

---

## Licença

MIT — veja [LICENSE](./LICENSE).
