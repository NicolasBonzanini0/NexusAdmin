# NexusAdmin

Painel de gerenciamento e administração com tema escuro futurista, efeitos neon e SPA navigation.

![Tema](https://img.shields.io/badge/Tema-Escuro%20%2F%20Claro-0a0e1a?style=flat-square)
![Linguagens](https://img.shields.io/badge/HTML%2FCSS%2FJS-Puro-00d4ff?style=flat-square)
![Chart.js](https://img.shields.io/badge/Chart.js-4.4-10b981?style=flat-square)
![Criptografia](https://img.shields.io/badge/Crypto-SHA--256%20%2B%20AES--GCM-a855f7?style=flat-square)
![Supabase](https://img.shields.io/badge/Supabase-Ready-3ecf8e?style=flat-square)
![Licença](https://img.shields.io/badge/Licença-MIT-ef4444?style=flat-square)

**Demo:** [nexusadmin.vercel.app](https://nexusadmin-iota.vercel.app)

---

## Visão Geral

NexusAdmin é um painel de gerenciamento construído como projeto de portfólio. Simula um admin dashboard real com autenticação completa, navegação SPA, gráficos analíticos, kanban com drag-and-drop, gerenciamento de equipes, chat com auto-reply e painel de administração com métricas de servidor simuladas.

---

## Autenticação

Fluxo completo de autenticação com senhas hasheadas e dados encriptados.

### Login

- Login com email e senha
- Toggle de visibilidade da senha (ícone olho)
- Sessão persistente via `localStorage` — não exige re-login ao recarregar
- Modo demonstração (botão "Demonstração") — acesso sem cadastro

### Cadastro

- Campos: nome, email, senha, confirmação de senha
- Validações: email duplicado, senhas coincidem, mínimo 6 caracteres
- Medidor de força da senha (5 níveis: muito fraca → muito forte)
- Email de boas-vindas simulado (overlay com preview do email)
- Novo usuário loga automaticamente após cadastro

### 2FA (Autenticação em Dois Fatores)

- Toggle na página de Segurança ativa/desativa 2FA por usuário
- No login com 2FA ativo: overlay com 6 dígitos, auto-advance, suporte a paste
- Countdown de 5 minutos com botão de reenvio
- Código exibido em preview de email simulado (sem SMTP)

### Recuperação de Senha

- Fluxo: informar email → confirmação de envio → preview do email de reset → clicar no CTA → overlay de nova senha
- Nova senha deve ser diferente da anterior
- Validações: mínimo 6 caracteres, senhas coincidem

### Termos e Privacidade

- Links "Termos de Uso" e "Política de Privacidade" no rodapé do auth
- Modais com texto legal completo

### Credenciais Padrão

| Email | Senha | Cargo |
|-------|-------|-------|
| `admin@nexus.io` | `admin123` | Super Admin |

---

## Criptografia e Armazenamento

### Senhas

- Hash SHA-256 com salt fixo (`nexus_2026_salt`)
- Migração automática: senhas em plaintext são hasheadas no primeiro login
- Comparação sempre contra hash (64 chars hex)

### Dados Sensíveis

- AES-GCM (Web Crypto API) para encriptação de dados no localStorage
- Chave derivada de string fixa (`NexusAdmin_AES_2026!@#`)
- IV aleatório de 12 bytes por operação, concatenado ao ciphertext
- Valores encriptados prefixados com `__enc__` no localStorage
- Requer HTTPS ou localhost para funcionar

### Camada de Banco de Dados (`db`)

- **Supabase** (cloud) — auto-sync quando `SUPABASE_URL` e `SUPABASE_KEY` configurados
- **localStorage** (fallback) — funciona 100% offline sem Supabase
- Tabelas: `users` (auth) e `user_data` (dados por email)
- Upsert com `onConflict` para evitar duplicatas
- Cache local: dados da nuvem são espelhados no localStorage

### Reset Semanal

- Dados são redefinidos automaticamente a cada 7 dias
- Banner visível avisa o usuário sobre a política
- Botão de dismiss salva preferência no localStorage

---

## Funcionalidades

### Dashboard

- **Visão geral** — KPIs em tempo real (receita, usuários, pedidos, conversão), gráficos de receita/despesas, tráfego por fonte, métricas de servidor com atualização a cada 5s, transações recentes, feed de atividades e sparklines
- **Seletor de período** — 7d / 30d / 90d / 1y com atualização dinâmica dos gráficos de receita, stat cards do dashboard, stat cards do analytics e stat cards de transações

### Analytics

- **Métricas** — pageviews, tempo médio, bounce rate, retenção
- **Seletor de período** — sincronizado com o dashboard, atualiza stat cards e gráficos

### Gerenciamento

- **Usuários** — tabela compacta com filtros (todos/ativos/inativos/admins), busca textual, checkboxes estilizados com estado indeterminate, ações em lote (alternar status, remover selecionados), CRUD completo via modal. Não visível para usuários não-admin
- **Transações** — histórico com filtros por status, seletor de período, stats cards dinâmicos, busca por cliente/ID, nova transação via modal, tabela compacta sem necessidade de rolagem
- **Projetos** — cards com barra de progresso, links clicáveis que abrem em nova aba, avatares dos membros, novo projeto com campo de URL
- **Tarefas** — kanban board 4 colunas (A Fazer → Em Progresso → Revisão → Concluído) com drag-and-drop nativo HTML5, suporte a drop em colunas vazias, nova tarefa com prioridade. No mobile: botões de seta ← → para mover entre estágios
- **Equipe** — cards com status online/offline, editar membro (modal), chat direto (abre conversa no painel de mensagens com auto-reply)
- **Calendário** — grid interativo com navegação mensal, indicador de eventos nos dias, lista de próximos eventos, novo evento via modal

### Sistema

- **Configurações** — perfil editável (salva e reflete no sidebar em tempo real), notificações com toggles, seletor de tema (Escuro / Claro / Auto com detecção de preferência do SO)
- **Segurança** — toggles 2FA / Biometria / SSO / Bloqueio após falhas, gerenciamento de sessões ativas com revogação, logs de segurança. Toggle 2FA salva no registro do usuário
- **Logs** — terminal estilo sysadmin com geração automática a cada 8s, filtros por nível (INFO/WARN/ERROR) e busca textual, limpar e exportar (.txt)

### UX

- **Tema claro/escuro/auto** — toggle no header ou na página de Configurações, variáveis CSS completas com transição suave. Tema claro com bordas reforçadas para visibilidade
- **Paleta de comandos** — `Ctrl+K` abre busca fuzzy por páginas e ações (navegação, novo usuário, novo projeto, nova tarefa)
- **Painel de notificações** — slide-in com marcar todas como lidas, botão de fechar e badge com contagem dinâmica
- **Painel de mensagens** — lista de contatos → conversa com chat bubbles, input de mensagem, auto-reply simulado (~1s delay com respostas variadas)
- **Sistema de toasts** — success / error / warning / info com auto-dismiss em 4s
- **Modais reutilizáveis** — CRUD para usuários, projetos, tarefas, eventos e transações
- **Badges dinâmicos** — sidebar mostra contagem real de usuários e tarefas pendentes
- **Exportação** — dados do dashboard em JSON, logs do sistema em TXT
- **Métricas de servidor** — CPU / RAM / Disco / Rede com variação simulada a cada 5s e animação de progresso
- **Sidebar colapsável** — toggle de largura + menu mobile com overlay (z-index corrigido para garantir tappable em todos os itens)
- **Dropdown do usuário** — perfil, configurações e logout
- **Favicon SVG** — ícone de raio com gradiente inline
- **Perfis por usuário** — cada conta tem suas próprias tarefas, transações e eventos via `db.set('nexus_profiles', email, data)`

---

## Stack Tecnológica

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| HTML5 | — | Estrutura semântica, SPA pages, overlays |
| CSS3 | — | Variáveis CSS, animações, grid/flexbox, responsivo, tema dual |
| JavaScript | ES6+ | IIFE, async/await, estado in-memory, DOM caching |
| Chart.js | 4.4 | Gráficos de linha, doughnut e barras |
| Web Crypto API | — | SHA-256 hashing, AES-GCM encryption |
| Supabase JS | 2.x | Cloud DB (opcional, via CDN) |
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

> **Nota:** Web Crypto API requer HTTPS ou localhost. Ao abrir via `file://`, encriptação AES-GCM pode não funcionar em alguns navegadores. Use um servidor local (`npx serve`) para funcionalidade completa.

---

## Configuração do Supabase (Opcional)

O dashboard funciona 100% sem Supabase (fallback para localStorage). Para habilitar sync na nuvem:

1. Crie um projeto em [supabase.com](https://supabase.com)
2. Crie as tabelas:
   ```sql
   CREATE TABLE users (
     email TEXT PRIMARY KEY,
     name TEXT,
     password TEXT,
     two_fa BOOLEAN DEFAULT false,
     updated_at TIMESTAMPTZ
   );
   CREATE TABLE user_data (
     key TEXT PRIMARY KEY,
     email TEXT,
     value TEXT,
     updated_at TIMESTAMPTZ
   );
   ```
3. Edite `script.js` e preencha as variáveis:
   ```js
   const SUPABASE_URL = 'https://xxx.supabase.co';
   const SUPABASE_KEY = 'eyJ...';
   ```
4. Defina uma cron job no Supabase para limpar dados a cada 7 dias (opcional, o reset semanal já funciona no client-side)

---

## Deploy — Vercel

### Via CLI

```bash
npm i -g vercel
vercel login
vercel
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
├── index.html    # HTML — auth, overlays, todas as páginas, painéis
├── style.css     # CSS — variáveis, tema dual, componentes, responsivo
├── script.js     # JS — crypto, db, auth, estado, SPA, CRUD, kanban, chat
├── LICENSE       # MIT
└── README.md
```

### Arquitetura do script.js

```
script.js (IIFE)
├── crypto              # SHA-256 hashing, AES-GCM encrypt/decrypt
├── db                  # Supabase + localStorage layer, weekly reset
├── state               # Objeto in-memory — users, transactions, tasks, team, events, messages, sessions
├── toast()             # Sistema de notificações toast
├── openModal()         # Modais reutilizáveis
├── updateBadges()      # Sincroniza badges do sidebar com state
├── updateStatsForPeriod() # Atualiza stat cards + gráficos por período
├── initAuth()          # Login, signup, 2FA, forgot/reset pw, terms, demo
├── initParticles()     # Background com partículas animadas
├── initCharts()        # Chart.js — receita, tráfego, visitantes (com seletor de período)
├── initNavigation()    # SPA routing — .nav-item click → page swap
├── initTheme()         # Toggle claro/escuro/auto
├── renderUsers()       # Tabela de usuários com filtros e bulk actions
├── renderKanban()      # Kanban com drag-and-drop + mobile move buttons
├── renderTeam()        # Cards de equipe com editar/chat
├── renderCalendar()    # Grid de calendário com eventos
├── renderSecurity()    # Sessões e logs de segurança
├── openChat()          # Abre conversa no painel de mensagens
├── sendChatMessage()   # Envia mensagem + auto-reply simulado
└── init()              # Bootstrap — orquestra toda a inicialização
```

---

## Licença

MIT — veja [LICENSE](./LICENSE).
