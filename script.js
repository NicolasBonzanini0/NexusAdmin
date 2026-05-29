(function () {
'use strict';

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const i18n = {
currentLang: 'pt-BR',
translations: {
'pt-BR': {
'nav.principal': 'PRINCIPAL',
'nav.gerenciamento': 'GERENCIAMENTO',
'nav.sistema': 'SISTEMA',
'nav.dashboard': 'Dashboard',
'nav.analytics': 'Analytics',
'nav.usuarios': 'Usuários',
'nav.transacoes': 'Transações',
'nav.projetos': 'Projetos',
'nav.tarefas': 'Tarefas',
'nav.equipe': 'Equipe',
'nav.calendario': 'Calendário',
'nav.config': 'Configurações',
'nav.seguranca': 'Segurança',
'nav.logs': 'Logs',
'auth.login': 'Entrar',
'auth.signup': 'Criar Conta',
'auth.email': 'Email',
'auth.password': 'Senha',
'auth.name': 'Nome completo',
'auth.confirmPw': 'Confirmar senha',
'auth.createPw': 'Criar senha',
'auth.remember': 'Lembrar de mim',
'auth.forgot': 'Esqueceu a senha?',
'auth.createAccount': 'Criar Conta',
'auth.demo': 'Demonstração',
'auth.pwStrength': 'Força da senha',
'auth.tagline': 'Painel de Gerenciamento Inteligente',
'auth.terms': 'Ao criar uma conta, você concorda com os {terms} e {privacy}.',
'auth.termsLink': 'Termos de Uso',
'auth.privacyLink': 'Política de Privacidade',
'dash.receita': 'Receita Total',
'dash.usuarios': 'Usuários Ativos',
'dash.pedidos': 'Pedidos',
'dash.conversao': 'Taxa de Conversão',
'dash.receitaChart': 'Receita & Despesas',
'dash.trafficChart': 'Tráfego por Fonte',
'dash.recentTrans': 'Transações Recentes',
'dash.viewAll': 'Ver Todas',
'dash.recentActivity': 'Atividade Recente',
'dash.filter': 'Filtrar',
'dash.last7d': 'Últimos 7 dias',
'dash.last30d': 'Últimos 30 dias',
'dash.last90d': 'Últimos 90 dias',
'dash.last1y': 'Último ano',
'dash.export': 'Exportar',
'dash.subtitle': 'Visão geral do sistema em tempo real',
'config.title': 'Configurações',
'config.subtitle': 'Personalize o sistema',
'config.profile': 'Perfil',
'config.name': 'Nome',
'config.emailLabel': 'Email',
'config.language': 'Idioma',
'config.save': 'Salvar Alterações',
'config.notifications': 'Notificações',
'config.emailNotif': 'Notificações por Email',
'config.pushNotif': 'Notificações Push',
'config.securityAlerts': 'Alertas de Segurança',
'config.weeklyReport': 'Relatório Semanal',
'config.appearance': 'Aparência',
'config.dark': 'Escuro',
'config.light': 'Claro',
'config.auto': 'Auto',
'sec.title': 'Segurança',
'sec.subtitle': 'Configurações de segurança do sistema',
'sec.auth': 'Autenticação',
'sec.2fa': 'Autenticação 2FA',
'sec.biometric': 'Login com Biometria',
'sec.sso': 'Single Sign-On (SSO)',
'sec.lockAfterFail': 'Bloqueio após falhas',
'sec.sessionTime': 'Tempo de Sessão',
'sec.maxLoginAttempts': 'Tentativas Máximas de Login',
'sec.saveSecurity': 'Salvar Segurança',
'sec.activeSessions': 'Sessões Ativas',
'sec.securityLogs': 'Logs de Segurança',
'sec.30min': '30 minutos',
'sec.1h': '1 hora',
'sec.2h': '2 horas',
'sec.4h': '4 horas',
'tasks.todo': 'A Fazer',
'tasks.progress': 'Em Progresso',
'tasks.review': 'Revisão',
'tasks.done': 'Concluído',
'tasks.high': 'Alta',
'tasks.medium': 'Média',
'tasks.low': 'Baixa',
'tasks.newTask': 'Nova Tarefa',
'users.title': 'Usuários',
'users.subtitle': 'Gerenciamento de usuários do sistema',
'users.newUser': 'Novo Usuário',
'users.all': 'Todos',
'users.active': 'Ativos',
'users.inactive': 'Inativos',
'users.admins': 'Admins',
'trans.title': 'Transações',
'trans.subtitle': 'Histórico completo de transações',
'trans.new': 'Nova Transação',
'trans.total': 'Total',
'trans.completed': 'Concluídas',
'trans.pending': 'Pendentes',
'trans.cancelled': 'Canceladas',
'proj.title': 'Projetos',
'proj.subtitle': 'Acompanhe o andamento dos projetos',
'proj.new': 'Novo Projeto',
'proj.progress': 'Progresso',
'team.title': 'Equipe',
'team.subtitle': 'Gerenciamento de equipes',
'team.newMember': 'Novo Membro',
'team.tasks': 'Tarefas',
'team.projects': 'Projetos',
'cal.title': 'Calendário',
'cal.subtitle': 'Agenda e eventos',
'cal.newEvent': 'Novo Evento',
'cal.upcoming': 'Próximos Eventos',
'logs.title': 'Logs',
'logs.subtitle': 'Registros do sistema',
'logs.clear': 'Limpar',
'logs.export': 'Exportar',
'an.title': 'Analytics',
'an.subtitle': 'Métricas detalhadas e insights',
'an.pageviews': 'Pageviews',
'an.avgTime': 'Tempo Médio',
'an.bounce': 'Bounce Rate',
'an.retention': 'Retenção',
'an.visitorsByHour': 'Visitantes por Hora',
'status.success': 'Concluído',
'status.warning': 'Pendente',
'status.error': 'Cancelado',
'status.active': 'Ativo',
'status.inactive': 'Inativo',
'banner.text': 'Os dados são redefinidos automaticamente a cada <strong>7 dias</strong> para manter a demonstração limpa.',
'msg.title': 'Mensagens',
'msg.placeholder': 'Digite uma mensagem...',
'notif.title': 'Notificações',
'notif.markAllRead': 'Marcar todas como lidas',
'search.placeholder': 'Buscar qualquer coisa...',
'cmd.placeholder': 'Buscar páginas, ações...',
'user.profile': 'Meu Perfil',
'user.settings': 'Configurações',
'user.logout': 'Sair',
'cal.months': 'Janeiro,Fevereiro,Março,Abril,Maio,Junho,Julho,Agosto,Setembro,Outubro,Novembro,Dezembro',
'cal.days': 'Dom,Seg,Ter,Qua,Qui,Sex,Sáb',
},
'en': {
'nav.principal': 'MAIN',
'nav.gerenciamento': 'MANAGEMENT',
'nav.sistema': 'SYSTEM',
'nav.dashboard': 'Dashboard',
'nav.analytics': 'Analytics',
'nav.usuarios': 'Users',
'nav.transacoes': 'Transactions',
'nav.projetos': 'Projects',
'nav.tarefas': 'Tasks',
'nav.equipe': 'Team',
'nav.calendario': 'Calendar',
'nav.config': 'Settings',
'nav.seguranca': 'Security',
'nav.logs': 'Logs',
'auth.login': 'Sign In',
'auth.signup': 'Create Account',
'auth.email': 'Email',
'auth.password': 'Password',
'auth.name': 'Full name',
'auth.confirmPw': 'Confirm password',
'auth.createPw': 'Create password',
'auth.remember': 'Remember me',
'auth.forgot': 'Forgot password?',
'auth.createAccount': 'Create Account',
'auth.demo': 'Demo',
'auth.pwStrength': 'Password strength',
'auth.tagline': 'Intelligent Management Panel',
'auth.terms': 'By creating an account, you agree to the {terms} and {privacy}.',
'auth.termsLink': 'Terms of Use',
'auth.privacyLink': 'Privacy Policy',
'dash.receita': 'Total Revenue',
'dash.usuarios': 'Active Users',
'dash.pedidos': 'Orders',
'dash.conversao': 'Conversion Rate',
'dash.receitaChart': 'Revenue & Expenses',
'dash.trafficChart': 'Traffic by Source',
'dash.recentTrans': 'Recent Transactions',
'dash.viewAll': 'View All',
'dash.recentActivity': 'Recent Activity',
'dash.filter': 'Filter',
'dash.last7d': 'Last 7 days',
'dash.last30d': 'Last 30 days',
'dash.last90d': 'Last 90 days',
'dash.last1y': 'Last year',
'dash.export': 'Export',
'dash.subtitle': 'Real-time system overview',
'config.title': 'Settings',
'config.subtitle': 'Customize the system',
'config.profile': 'Profile',
'config.name': 'Name',
'config.emailLabel': 'Email',
'config.language': 'Language',
'config.save': 'Save Changes',
'config.notifications': 'Notifications',
'config.emailNotif': 'Email Notifications',
'config.pushNotif': 'Push Notifications',
'config.securityAlerts': 'Security Alerts',
'config.weeklyReport': 'Weekly Report',
'config.appearance': 'Appearance',
'config.dark': 'Dark',
'config.light': 'Light',
'config.auto': 'Auto',
'sec.title': 'Security',
'sec.subtitle': 'System security settings',
'sec.auth': 'Authentication',
'sec.2fa': '2FA Authentication',
'sec.biometric': 'Biometric Login',
'sec.sso': 'Single Sign-On (SSO)',
'sec.lockAfterFail': 'Lock after failures',
'sec.sessionTime': 'Session Time',
'sec.maxLoginAttempts': 'Max Login Attempts',
'sec.saveSecurity': 'Save Security',
'sec.activeSessions': 'Active Sessions',
'sec.securityLogs': 'Security Logs',
'sec.30min': '30 minutes',
'sec.1h': '1 hour',
'sec.2h': '2 hours',
'sec.4h': '4 hours',
'tasks.todo': 'To Do',
'tasks.progress': 'In Progress',
'tasks.review': 'Review',
'tasks.done': 'Done',
'tasks.high': 'High',
'tasks.medium': 'Medium',
'tasks.low': 'Low',
'tasks.newTask': 'New Task',
'users.title': 'Users',
'users.subtitle': 'System user management',
'users.newUser': 'New User',
'users.all': 'All',
'users.active': 'Active',
'users.inactive': 'Inactive',
'users.admins': 'Admins',
'trans.title': 'Transactions',
'trans.subtitle': 'Complete transaction history',
'trans.new': 'New Transaction',
'trans.total': 'Total',
'trans.completed': 'Completed',
'trans.pending': 'Pending',
'trans.cancelled': 'Cancelled',
'proj.title': 'Projects',
'proj.subtitle': 'Track project progress',
'proj.new': 'New Project',
'proj.progress': 'Progress',
'team.title': 'Team',
'team.subtitle': 'Team management',
'team.newMember': 'New Member',
'team.tasks': 'Tasks',
'team.projects': 'Projects',
'cal.title': 'Calendar',
'cal.subtitle': 'Schedule and events',
'cal.newEvent': 'New Event',
'cal.upcoming': 'Upcoming Events',
'logs.title': 'Logs',
'logs.subtitle': 'System records',
'logs.clear': 'Clear',
'logs.export': 'Export',
'an.title': 'Analytics',
'an.subtitle': 'Detailed metrics and insights',
'an.pageviews': 'Pageviews',
'an.avgTime': 'Avg. Time',
'an.bounce': 'Bounce Rate',
'an.retention': 'Retention',
'an.visitorsByHour': 'Visitors by Hour',
'status.success': 'Completed',
'status.warning': 'Pending',
'status.error': 'Cancelled',
'status.active': 'Active',
'status.inactive': 'Inactive',
'banner.text': 'Data is automatically reset every <strong>7 days</strong> to keep the demo clean.',
'msg.title': 'Messages',
'msg.placeholder': 'Type a message...',
'notif.title': 'Notifications',
'notif.markAllRead': 'Mark all as read',
'search.placeholder': 'Search anything...',
'cmd.placeholder': 'Search pages, actions...',
'user.profile': 'My Profile',
'user.settings': 'Settings',
'user.logout': 'Sign Out',
'cal.months': 'January,February,March,April,May,June,July,August,September,October,November,December',
'cal.days': 'Sun,Mon,Tue,Wed,Thu,Fri,Sat',
},
'es': {
'nav.principal': 'PRINCIPAL',
'nav.gerenciamento': 'GESTIÓN',
'nav.sistema': 'SISTEMA',
'nav.dashboard': 'Dashboard',
'nav.analytics': 'Analytics',
'nav.usuarios': 'Usuarios',
'nav.transacoes': 'Transacciones',
'nav.projetos': 'Proyectos',
'nav.tarefas': 'Tareas',
'nav.equipe': 'Equipo',
'nav.calendario': 'Calendario',
'nav.config': 'Configuración',
'nav.seguranca': 'Seguridad',
'nav.logs': 'Logs',
'auth.login': 'Ingresar',
'auth.signup': 'Crear Cuenta',
'auth.email': 'Email',
'auth.password': 'Contraseña',
'auth.name': 'Nombre completo',
'auth.confirmPw': 'Confirmar contraseña',
'auth.createPw': 'Crear contraseña',
'auth.remember': 'Recordarme',
'auth.forgot': '¿Olvidaste la contraseña?',
'auth.createAccount': 'Crear Cuenta',
'auth.demo': 'Demo',
'auth.pwStrength': 'Fortaleza de contraseña',
'auth.tagline': 'Panel de Gestión Inteligente',
'auth.terms': 'Al crear una cuenta, aceptas los {terms} y {privacy}.',
'auth.termsLink': 'Términos de Uso',
'auth.privacyLink': 'Política de Privacidad',
'dash.receita': 'Ingresos Totales',
'dash.usuarios': 'Usuarios Activos',
'dash.pedidos': 'Pedidos',
'dash.conversao': 'Tasa de Conversión',
'dash.receitaChart': 'Ingresos y Gastos',
'dash.trafficChart': 'Tráfico por Fuente',
'dash.recentTrans': 'Transacciones Recientes',
'dash.viewAll': 'Ver Todas',
'dash.recentActivity': 'Actividad Reciente',
'dash.filter': 'Filtrar',
'dash.last7d': 'Últimos 7 días',
'dash.last30d': 'Últimos 30 días',
'dash.last90d': 'Últimos 90 días',
'dash.last1y': 'Último año',
'dash.export': 'Exportar',
'dash.subtitle': 'Vista general del sistema en tiempo real',
'config.title': 'Configuración',
'config.subtitle': 'Personaliza el sistema',
'config.profile': 'Perfil',
'config.name': 'Nombre',
'config.emailLabel': 'Email',
'config.language': 'Idioma',
'config.save': 'Guardar Cambios',
'config.notifications': 'Notificaciones',
'config.emailNotif': 'Notificaciones por Email',
'config.pushNotif': 'Notificaciones Push',
'config.securityAlerts': 'Alertas de Seguridad',
'config.weeklyReport': 'Informe Semanal',
'config.appearance': 'Apariencia',
'config.dark': 'Oscuro',
'config.light': 'Claro',
'config.auto': 'Auto',
'sec.title': 'Seguridad',
'sec.subtitle': 'Configuración de seguridad del sistema',
'sec.auth': 'Autenticación',
'sec.2fa': 'Autenticación 2FA',
'sec.biometric': 'Login con Biometría',
'sec.sso': 'Single Sign-On (SSO)',
'sec.lockAfterFail': 'Bloqueo tras fallos',
'sec.sessionTime': 'Tiempo de Sesión',
'sec.maxLoginAttempts': 'Intentos Máximos de Login',
'sec.saveSecurity': 'Guardar Seguridad',
'sec.activeSessions': 'Sesiones Activas',
'sec.securityLogs': 'Logs de Seguridad',
'sec.30min': '30 minutos',
'sec.1h': '1 hora',
'sec.2h': '2 horas',
'sec.4h': '4 horas',
'tasks.todo': 'Por Hacer',
'tasks.progress': 'En Progreso',
'tasks.review': 'Revisión',
'tasks.done': 'Completado',
'tasks.high': 'Alta',
'tasks.medium': 'Media',
'tasks.low': 'Baja',
'tasks.newTask': 'Nueva Tarea',
'users.title': 'Usuarios',
'users.subtitle': 'Gestión de usuarios del sistema',
'users.newUser': 'Nuevo Usuario',
'users.all': 'Todos',
'users.active': 'Activos',
'users.inactive': 'Inactivos',
'users.admins': 'Admins',
'trans.title': 'Transacciones',
'trans.subtitle': 'Historial completo de transacciones',
'trans.new': 'Nueva Transacción',
'trans.total': 'Total',
'trans.completed': 'Completadas',
'trans.pending': 'Pendientes',
'trans.cancelled': 'Canceladas',
'proj.title': 'Proyectos',
'proj.subtitle': 'Seguimiento del progreso de proyectos',
'proj.new': 'Nuevo Proyecto',
'proj.progress': 'Progreso',
'team.title': 'Equipo',
'team.subtitle': 'Gestión de equipos',
'team.newMember': 'Nuevo Miembro',
'team.tasks': 'Tareas',
'team.projects': 'Proyectos',
'cal.title': 'Calendario',
'cal.subtitle': 'Agenda y eventos',
'cal.newEvent': 'Nuevo Evento',
'cal.upcoming': 'Próximos Eventos',
'logs.title': 'Logs',
'logs.subtitle': 'Registros del sistema',
'logs.clear': 'Limpiar',
'logs.export': 'Exportar',
'an.title': 'Analytics',
'an.subtitle': 'Métricas detalladas e insights',
'an.pageviews': 'Pageviews',
'an.avgTime': 'Tiempo Medio',
'an.bounce': 'Bounce Rate',
'an.retention': 'Retención',
'an.visitorsByHour': 'Visitantes por Hora',
'status.success': 'Completado',
'status.warning': 'Pendiente',
'status.error': 'Cancelado',
'status.active': 'Activo',
'status.inactive': 'Inactivo',
'banner.text': 'Los datos se reinician automáticamente cada <strong>7 días</strong> para mantener la demostración limpia.',
'msg.title': 'Mensajes',
'msg.placeholder': 'Escribe un mensaje...',
'notif.title': 'Notificaciones',
'notif.markAllRead': 'Marcar todas como leídas',
'search.placeholder': 'Buscar cualquier cosa...',
'cmd.placeholder': 'Buscar páginas, acciones...',
'user.profile': 'Mi Perfil',
'user.settings': 'Configuración',
'user.logout': 'Salir',
'cal.months': 'Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre',
'cal.days': 'Dom,Lun,Mar,Mié,Jue,Vie,Sáb',
}
},
t(key) {
return this.translations[this.currentLang]?.[key] || this.translations['pt-BR']?.[key] || key;
},
setLang(lang) {
this.currentLang = lang;
localStorage.setItem('nexus_lang', lang);
document.documentElement.lang = lang === 'en' ? 'en' : lang === 'es' ? 'es' : 'pt-BR';
this.applyAll();
},
loadSavedLang() {
const saved = localStorage.getItem('nexus_lang');
if (saved && this.translations[saved]) this.currentLang = saved;
},
applyAll() {
const lang = this.currentLang;
const tr = this.translations[lang] || {};
document.querySelectorAll('[data-i18n]').forEach(el => {
const key = el.dataset.i18n;
if (tr[key]) el.textContent = tr[key];
});
document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
const key = el.dataset.i18nPlaceholder;
if (tr[key]) el.placeholder = tr[key];
});
document.querySelectorAll('[data-i18n-html]').forEach(el => {
const key = el.dataset.i18nHtml;
if (tr[key]) el.innerHTML = tr[key];
});
const calMonths = tr['cal.months'];
if (calMonths) this._calMonths = calMonths.split(',');
const calDays = tr['cal.days'];
if (calDays) this._calDays = calDays.split(',');
const configLang = document.getElementById('configLang');
if (configLang) {
configLang.value = lang === 'en' ? 'English' : lang === 'es' ? 'Español' : 'Português (BR)';
}
if (state.tasks) renderKanban();
if (state.transactions) renderTransactions($('#transFilterSelect')?.value || 'all', $('#transSearchInput')?.value || '');
if (state.users) renderUsers($('#userFilterSelect')?.value || 'all', $('#userSearchInput')?.value || '');
if (state.events) renderCalendar();
if (state.sessions) renderSecurity();
const periodSel = $('#periodSelect');
if (periodSel) {
[...periodSel.options].forEach((opt, i) => {
const keys = ['dash.last7d','dash.last30d','dash.last90d','dash.last1y'];
opt.textContent = i18n.t(keys[i]);
});
}
const transPeriodSel = $('#transPeriodSelect');
if (transPeriodSel) {
[...transPeriodSel.options].forEach((opt, i) => {
const keys = ['dash.last7d','dash.last30d','dash.last90d','dash.last1y'];
opt.textContent = i18n.t(keys[i]);
});
}
const userFilterSel = $('#userFilterSelect');
if (userFilterSel) {
const keys = ['users.all','users.active','users.inactive','users.admins'];
[...userFilterSel.options].forEach((opt, i) => { opt.textContent = i18n.t(keys[i]); });
}
const transFilterSel = $('#transFilterSelect');
if (transFilterSel) {
const keys = ['users.all','status.success','status.warning','status.error'];
[...transFilterSel.options].forEach((opt, i) => { opt.textContent = i18n.t(keys[i]); });
}
const sessionTimeSel = document.querySelector('#page-seguranca select.form-input');
if (sessionTimeSel) {
const keys = ['sec.30min','sec.1h','sec.2h','sec.4h'];
[...sessionTimeSel.options].forEach((opt, i) => { opt.textContent = i18n.t(keys[i]); });
}
}
};

// CRYPTO LAYER
const crypto = {
  _salt: 'nexus_2026_salt',
  async sha256(str) {
    const encoded = new TextEncoder().encode(str + this._salt);
    const hash = await cryptoSubtle.digest('SHA-256', encoded);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
  },
  _encKey: null,
  async _getKey() {
    if (this._encKey) return this._encKey;
    const keyMat = await cryptoSubtle.importKey('raw', new TextEncoder().encode('NexusAdmin_AES_2026!@#'), { name: 'AES-GCM' }, false, ['encrypt', 'decrypt']);
    this._encKey = keyMat;
    return keyMat;
  },
  async encrypt(text) {
    try {
      const iv = cryptoSubtle.getRandomValues(new Uint8Array(12));
      const key = await this._getKey();
      const enc = await cryptoSubtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(text));
      const combined = new Uint8Array(iv.length + new Uint8Array(enc).length);
      combined.set(iv); combined.set(new Uint8Array(enc), iv.length);
      return btoa(String.fromCharCode(...combined));
    } catch(e) { return text; }
  },
  async decrypt(cipher) {
    try {
      const raw = Uint8Array.from(atob(cipher), c => c.charCodeAt(0));
      const iv = raw.slice(0, 12);
      const data = raw.slice(12);
      const key = await this._getKey();
      const dec = await cryptoSubtle.decrypt({ name: 'AES-GCM', iv }, key, data);
      return new TextDecoder().decode(dec);
    } catch(e) { return cipher; }
  },
  hashPw(pw) { return this.sha256(pw); }
};
const cryptoSubtle = window.crypto.subtle || window.crypto.webkitSubtle;

// SUPABASE DB LAYER
const SUPABASE_URL = '';
const SUPABASE_KEY = '';
let sb = null;
try { if (SUPABASE_URL && SUPABASE_KEY && window.supabase) sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY); } catch(e) {}

const db = {
  _encPrefix: '__enc__',
  async _encWrap(val) { const s = JSON.stringify(val); const e = await crypto.encrypt(s); return this._encPrefix + e; },
  async _encUnwrap(raw) { if (typeof raw !== 'string' || !raw.startsWith(this._encPrefix)) return raw; const e = raw.slice(this._encPrefix.length); const d = await crypto.decrypt(e); try { return JSON.parse(d); } catch(x) { return raw; } },
  _lsKey(prefix, email) { return prefix + '_' + email; },
  async get(key, email) {
    const lsKey = this._lsKey(key, email);
    if (sb) {
      try {
        const { data } = await sb.from('user_data').select('value').eq('key', lsKey).single();
        if (data && data.value) { const v = await this._encUnwrap(data.value); localStorage.setItem(lsKey, JSON.stringify(v)); return v; }
      } catch(e) {}
    }
    const raw = localStorage.getItem(lsKey);
    if (!raw) return null;
    try { const v = await this._encUnwrap(JSON.parse(raw)); return v; } catch(x) { return null; }
  },
  async set(key, email, value) {
    const lsKey = this._lsKey(key, email);
    const wrapped = await this._encWrap(value);
    localStorage.setItem(lsKey, JSON.stringify(wrapped));
    if (sb) {
      try { await sb.from('user_data').upsert({ key: lsKey, email, value: wrapped, updated_at: new Date().toISOString() }, { onConflict: 'key' }); } catch(e) {}
    }
  },
  async remove(key, email) {
    const lsKey = this._lsKey(key, email);
    localStorage.removeItem(lsKey);
    if (sb) { try { await sb.from('user_data').delete().eq('key', lsKey); } catch(e) {} }
  },
  async getAllUsers() {
    if (sb) {
      try {
        const { data } = await sb.from('users').select('*');
        if (data && data.length) {
          const users = data.map(r => ({ email: r.email, name: r.name, password: r.password, twoFa: !!r.two_fa }));
          localStorage.setItem('nexus_users', JSON.stringify(users));
          return users;
        }
      } catch(e) {}
    }
    return JSON.parse(localStorage.getItem('nexus_users') || '[]');
  },
  async saveAllUsers(users) {
    localStorage.setItem('nexus_users', JSON.stringify(users));
    if (sb) {
      try {
        for (const u of users) {
          const hashedPw = u.password.length === 64 ? u.password : await crypto.hashPw(u.password);
          if (u.password.length !== 64) u.password = hashedPw;
          await sb.from('users').upsert({ email: u.email, name: u.name, password: hashedPw, two_fa: !!u.twoFa, updated_at: new Date().toISOString() }, { onConflict: 'email' });
        }
        localStorage.setItem('nexus_users', JSON.stringify(users));
      } catch(e) {}
    }
  },
  needsWeeklyReset() {
    const lastReset = localStorage.getItem('nexus_last_reset');
    if (!lastReset) { localStorage.setItem('nexus_last_reset', Date.now().toString()); return false; }
    const daysSince = (Date.now() - parseInt(lastReset)) / (1000 * 60 * 60 * 24);
    return daysSince >= 7;
  },
  doWeeklyReset() {
    const keys = Object.keys(localStorage).filter(k => k.startsWith('nexus_profiles_') || k.startsWith('nexus_data_'));
    keys.forEach(k => localStorage.removeItem(k));
    localStorage.setItem('nexus_last_reset', Date.now().toString());
    if (sb) { try { sb.from('user_data').delete().neq('key', '__keep__'); } catch(e) {} }
  }
};

    const state = {
authUsers: [],
currentUser: null,
        users: [
            { id: 1, name: 'Ana Silva', email: 'ana@nexus.io', role: 'Admin', status: 'Ativo', seed: 'Ana' },
            { id: 2, name: 'Carlos Mendes', email: 'carlos@nexus.io', role: 'Editor', status: 'Ativo', seed: 'Carlos' },
            { id: 3, name: 'Júlia Ferreira', email: 'julia@nexus.io', role: 'Viewer', status: 'Inativo', seed: 'Julia' },
            { id: 4, name: 'Rafael Costa', email: 'rafael@nexus.io', role: 'Admin', status: 'Ativo', seed: 'Rafael' },
            { id: 5, name: 'Mariana Santos', email: 'mariana@nexus.io', role: 'Editor', status: 'Ativo', seed: 'Mariana' },
            { id: 6, name: 'Pedro Alves', email: 'pedro@nexus.io', role: 'Viewer', status: 'Inativo', seed: 'Pedro' },
            { id: 7, name: 'Beatriz Lima', email: 'beatriz@nexus.io', role: 'Admin', status: 'Ativo', seed: 'Beatriz' },
            { id: 8, name: 'Gabriel Rocha', email: 'gabriel@nexus.io', role: 'Editor', status: 'Ativo', seed: 'Gabriel' },
        ],
        transactions: [
            { id: 'TXN-001', client: 'Ana Silva', type: 'Assinatura', value: 'R$ 1.299,00', status: 'success', date: '28 Mai 2026', seed: 'Ana' },
            { id: 'TXN-002', client: 'Carlos Mendes', type: 'Compra', value: 'R$ 849,90', status: 'warning', date: '27 Mai 2026', seed: 'Carlos' },
            { id: 'TXN-003', client: 'Júlia Ferreira', type: 'Renovação', value: 'R$ 2.450,00', status: 'success', date: '27 Mai 2026', seed: 'Julia' },
            { id: 'TXN-004', client: 'Rafael Costa', type: 'Compra', value: 'R$ 3.200,00', status: 'error', date: '26 Mai 2026', seed: 'Rafael' },
            { id: 'TXN-005', client: 'Mariana Santos', type: 'Assinatura', value: 'R$ 599,00', status: 'success', date: '26 Mai 2026', seed: 'Mariana' },
            { id: 'TXN-006', client: 'Pedro Alves', type: 'Renovação', value: 'R$ 1.800,00', status: 'warning', date: '25 Mai 2026', seed: 'Pedro' },
            { id: 'TXN-007', client: 'Beatriz Lima', type: 'Compra', value: 'R$ 4.100,00', status: 'success', date: '25 Mai 2026', seed: 'Beatriz' },
            { id: 'TXN-008', client: 'Gabriel Rocha', type: 'Assinatura', value: 'R$ 749,00', status: 'success', date: '24 Mai 2026', seed: 'Gabriel' },
        ],
        tasks: [
            { id: 1, title: 'Redesign da Homepage', desc: 'Atualizar layout e componentes visuais', priority: 'high', status: 'todo', seed: 'task1' },
            { id: 2, title: 'API de Pagamentos', desc: 'Integrar gateway de pagamento Stripe', priority: 'high', status: 'progress', seed: 'task2' },
            { id: 3, title: 'Testes Unitários', desc: 'Cobertura de testes acima de 80%', priority: 'medium', status: 'progress', seed: 'task3' },
            { id: 4, title: 'Documentação API', desc: 'Gerar docs com Swagger/OpenAPI', priority: 'low', status: 'todo', seed: 'task4' },
            { id: 5, title: 'Migração de Banco', desc: 'Migrar de PostgreSQL para CockroachDB', priority: 'high', status: 'review', seed: 'task5' },
            { id: 6, title: 'Setup CI/CD', desc: 'Pipeline com GitHub Actions', priority: 'medium', status: 'done', seed: 'task6' },
            { id: 7, title: 'Cache Redis', desc: 'Implementar cache para endpoints críticos', priority: 'medium', status: 'done', seed: 'task7' },
            { id: 8, title: 'Monitoramento', desc: 'Configurar Prometheus + Grafana', priority: 'low', status: 'review', seed: 'task8' },
            { id: 9, title: 'Auth 2FA', desc: 'Implementar autenticação em dois fatores', priority: 'high', status: 'todo', seed: 'task9' },
        ],
        team: [
            { name: 'Ana Silva', role: 'Lead Frontend', status: 'online', tasks: 24, projects: 3, seed: 'Ana' },
            { name: 'Carlos Mendes', role: 'Backend Dev', status: 'online', tasks: 18, projects: 2, seed: 'Carlos' },
            { name: 'Júlia Ferreira', role: 'UX Designer', status: 'offline', tasks: 12, projects: 4, seed: 'Julia' },
            { name: 'Rafael Costa', role: 'DevOps', status: 'online', tasks: 31, projects: 5, seed: 'Rafael' },
            { name: 'Mariana Santos', role: 'QA Engineer', status: 'online', tasks: 15, projects: 3, seed: 'Mariana' },
            { name: 'Pedro Alves', role: 'Data Analyst', status: 'offline', tasks: 9, projects: 2, seed: 'Pedro' },
            { name: 'Beatriz Lima', role: 'Product Manager', status: 'online', tasks: 27, projects: 6, seed: 'Beatriz' },
            { name: 'Gabriel Rocha', role: 'Mobile Dev', status: 'online', tasks: 20, projects: 2, seed: 'Gabriel' },
        ],
        events: [
            { title: 'Sprint Review', time: '10:00 - 11:00', date: 28, color: 'cyan' },
            { title: 'Deploy Produção', time: '14:00 - 15:30', date: 28, color: 'green' },
            { title: 'Reunião de Planejamento', time: '09:00 - 10:30', date: 30, color: 'purple' },
            { title: 'Audit de Segurança', time: '15:00 - 16:00', date: 2, color: 'red' },
            { title: 'Demo para Cliente', time: '11:00 - 12:00', date: 5, color: 'orange' },
        ],
        calMonth: new Date().getMonth(),
        calYear: new Date().getFullYear(),
        messages: [
            { name: 'Ana Silva', preview: 'Enviei os mockups do novo layout', time: '2 min', seed: 'Ana' },
            { name: 'Carlos Mendes', preview: 'A API de pagamentos está pronta para review', time: '15 min', seed: 'Carlos' },
            { name: 'Beatriz Lima', preview: 'Precisamos alinhar o roadmap do Q3', time: '1h', seed: 'Beatriz' },
            { name: 'Rafael Costa', preview: 'O deploy do staging falhou, investigando', time: '2h', seed: 'Rafael' },
            { name: 'Mariana Santos', preview: 'Testes de regressão concluídos com sucesso', time: '3h', seed: 'Mariana' },
        ],
        sessions: [
            { device: 'Chrome — Windows', ip: '192.168.1.10', time: 'Sessão atual', current: true, icon: 'fa-desktop' },
            { device: 'Safari — macOS', ip: '10.0.0.5', time: '2 horas atrás', current: false, icon: 'fa-laptop' },
            { device: 'Mobile — iOS', ip: '172.16.0.2', time: '1 dia atrás', current: false, icon: 'fa-mobile-screen' },
        ],
        securityLogs: [
            { type: 'success', text: 'Login realizado com sucesso — 192.168.1.10', time: '09:00' },
            { type: 'warning', text: 'Tentativa de login falha — 10.0.0.5', time: '08:45' },
            { type: 'error', text: 'IP bloqueado após 5 tentativas — 203.0.113.42', time: '08:30' },
            { type: 'success', text: '2FA ativado para usuário admin@nexus.io', time: '08:00' },
            { type: 'warning', text: 'Senha alterada — recomendação: ativar 2FA', time: '07:30' },
            { type: 'success', text: 'Certificado SSL renovado automaticamente', time: '07:00' },
        ],
  nextId: 100,
  _defaultTasks: null,
  _defaultTransactions: null,
  _defaultProjects: null,
  _defaultTeam: null,
  _defaultEvents: null,
  };

    async function loadUserProfile() {
    if (!state.currentUser) return;
    if (!state._defaultTasks) {
      state._defaultTasks = JSON.parse(JSON.stringify(state.tasks));
      state._defaultTransactions = JSON.parse(JSON.stringify(state.transactions));
      state._defaultTeam = JSON.parse(JSON.stringify(state.team));
      state._defaultEvents = JSON.parse(JSON.stringify(state.events));
    }
    if (state.currentUser.demo) return;
    const email = state.currentUser.email;
    const stored = await db.get('nexus_profiles', email);
    if (stored && stored.tasks) {
      state.tasks = stored.tasks;
      state.transactions = stored.transactions || [];
      state.events = stored.events || state._defaultEvents;
    } else {
      const seed = state.currentUser.name.split(' ')[0];
      state.tasks = [
        { id: 1, title: 'Configurar ambiente', desc: 'Instalar dependências e configurar projeto', priority: 'high', status: 'todo', seed: seed + '1' },
        { id: 2, title: 'Primeiro deploy', desc: 'Fazer deploy inicial do projeto', priority: 'high', status: 'progress', seed: seed + '2' },
        { id: 3, title: 'Revisão de código', desc: 'Revisar e ajustar padrões de código', priority: 'medium', status: 'todo', seed: seed + '3' },
      ];
      state.transactions = [
        { id: 'TXN-001', client: state.currentUser.name, type: 'Assinatura', value: 'R$ 99,00', status: 'success', date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }), seed: seed },
      ];
      state.events = state._defaultEvents;
      saveUserProfile();
    }
    state.team = state._defaultTeam.filter(m => m.name !== state.currentUser.name);
    if (!state.team.length) state.team = [{ name: state.currentUser.name, role: 'Proprietário', status: 'online', tasks: state.tasks.length, projects: 1, seed: seed }];
  }

  async function saveUserProfile() {
    if (!state.currentUser || state.currentUser.demo) return;
    await db.set('nexus_profiles', state.currentUser.email, { tasks: state.tasks, transactions: state.transactions, events: state.events });
  }

  function toast(msg, type = 'info') {
        const icons = { success: 'fa-check-circle', error: 'fa-xmark-circle', warning: 'fa-exclamation-triangle', info: 'fa-info-circle' };
        const t = document.createElement('div');
        t.className = `toast ${type}`;
        t.innerHTML = `<i class="fas ${icons[type]}"></i><span class="toast-msg">${msg}</span>`;
        $('#toastContainer').appendChild(t);
        setTimeout(() => { if (t.parentNode) t.remove(); }, 4000);
    }

    function openModal(title, bodyHtml, onConfirm) {
        $('#modalTitle').textContent = title;
        $('#modalBody').innerHTML = bodyHtml;
        $('#modalOverlay').classList.add('open');
        const confirmBtn = $('#modalConfirm');
        const handler = () => {
            onConfirm();
            closeModal();
            confirmBtn.removeEventListener('click', handler);
        };
        confirmBtn.addEventListener('click', handler);
    }
    function closeModal() { $('#modalOverlay').classList.remove('open'); }

function updateBadges() {
  const bUsers = $('#badgeUsers');
  const bProjects = $('#badgeProjects');
  const bTasks = $('#badgeTasks');
  if (bUsers) bUsers.textContent = state.users.length;
  if (bTasks) bTasks.textContent = state.tasks.filter(t => t.status !== 'done').length;
}

function initParticles() {
  const container = $('#particles');
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (10 + Math.random() * 15) + 's';
    p.style.animationDelay = Math.random() * 12 + 's';
    p.style.width = p.style.height = (1 + Math.random() * 1.5) + 'px';
    p.style.background = ['#00d4ff', '#a855f7', '#10b981', '#f59e0b'][Math.floor(Math.random() * 4)];
    container.appendChild(p);
  }
}

    function updateClock() {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');
        $('#headerTime').textContent = `${h}:${m}:${s}`;
        const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
        $('#headerDate').textContent = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]}`;
    }

    function animateCounters() {
        $$('[data-counter]').forEach(el => {
            const target = parseInt(el.dataset.counter);
            const suffix = el.dataset.suffix || '';
            const prefix = el.textContent.startsWith('R$') ? 'R$ ' : '';
            const duration = 1500;
            const start = performance.now();
            function update(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(target * eased);
                el.textContent = prefix + current.toLocaleString('pt-BR') + suffix;
                if (progress < 1) requestAnimationFrame(update);
            }
            requestAnimationFrame(update);
        });
    }

    function drawSparkline(id, data, color) {
        const container = $(`#${id}`);
        if (!container) return;
        const canvas = document.createElement('canvas');
        container.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        const w = container.offsetWidth || 150;
        const h = 30;
        canvas.width = w * 2; canvas.height = h * 2;
        canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
        ctx.scale(2, 2);
        const max = Math.max(...data); const min = Math.min(...data);
        const range = max - min || 1; const step = w / (data.length - 1);
        ctx.beginPath();
        data.forEach((v, i) => {
            const x = i * step; const y = h - ((v - min) / range) * (h - 4) - 2;
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        });
        ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.stroke();
        ctx.lineTo(w, h); ctx.lineTo(0, h); ctx.closePath();
        const grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, color + '30'); grad.addColorStop(1, color + '00');
        ctx.fillStyle = grad; ctx.fill();
    }

let charts = {};
function initCharts() {
  Chart.defaults.color = '#94a3b8';
  Chart.defaults.borderColor = 'rgba(255,255,255,0.06)';
  Chart.defaults.font.family = "'Inter', sans-serif";

const periods = {
'7d': { labels: ['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'], rev: [4200,3800,4500,5100,4900,5600,5800], exp: [2800,2600,3000,3400,3100,3600,3800], dash: { receita: 33900, usuarios: 1240, pedidos: 312, conversao: '71.2%', receitaChange: '+18.3%', usuariosChange: '+8.1%', pedidosChange: '-1.5%', conversaoChange: '+3.2%', receitaDir: 'positive', usuariosDir: 'positive', pedidosDir: 'negative', conversaoDir: 'positive' }, analytics: { pageviews: '24.5K', tempoMedio: '3m 18s', bounce: '35.1%', retencao: '62.8%', pageviewsChange: '+12%', tempoMedioChange: '+4%', bounceChange: '+1.8%', retencaoChange: '+3%', pageviewsDir: 'positive', tempoMedioDir: 'positive', bounceDir: 'negative', retencaoDir: 'positive' }, trans: { total: 312, concluidas: 268, pendentes: 31, canceladas: 13 } },
'30d': { labels: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'], rev: [18500,22300,19800,27400,25600,31200,28900,35100,32400,38700,36200,42100], exp: [12400,14200,13800,16500,15200,18700,17100,21300,19800,23400,22100,25600], dash: { receita: 284590, usuarios: 8432, pedidos: 1924, conversao: '68.7%', receitaChange: '+23.5%', usuariosChange: '+12.8%', pedidosChange: '-3.2%', conversaoChange: '+5.1%', receitaDir: 'positive', usuariosDir: 'positive', pedidosDir: 'negative', conversaoDir: 'positive' }, analytics: { pageviews: '142.8K', tempoMedio: '4m 32s', bounce: '32.4%', retencao: '67.2%', pageviewsChange: '+18%', tempoMedioChange: '+8%', bounceChange: '-2.1%', retencaoChange: '+5%', pageviewsDir: 'positive', tempoMedioDir: 'positive', bounceDir: 'negative', retencaoDir: 'positive' }, trans: { total: 1247, concluidas: 1089, pendentes: 112, canceladas: 46 } },
'90d': { labels: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'], rev: [52000,58000,61000,55000,64000,71000,68000,75000,82000,78000,85000,91000], exp: [38000,42000,45000,40000,47000,52000,49000,55000,60000,57000,63000,68000], dash: { receita: 790000, usuarios: 24100, pedidos: 5670, conversao: '72.4%', receitaChange: '+31.2%', usuariosChange: '+18.5%', pedidosChange: '+5.8%', conversaoChange: '+7.3%', receitaDir: 'positive', usuariosDir: 'positive', pedidosDir: 'positive', conversaoDir: 'positive' }, analytics: { pageviews: '428.5K', tempoMedio: '5m 12s', bounce: '28.7%', retencao: '74.1%', pageviewsChange: '+24%', tempoMedioChange: '+12%', bounceChange: '-5.4%', retencaoChange: '+9%', pageviewsDir: 'positive', tempoMedioDir: 'positive', bounceDir: 'negative', retencaoDir: 'positive' }, trans: { total: 5670, concluidas: 4980, pendentes: 490, canceladas: 200 } },
'1y': { labels: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'], rev: [120000,135000,142000,150000,158000,170000,165000,180000,195000,188000,210000,225000], exp: [85000,92000,98000,105000,110000,118000,115000,125000,135000,130000,145000,155000], dash: { receita: 2038000, usuarios: 48200, pedidos: 14200, conversao: '74.8%', receitaChange: '+42.1%', usuariosChange: '+28.3%', pedidosChange: '+15.6%', conversaoChange: '+11.2%', receitaDir: 'positive', usuariosDir: 'positive', pedidosDir: 'positive', conversaoDir: 'positive' }, analytics: { pageviews: '1.2M', tempoMedio: '6m 08s', bounce: '25.3%', retencao: '79.5%', pageviewsChange: '+35%', tempoMedioChange: '+18%', bounceChange: '-8.2%', retencaoChange: '+14%', pageviewsDir: 'positive', tempoMedioDir: 'positive', bounceDir: 'negative', retencaoDir: 'positive' }, trans: { total: 14200, concluidas: 12540, pendentes: 1120, canceladas: 540 } },
};

  charts.revenue = new Chart($('#revenueChart'), {
    type: 'line',
    data: {
      labels: periods['30d'].labels,
      datasets: [
        { label: 'Receita', data: periods['30d'].rev, borderColor: '#00d4ff', backgroundColor: 'rgba(0,212,255,0.08)', fill: true, tension: 0.4, pointRadius: 0, pointHoverRadius: 6, pointHoverBackgroundColor: '#00d4ff', pointHoverBorderColor: '#fff', pointHoverBorderWidth: 2, borderWidth: 2 },
        { label: 'Despesas', data: periods['30d'].exp, borderColor: '#a855f7', backgroundColor: 'rgba(168,85,247,0.08)', fill: true, tension: 0.4, pointRadius: 0, pointHoverRadius: 6, pointHoverBackgroundColor: '#a855f7', pointHoverBorderColor: '#fff', pointHoverBorderWidth: 2, borderWidth: 2 }
      ]
    },
    options: { responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false }, plugins: { legend: { display: false }, tooltip: { backgroundColor: 'rgba(10,14,26,0.9)', borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1, padding: 12, cornerRadius: 8, callbacks: { label: ctx => `${ctx.dataset.label}: R$ ${ctx.parsed.y.toLocaleString('pt-BR')}` } } }, scales: { x: { grid: { display: false }, ticks: { font: { size: 11 } } }, y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { font: { size: 11 }, callback: v => 'R$ ' + (v / 1000) + 'K' } } } }
  });

  charts._periods = periods;

  new Chart($('#trafficChart'), {
    type: 'doughnut',
    data: { labels: ['Orgânico', 'Direto', 'Referência', 'Social', 'Email'], datasets: [{ data: [35, 25, 20, 12, 8], backgroundColor: ['#00d4ff', '#a855f7', '#10b981', '#f59e0b', '#ef4444'], borderWidth: 0, spacing: 3, borderRadius: 4 }] },
    options: { responsive: true, maintainAspectRatio: false, cutout: '72%', plugins: { legend: { position: 'bottom', labels: { padding: 16, usePointStyle: true, pointStyle: 'circle', font: { size: 11 } } }, tooltip: { backgroundColor: 'rgba(10,14,26,0.9)', borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1, padding: 12, cornerRadius: 8, callbacks: { label: ctx => ` ${ctx.label}: ${ctx.parsed}%` } } } }
  });

  const vc = $('#visitorsChart');
  if (vc) {
    const hours = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`);
    const vd = [120,85,60,45,35,40,80,250,480,620,750,810,780,690,720,830,950,870,760,650,520,380,260,170];
    new Chart(vc, {
      type: 'bar',
      data: { labels: hours, datasets: [{ label: 'Visitantes', data: vd, backgroundColor: vd.map(v => v > 700 ? 'rgba(0,212,255,0.8)' : 'rgba(0,212,255,0.3)'), borderRadius: 4, borderSkipped: false }] },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { backgroundColor: 'rgba(10,14,26,0.9)', borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1, padding: 12, cornerRadius: 8 } }, scales: { x: { grid: { display: false }, ticks: { font: { size: 10 }, maxRotation: 0, autoSkip: true, maxTicksLimit: 12 } }, y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { font: { size: 11 } } } } }
    });
  }
}

    function initSparklines() {
        drawSparkline('spark1', [12,18,15,22,19,25,28,24,30,35,32,38], '#00d4ff');
        drawSparkline('spark2', [40,45,42,50,55,48,60,65,62,70,75,80], '#a855f7');
        drawSparkline('spark3', [30,25,28,22,20,24,18,22,15,20,18,16], '#10b981');
        drawSparkline('spark4', [45,48,50,52,55,58,60,62,58,64,66,68], '#f59e0b');
    }

    // NAVIGATION
    function initNavigation() {
        $$('.nav-item').forEach(item => {
            item.addEventListener('click', e => {
                e.preventDefault();
                const page = item.dataset.page;
                if (!page) return;
                $$('.nav-item').forEach(n => n.classList.remove('active'));
                item.classList.add('active');
                $$('.page').forEach(p => p.classList.remove('active'));
                const target = $(`#page-${page}`);
                if (target) target.classList.add('active');
                $('#sidebar').classList.remove('mobile-open');
                $('#overlay').classList.remove('active');
                loadPageData(page);
            });
        });
    }

    function loadPageData(page) {
        if (page === 'usuarios') renderUsers();
        if (page === 'projetos') renderProjects();
        if (page === 'transacoes') renderTransactions();
        if (page === 'tarefas') renderKanban();
        if (page === 'equipe') renderTeam();
        if (page === 'calendario') renderCalendar();
        if (page === 'seguranca') renderSecurity();
    }

    // SIDEBAR
    function initSidebar() {
        $('#sidebarToggle').addEventListener('click', () => $('#sidebar').classList.toggle('collapsed'));
        $('#mobileMenuBtn').addEventListener('click', () => { $('#sidebar').classList.toggle('mobile-open'); $('#overlay').classList.toggle('active'); });
        $('#overlay').addEventListener('click', () => {
            $('#sidebar').classList.remove('mobile-open');
            $('#overlay').classList.remove('active');
            $('#notifPanel').classList.remove('open');
            $('#messagePanel').classList.remove('open');
        });
    }

    // USER DROPDOWN
    function initUserDropdown() {
        const btn = $('#userMenuBtn');
        const dropdown = $('#userDropdown');
        btn.addEventListener('click', e => {
            e.stopPropagation();
            dropdown.classList.toggle('open');
        });
        document.addEventListener('click', () => dropdown.classList.remove('open'));
        $$('.dropdown-item').forEach(item => {
            item.addEventListener('click', e => {
                e.preventDefault();
                const action = item.dataset.action;
                dropdown.classList.remove('open');
                if (action === 'profile') navigateTo('config');
                else if (action === 'settings') navigateTo('config');
                else if (action === 'logout') { localStorage.removeItem('nexus_session'); state.currentUser = null; location.reload(); }
            });
        });
    }

    function navigateTo(page) {
        $$('.nav-item').forEach(n => n.classList.remove('active'));
        const navItem = $(`.nav-item[data-page="${page}"]`);
        if (navItem) navItem.classList.add('active');
        $$('.page').forEach(p => p.classList.remove('active'));
        const target = $(`#page-${page}`);
        if (target) target.classList.add('active');
        loadPageData(page);
    }

    // NOTIFICATIONS
    function initNotifications() {
        $('#notifBtn').addEventListener('click', () => {
            $('#notifPanel').classList.toggle('open');
            $('#messagePanel').classList.remove('open');
            $('#overlay').classList.toggle('active');
        });
$('#markAllReadBtn').addEventListener('click', () => {
$$('.notif-item.unread').forEach(i => i.classList.remove('unread'));
$('#notifCount').textContent = '0';
$('#notifCount').style.display = 'none';
toast('Todas as notificações marcadas como lidas', 'success');
});
$('#closeNotifBtn').addEventListener('click', () => {
$('#notifPanel').classList.remove('open');
$('#overlay').classList.remove('active');
});
        $$('.notif-item').forEach(item => {
            item.addEventListener('click', () => {
                item.classList.remove('unread');
                updateNotifCount();
            });
        });
    }
    function updateNotifCount() {
        const count = $$('.notif-item.unread').length;
        const badge = $('#notifCount');
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }

    // MESSAGES
function initMessages() {
  $('#messageBtn').addEventListener('click', () => {
    $('#messagePanel').classList.toggle('open');
    $('#notifPanel').classList.remove('open');
    $('#overlay').classList.toggle('active');
    renderMessages();
    showMsgContacts();
  });
  $('#closeMsgBtn').addEventListener('click', () => {
    $('#messagePanel').classList.remove('open');
    $('#overlay').classList.remove('active');
  });
  $('#msgBackBtn').addEventListener('click', showMsgContacts);
  $('#msgChatSendBtn').addEventListener('click', sendChatMessage);
  $('#msgChatInput').addEventListener('keydown', e => { if (e.key === 'Enter') sendChatMessage(); });
}
function showMsgContacts() {
  $('#msgContactsView').style.display = '';
  $('#msgChatView').style.display = 'none';
}
function renderMessages() {
  const list = $('#msgList');
  list.innerHTML = state.messages.map((m, i) => `
    <div class="msg-item" data-idx="${i}">
      <div class="msg-avatar"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${m.seed}" alt=""></div>
      <div class="msg-info"><div class="msg-name">${m.name}</div><div class="msg-preview">${m.preview}</div></div>
      <span class="msg-time">${m.time}</span>
    </div>
  `).join('');
  $$('.msg-item').forEach(item => item.addEventListener('click', () => {
    const idx = parseInt(item.dataset.idx);
    const m = state.messages[idx];
    if (m) openChat(m.name, m.seed, idx);
  }));
}
let currentChatIdx = -1;
function openChat(name, seed, idx) {
  currentChatIdx = typeof idx === 'number' ? idx : -1;
  if (!state.chatHistory) state.chatHistory = {};
  if (!state.chatHistory[name]) {
    state.chatHistory[name] = [
      { from: 'them', text: state.messages.find(m => m.name === name)?.preview || 'Olá!', time: '10:30' },
      { from: 'me', text: 'Oi! Tudo bem?', time: '10:31' },
      { from: 'them', text: 'Tudo sim! Preciso alinhar alguns pontos.', time: '10:32' },
    ];
  }
  $('#msgContactsView').style.display = 'none';
  $('#msgChatView').style.display = '';
  $('#msgChatUserName').textContent = name;
  renderChat(name);
  $('#msgChatInput').value = '';
  $('#msgChatInput').focus();
}
function renderChat(name) {
  const msgs = state.chatHistory[name] || [];
  $('#msgChatMessages').innerHTML = msgs.map(m => `
    <div class="msg-bubble ${m.from === 'me' ? 'sent' : 'received'}">
      ${m.text}
      <div class="msg-bubble-time">${m.time}</div>
    </div>
  `).join('');
  const container = $('#msgChatMessages');
  container.scrollTop = container.scrollHeight;
}
function sendChatMessage() {
  const input = $('#msgChatInput');
  const text = input.value.trim();
  if (!text) return;
  const name = $('#msgChatUserName').textContent;
  if (!state.chatHistory[name]) state.chatHistory[name] = [];
  const now = new Date();
  const time = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  state.chatHistory[name].push({ from: 'me', text, time });
  renderChat(name);
  input.value = '';
  setTimeout(() => {
    const replies = ['Entendi, vou verificar!', 'Ok, vou analisar.', 'Bom ponto, vamos discutir.', 'Combinado!', 'Vou preparar isso.'];
    const reply = replies[Math.floor(Math.random() * replies.length)];
    const rTime = new Date();
    state.chatHistory[name].push({ from: 'them', text: reply, time: `${String(rTime.getHours()).padStart(2,'0')}:${String(rTime.getMinutes()).padStart(2,'0')}` });
    renderChat(name);
  }, 800 + Math.random() * 1200);
}

    // COMMAND PALETTE
    function initCommandPalette() {
        const commands = [
            { icon: 'fa-th-large', label: 'Dashboard', page: 'dashboard' },
            { icon: 'fa-chart-line', label: 'Analytics', page: 'analytics' },
            { icon: 'fa-users', label: 'Usuários', page: 'usuarios' },
            { icon: 'fa-money-bill-transfer', label: 'Transações', page: 'transacoes' },
            { icon: 'fa-folder-open', label: 'Projetos', page: 'projetos' },
            { icon: 'fa-list-check', label: 'Tarefas', page: 'tarefas' },
            { icon: 'fa-people-group', label: 'Equipe', page: 'equipe' },
            { icon: 'fa-calendar-days', label: 'Calendário', page: 'calendario' },
            { icon: 'fa-gear', label: 'Configurações', page: 'config' },
            { icon: 'fa-shield-halved', label: 'Segurança', page: 'seguranca' },
            { icon: 'fa-terminal', label: 'Logs', page: 'logs' },
            { icon: 'fa-plus', label: 'Novo Usuário', action: () => showNewUserModal() },
            { icon: 'fa-plus', label: 'Novo Projeto', action: () => showNewProjectModal() },
            { icon: 'fa-plus', label: 'Nova Tarefa', action: () => showNewTaskModal() },
        ];

        $('#searchBar').addEventListener('click', () => openCommandPalette(commands));
        document.addEventListener('keydown', e => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openCommandPalette(commands); }
            if (e.key === 'Escape') closeCommandPalette();
        });

        $('#commandOverlay').addEventListener('click', closeCommandPalette);

        $('#commandInput').addEventListener('input', e => {
            const q = e.target.value.toLowerCase();
            renderCommands(commands.filter(c => c.label.toLowerCase().includes(q)));
        });
    }
    function openCommandPalette(commands) {
        $('#commandPalette').classList.add('open');
        $('#commandOverlay').classList.add('open');
        $('#commandInput').value = '';
        $('#commandInput').focus();
        renderCommands(commands);
    }
    function closeCommandPalette() {
        $('#commandPalette').classList.remove('open');
        $('#commandOverlay').classList.remove('open');
    }
    function renderCommands(cmds) {
        $('#commandResults').innerHTML = cmds.map(c => `
            <div class="command-item" data-page="${c.page || ''}" data-has-action="${!!c.action}">
                <i class="fas ${c.icon}"></i><span>${c.label}</span>
            </div>
        `).join('');
        $$('.command-item').forEach(item => {
            item.addEventListener('click', () => {
                closeCommandPalette();
                if (item.dataset.page) navigateTo(item.dataset.page);
                else if (item.dataset.hasAction === 'true') {
                    const cmd = cmds.find(c => c.label === item.querySelector('span').textContent);
                    if (cmd && cmd.action) cmd.action();
                }
            });
        });
    }

    // MODAL
    function initModal() {
        $('#modalClose').addEventListener('click', closeModal);
        $('#modalCancel').addEventListener('click', closeModal);
        $('#modalOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });
    }

    // FULLSCREEN
    function initFullscreen() {
        $('#fullscreenBtn').addEventListener('click', () => {
            if (!document.fullscreenElement) document.documentElement.requestFullscreen();
            else document.exitFullscreen();
        });
    }

    // THEME
function initTheme() {
  $('#themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    const icon = $('#themeToggle').querySelector('i');
    icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    $$('.theme-option').forEach(o => {
      o.classList.toggle('active', (isLight && o.dataset.theme === 'light') || (!isLight && o.dataset.theme === 'dark'));
    });
  });
$$('.theme-option').forEach(opt => {
opt.addEventListener('click', () => {
$$('.theme-option').forEach(o => o.classList.remove('active'));
opt.classList.add('active');
const theme = opt.dataset.theme;
if (theme === 'light') {
document.body.classList.add('light-theme');
$('#themeToggle').querySelector('i').className = 'fas fa-sun';
} else if (theme === 'dark') {
document.body.classList.remove('light-theme');
$('#themeToggle').querySelector('i').className = 'fas fa-moon';
} else if (theme === 'auto') {
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
document.body.classList.toggle('light-theme', prefersLight);
$('#themeToggle').querySelector('i').className = prefersLight ? 'fas fa-sun' : 'fas fa-moon';
}
});
});
}

    // USERS
function renderUsers(filter = 'all', search = '') {
  let users = state.users;
  if (filter === 'active') users = users.filter(u => u.status === 'Ativo');
  else if (filter === 'inactive') users = users.filter(u => u.status === 'Inativo');
  else if (filter === 'admin') users = users.filter(u => u.role === 'Admin');
  if (search) users = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()));

  $('#usersTable').innerHTML = users.map(u => `
    <tr>
      <td><label class="custom-checkbox"><input type="checkbox" class="user-row-check" data-id="${u.id}"><span class="checkmark"></span></label></td>
      <td><div class="table-user"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${u.seed}" alt=""><span>${u.name}</span></div></td>
      <td>${u.email}</td>
      <td>${u.role}</td>
      <td><span class="status-badge ${u.status === 'Ativo' ? 'success' : 'warning'}">${u.status}</span></td>
      <td>
        <button class="action-btn edit-user-btn" style="width:28px;height:28px;font-size:0.7rem" data-id="${u.id}"><i class="fas fa-pen"></i></button>
        <button class="action-btn delete-user-btn" style="width:28px;height:28px;font-size:0.7rem;margin-left:2px" data-id="${u.id}"><i class="fas fa-trash"></i></button>
      </td>
    </tr>
  `).join('');

  const headerCb = $('#selectAllUsers');
  if (headerCb) { headerCb.checked = false; headerCb.indeterminate = false; }
  updateBulkBar();

  $$('.user-row-check').forEach(cb => cb.addEventListener('change', () => {
    const all = $$('.user-row-check');
    const checked = all.filter(c => c.checked).length;
    if (headerCb) {
      headerCb.checked = checked === all.length;
      headerCb.indeterminate = checked > 0 && checked < all.length;
    }
    updateBulkBar();
  }));

  $$('.edit-user-btn').forEach(btn => btn.addEventListener('click', () => {
    const user = state.users.find(u => u.id === parseInt(btn.dataset.id));
    if (!user) return;
    openModal('Editar Usuário', `
      <div class="form-group"><label>Nome</label><input type="text" class="form-input" id="editUserName" value="${user.name}"></div>
      <div class="form-group"><label>Email</label><input type="email" class="form-input" id="editUserEmail" value="${user.email}"></div>
      <div class="form-group"><label>Cargo</label><select class="form-input" id="editUserRole"><option${user.role==='Admin'?' selected':''}>Admin</option><option${user.role==='Editor'?' selected':''}>Editor</option><option${user.role==='Viewer'?' selected':''}>Viewer</option></select></div>
    `, () => {
      user.name = $('#editUserName').value.trim() || user.name;
      user.email = $('#editUserEmail').value.trim() || user.email;
      user.role = $('#editUserRole').value;
      renderUsers($('#userFilterSelect').value, $('#userSearchInput').value);
      toast(`Usuário ${user.name} atualizado`, 'success');
    });
  }));
  $$('.delete-user-btn').forEach(btn => btn.addEventListener('click', () => {
    const id = parseInt(btn.dataset.id);
    const user = state.users.find(u => u.id === id);
    state.users = state.users.filter(u => u.id !== id);
    renderUsers($('#userFilterSelect').value, $('#userSearchInput').value);
    updateBadges();
    toast(`Usuário ${user.name} removido`, 'warning');
  }));
}
function updateBulkBar() {
  const bar = $('#bulkActionBar');
  if (!bar) return;
  const checked = $$('.user-row-check:checked').length;
  bar.classList.toggle('visible', checked > 0);
  const countEl = $('#bulkCount');
  if (countEl) countEl.textContent = `${checked} selecionado${checked !== 1 ? 's' : ''}`;
}

    function showNewUserModal() {
        openModal('Novo Usuário', `
            <div class="form-group"><label>Nome</label><input type="text" class="form-input" id="newUserName" placeholder="Nome completo"></div>
            <div class="form-group"><label>Email</label><input type="email" class="form-input" id="newUserEmail" placeholder="email@nexus.io"></div>
            <div class="form-group"><label>Cargo</label><select class="form-input" id="newUserRole"><option>Admin</option><option>Editor</option><option>Viewer</option></select></div>
        `, () => {
            const name = $('#newUserName').value.trim();
            const email = $('#newUserEmail').value.trim();
            const role = $('#newUserRole').value;
            if (!name || !email) { toast('Preencha todos os campos', 'error'); return; }
            state.nextId++;
    state.users.push({ id: state.nextId, name, email, role, status: 'Ativo', seed: name.replace(/\s/g, '') });
    renderUsers($('#userFilterSelect').value, $('#userSearchInput').value);
    updateBadges();
    toast(`Usuário ${name} criado com sucesso`, 'success');
        });
    }

function initUsersPage() {
  $('#newUserBtn').addEventListener('click', showNewUserModal);
  $('#userFilterSelect').addEventListener('change', e => renderUsers(e.target.value, $('#userSearchInput').value));
  $('#userSearchInput').addEventListener('input', e => renderUsers($('#userFilterSelect').value, e.target.value));
  $('#selectAllUsers').addEventListener('change', e => {
    $$('.user-row-check').forEach(cb => cb.checked = e.target.checked);
    updateBulkBar();
  });
  $('#bulkDeleteBtn').addEventListener('click', () => {
    const ids = [...$$('.user-row-check:checked')].map(cb => parseInt(cb.dataset.id));
    if (!ids.length) return;
    state.users = state.users.filter(u => !ids.includes(u.id));
    renderUsers($('#userFilterSelect').value, $('#userSearchInput').value);
    updateBadges();
    toast(`${ids.length} usuário${ids.length > 1 ? 's' : ''} removido${ids.length > 1 ? 's' : ''}`, 'warning');
  });
  $('#bulkToggleBtn').addEventListener('click', () => {
    const ids = [...$$('.user-row-check:checked')].map(cb => parseInt(cb.dataset.id));
    ids.forEach(id => {
      const u = state.users.find(x => x.id === id);
      if (u) u.status = u.status === 'Ativo' ? 'Inativo' : 'Ativo';
    });
    renderUsers($('#userFilterSelect').value, $('#userSearchInput').value);
    toast(`${ids.length} usuário${ids.length > 1 ? 's' : ''} alterado${ids.length > 1 ? 's' : ''}`, 'success');
  });
}

    // TRANSACTIONS
    function renderTransactions(filter = 'all', search = '') {
        let trans = state.transactions;
        if (filter !== 'all') trans = trans.filter(t => t.status === filter);
        if (search) trans = trans.filter(t => t.client.toLowerCase().includes(search.toLowerCase()) || t.id.toLowerCase().includes(search.toLowerCase()));
        const statusLabels = { success: 'Concluído', warning: 'Pendente', error: 'Cancelado' };
        $('#transTable').innerHTML = trans.map(t => `
            <tr>
                <td class="text-highlight">${t.id}</td>
                <td><div class="table-user"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${t.seed}" alt=""><span>${t.client}</span></div></td>
                <td>${t.type}</td>
                <td class="text-highlight">${t.value}</td>
                <td><span class="status-badge ${t.status}">${statusLabels[t.status]}</span></td>
                <td>${t.date}</td>
            </tr>
        `).join('');
    }
function initTransactions() {
$('#transFilterSelect').addEventListener('change', e => renderTransactions(e.target.value, $('#transSearchInput').value));
$('#transSearchInput').addEventListener('input', e => renderTransactions($('#transFilterSelect').value, e.target.value));
$('#transPeriodSelect').addEventListener('change', e => {
const p = charts._periods[e.target.value];
if (p && p.trans) {
const t = p.trans;
const tt = $('#transTotal'); if (tt) tt.textContent = Number(t.total).toLocaleString('pt-BR');
const tc = $('#transConcluidas'); if (tc) tc.textContent = Number(t.concluidas).toLocaleString('pt-BR');
const tp = $('#transPendentes'); if (tp) tp.textContent = Number(t.pendentes).toLocaleString('pt-BR');
const tx = $('#transCanceladas'); if (tx) tx.textContent = Number(t.canceladas).toLocaleString('pt-BR');
toast(`Período atualizado: ${e.target.selectedOptions[0].textContent}`, 'info');
}
});
        $('#newTransBtn').addEventListener('click', () => {
            openModal('Nova Transação', `
                <div class="form-group"><label>Cliente</label><input type="text" class="form-input" id="newTransClient" placeholder="Nome do cliente"></div>
                <div class="form-group"><label>Tipo</label><select class="form-input" id="newTransType"><option>Assinatura</option><option>Compra</option><option>Renovação</option></select></div>
                <div class="form-group"><label>Valor</label><input type="text" class="form-input" id="newTransValue" placeholder="R$ 0,00"></div>
            `, () => {
                const client = $('#newTransClient').value.trim();
                const type = $('#newTransType').value;
                const value = $('#newTransValue').value.trim();
                if (!client || !value) { toast('Preencha todos os campos', 'error'); return; }
                state.nextId++;
                state.transactions.unshift({ id: `TXN-${String(state.nextId).padStart(3, '0')}`, client, type, value, status: 'warning', date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }), seed: client.replace(/\s/g, '') });
                renderTransactions($('#transFilterSelect').value, $('#transSearchInput').value);
                toast(`Transação criada para ${client}`, 'success');
            });
        });
    }

    // PROJECTS
function renderProjects() {
  const projects = [
    { name: 'Nexus Platform', desc: 'Plataforma principal de gerenciamento', progress: 85, color: '#00d4ff', status: '#10b981', members: 5, link: 'https://nexus.example.com' },
    { name: 'Mobile App', desc: 'Aplicativo móvel para clientes', progress: 62, color: '#a855f7', status: '#f59e0b', members: 4, link: 'https://mobile.example.com' },
    { name: 'API Gateway', desc: 'Serviço de gateway para microserviços', progress: 100, color: '#10b981', status: '#10b981', members: 3, link: 'https://api.example.com' },
    { name: 'Data Analytics', desc: 'Sistema de análise de dados em tempo real', progress: 34, color: '#f59e0b', status: '#f59e0b', members: 6, link: 'https://analytics.example.com' },
    { name: 'Auth Service', desc: 'Serviço de autenticação e autorização', progress: 91, color: '#00d4ff', status: '#10b981', members: 2, link: 'https://auth.example.com' },
    { name: 'Cloud Migration', desc: 'Migração de infraestrutura para cloud', progress: 48, color: '#ef4444', status: '#f59e0b', members: 8, link: 'https://cloud.example.com' },
  ];
  $('#projectsGrid').innerHTML = projects.map(p => `
    <div class="project-card" data-link="${p.link}">
      <div class="project-header"><div class="project-icon" style="background:${p.color}20;color:${p.color}"><i class="fas fa-folder"></i></div><div class="project-status-dot" style="background:${p.status};box-shadow:0 0 6px ${p.status}"></div></div>
      <div class="project-name">${p.name}</div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-progress"><div class="project-progress-header"><span>Progresso</span><strong>${p.progress}%</strong></div><div class="project-progress-bar"><div class="project-progress-fill" style="width:${p.progress}%;background:${p.color}"></div></div></div>
      <div class="project-footer-row">
        <div class="project-team">${Array.from({ length: Math.min(p.members, 3) }, (_, i) => `<img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${p.name}${i}" alt="">`).join('')}${p.members > 3 ? `<span class="more-count">+${p.members - 3}</span>` : ''}</div>
        <a href="${p.link}" target="_blank" rel="noopener" class="project-link" title="Abrir projeto" onclick="event.stopPropagation()"><i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
  `).join('');
  $$('.project-card').forEach(card => card.addEventListener('click', () => {
    const link = card.dataset.link;
    if (link) window.open(link, '_blank');
  }));
}
function showNewProjectModal() {
  openModal('Novo Projeto', `
    <div class="form-group"><label>Nome</label><input type="text" class="form-input" id="newProjName" placeholder="Nome do projeto"></div>
    <div class="form-group"><label>Descrição</label><input type="text" class="form-input" id="newProjDesc" placeholder="Descrição breve"></div>
    <div class="form-group"><label>Link</label><input type="url" class="form-input" id="newProjLink" placeholder="https://"></div>
  `, () => {
    const name = $('#newProjName').value.trim();
    if (!name) { toast('Informe o nome do projeto', 'error'); return; }
    toast(`Projeto "${name}" criado com sucesso`, 'success');
  });
}

// KANBAN
let kanbanDragBound = false;
function renderKanban() {
  const columns = { todo: 'kanbanTodo', progress: 'kanbanProgress', review: 'kanbanReview', done: 'kanbanDone' };
  Object.entries(columns).forEach(([status, elId]) => {
    const tasks = state.tasks.filter(t => t.status === status);
    const list = $(`#${elId}`);
    if (!list) return;
list.innerHTML = tasks.map(t => `
<div class="kanban-card" draggable="true" data-task-id="${t.id}">
<div class="kanban-card-title">${t.title}</div>
<div class="kanban-card-desc">${t.desc}</div>
<div class="kanban-card-footer">
<span class="kanban-card-priority ${t.priority}">${t.priority === 'high' ? 'Alta' : t.priority === 'medium' ? 'Média' : 'Baixa'}</span>
<div class="kanban-move-btns">
<button class="kanban-move-btn" data-task-id="${t.id}" data-dir="left" title="Mover para esquerda"><i class="fas fa-chevron-left"></i></button>
<button class="kanban-move-btn" data-task-id="${t.id}" data-dir="right" title="Mover para direita"><i class="fas fa-chevron-right"></i></button>
</div>
<img class="kanban-card-avatar" src="https://api.dicebear.com/7.x/avataaars/svg?seed=${t.seed}" alt="">
</div>
</div>
`).join('');
    const countEl = $(`#${status}Count`);
    if (countEl) countEl.textContent = tasks.length;

list.querySelectorAll('.kanban-card').forEach(card => {
card.addEventListener('dragstart', e => {
e.dataTransfer.setData('text/plain', card.dataset.taskId);
card.classList.add('dragging');
});
card.addEventListener('dragend', () => card.classList.remove('dragging'));
});
list.querySelectorAll('.kanban-move-btn').forEach(btn => {
btn.addEventListener('click', e => {
e.stopPropagation();
const taskId = parseInt(btn.dataset.taskId);
const dir = btn.dataset.dir;
const stages = ['todo', 'progress', 'review', 'done'];
const task = state.tasks.find(t => t.id === taskId);
if (!task) return;
const curIdx = stages.indexOf(task.status);
const newIdx = dir === 'left' ? curIdx - 1 : curIdx + 1;
if (newIdx < 0 || newIdx >= stages.length) return;
task.status = stages[newIdx];
renderKanban();
saveUserProfile();
toast(`"${task.title}" movido para ${statusLabel(stages[newIdx])}`, 'info');
});
});
  });

  if (!kanbanDragBound) {
    kanbanDragBound = true;
    $$('.kanban-list').forEach(list => {
      list.addEventListener('dragover', e => { e.preventDefault(); list.style.background = 'rgba(0,212,255,0.03)'; });
      list.addEventListener('dragleave', () => { list.style.background = ''; });
      list.addEventListener('drop', e => {
        e.preventDefault();
        list.style.background = '';
        const taskId = parseInt(e.dataTransfer.getData('text/plain'));
        const newStatus = list.closest('.kanban-column').dataset.status;
        const task = state.tasks.find(t => t.id === taskId);
      if (task) {
        task.status = newStatus;
        renderKanban();
        saveUserProfile();
        toast(`"${task.title}" movido para ${statusLabel(newStatus)}`, 'info');
        }
      });
    });
  }
}
    function statusLabel(s) { return { todo: 'A Fazer', progress: 'Em Progresso', review: 'Revisão', done: 'Concluído' }[s] || s; }
    function showNewTaskModal() {
        openModal('Nova Tarefa', `
            <div class="form-group"><label>Título</label><input type="text" class="form-input" id="newTaskTitle" placeholder="Título da tarefa"></div>
            <div class="form-group"><label>Descrição</label><input type="text" class="form-input" id="newTaskDesc" placeholder="Descrição breve"></div>
            <div class="form-group"><label>Prioridade</label><select class="form-input" id="newTaskPriority"><option value="high">Alta</option><option value="medium">Média</option><option value="low">Baixa</option></select></div>
        `, () => {
            const title = $('#newTaskTitle').value.trim();
            const desc = $('#newTaskDesc').value.trim();
            const priority = $('#newTaskPriority').value;
            if (!title) { toast('Informe o título da tarefa', 'error'); return; }
            state.nextId++;
  state.tasks.push({ id: state.nextId, title, desc: desc || 'Sem descrição', priority, status: 'todo', seed: 'new' + state.nextId });
  renderKanban(); updateBadges(); saveUserProfile();
  toast(`Tarefa "${title}" criada`, 'success');
        });
    }

    // TEAM
    function renderTeam() {
  $('#teamGrid').innerHTML = state.team.map((m, i) => `
    <div class="team-card">
      <div class="team-avatar">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${m.seed}" alt="">
        <div class="team-avatar-status ${m.status}"></div>
      </div>
      <div class="team-name">${m.name}</div>
      <div class="team-role">${m.role}</div>
      <div class="team-stats">
        <div class="team-stat"><span class="team-stat-value">${m.tasks}</span><span class="team-stat-label">Tarefas</span></div>
        <div class="team-stat"><span class="team-stat-value">${m.projects}</span><span class="team-stat-label">Projetos</span></div>
      </div>
      <div class="team-actions">
        <button class="action-btn team-edit-btn" style="width:30px;height:30px;font-size:0.7rem" data-idx="${i}"><i class="fas fa-pen"></i></button>
        <button class="action-btn team-chat-btn" style="width:30px;height:30px;font-size:0.7rem" data-idx="${i}"><i class="fas fa-message"></i></button>
      </div>
    </div>
  `).join('');
  $$('.team-edit-btn').forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    const m = state.team[parseInt(btn.dataset.idx)];
    openModal('Editar Membro', `
      <div class="form-group"><label>Nome</label><input type="text" class="form-input" id="editMemberName" value="${m.name}"></div>
      <div class="form-group"><label>Cargo</label><input type="text" class="form-input" id="editMemberRole" value="${m.role}"></div>
    `, () => {
      m.name = $('#editMemberName').value.trim() || m.name;
      m.role = $('#editMemberRole').value.trim() || m.role;
      renderTeam();
      toast(`Membro ${m.name} atualizado`, 'success');
    });
  }));
  $$('.team-chat-btn').forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    const m = state.team[parseInt(btn.dataset.idx)];
    openChat(m.name, m.seed);
  }));
    }

    // CALENDAR
    function renderCalendar() {
        const now = new Date();
        const month = state.calMonth;
        const year = state.calYear;
        const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        $('#calMonthYear').textContent = `${months[month]} ${year}`;

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const daysInPrevMonth = new Date(year, month, 0).getDate();

        let html = '';
        const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        dayNames.forEach(d => { html += `<div class="cal-header">${d}</div>`; });

        const eventDays = state.events.map(e => e.date);

        for (let i = 0; i < firstDay; i++) {
            html += `<div class="cal-day other-month">${daysInPrevMonth - firstDay + 1 + i}</div>`;
        }
        for (let d = 1; d <= daysInMonth; d++) {
            const isToday = d === now.getDate() && month === now.getMonth() && year === now.getFullYear();
            const hasEvent = eventDays.includes(d);
            html += `<div class="cal-day${isToday ? ' today' : ''}${hasEvent ? ' has-event' : ''}">${d}</div>`;
        }
        const remaining = 42 - (firstDay + daysInMonth);
        for (let i = 1; i <= remaining; i++) {
            html += `<div class="cal-day other-month">${i}</div>`;
        }
        $('#calendarGrid').innerHTML = html;

        const filtered = state.events.filter(e => e.date >= now.getDate() || month !== now.getMonth()).slice(0, 5);
        $('#eventsList').innerHTML = filtered.map(e => `
            <div class="event-item">
                <div class="event-dot ${e.color}"></div>
                <div class="event-info"><div class="event-title">${e.title}</div><div class="event-time-label">${e.time} — Dia ${e.date}</div></div>
            </div>
        `).join('');
    }
    function initCalendar() {
        $('#calPrev').addEventListener('click', () => { state.calMonth--; if (state.calMonth < 0) { state.calMonth = 11; state.calYear--; } renderCalendar(); });
        $('#calNext').addEventListener('click', () => { state.calMonth++; if (state.calMonth > 11) { state.calMonth = 0; state.calYear++; } renderCalendar(); });
        $('#newEventBtn').addEventListener('click', () => {
            openModal('Novo Evento', `
                <div class="form-group"><label>Título</label><input type="text" class="form-input" id="newEventTitle" placeholder="Nome do evento"></div>
                <div class="form-group"><label>Horário</label><input type="text" class="form-input" id="newEventTime" placeholder="10:00 - 11:00"></div>
                <div class="form-group"><label>Dia</label><input type="number" class="form-input" id="newEventDay" min="1" max="31" value="${new Date().getDate() + 1}"></div>
            `, () => {
                const title = $('#newEventTitle').value.trim();
                const time = $('#newEventTime').value.trim();
                const date = parseInt($('#newEventDay').value);
                if (!title) { toast('Informe o título do evento', 'error'); return; }
                const colors = ['cyan', 'purple', 'green', 'orange', 'red'];
                state.events.push({ title, time: time || 'A definir', date, color: colors[Math.floor(Math.random() * colors.length)] });
                renderCalendar();
                toast(`Evento "${title}" criado`, 'success');
            });
        });
    }

    // SECURITY
    function renderSecurity() {
        $('#sessionList').innerHTML = state.sessions.map(s => `
            <div class="session-item">
                <div class="session-icon"><i class="fas ${s.icon}"></i></div>
                <div class="session-info"><div class="session-device">${s.device}</div><div class="session-meta">${s.ip} — ${s.time}</div></div>
                ${s.current ? '<span class="session-current">ATUAL</span>' : '<button class="btn btn-danger btn-sm" onclick="document.dispatchEvent(new CustomEvent(\'revokeSession\'))">Revogar</button>'}
            </div>
        `).join('');
        $('#securityLogs').innerHTML = state.securityLogs.map(l => `
            <div class="sec-log-item">
                <div class="sec-log-dot ${l.type}"></div>
                <span class="sec-log-text">${l.text}</span>
                <span class="sec-log-time">${l.time}</span>
            </div>
        `).join('');
    }

    // SERVER METRICS
let metricCache = null;
function updateServerMetrics() {
  if (!metricCache) {
    metricCache = [];
    $$('.metric-fill').forEach(fill => {
      metricCache.push({ fill, valueEl: fill.closest('.metric').querySelector('.metric-value') });
    });
  }
  metricCache.forEach(({ fill, valueEl }) => {
    const current = parseInt(fill.style.getPropertyValue('--fill'));
    const variation = Math.floor(Math.random() * 7) - 3;
    const newVal = Math.max(10, Math.min(95, current + variation));
    fill.style.setProperty('--fill', newVal + '%');
    valueEl.textContent = newVal + '%';
  });
}

    // LOGS
    function addLogEntry() {
        const terminal = $('#systemLogs');
        if (!terminal) return;
        const msgs = [
            { level: 'INFO', text: 'Health check OK — Todos os serviços operacionais', color: 'log-info' },
            { level: 'INFO', text: 'Conexão estabelecida — Cliente ID #' + Math.floor(Math.random() * 9999), color: 'log-info' },
            { level: 'WARN', text: 'Latência elevada detectada — ' + (50 + Math.floor(Math.random() * 200)) + 'ms', color: 'log-warn' },
            { level: 'INFO', text: 'Cache invalidado — Região: user_sessions', color: 'log-info' },
            { level: 'ERROR', text: 'Timeout na conexão com banco — Retry #' + Math.floor(Math.random() * 5 + 1), color: 'log-error' },
            { level: 'INFO', text: 'Request processado — ' + (10 + Math.floor(Math.random() * 90)) + 'ms', color: 'log-info' },
            { level: 'WARN', text: 'Memória acima de 75% — Servidor ' + (Math.random() > 0.5 ? '2' : '3'), color: 'log-warn' },
        ];
        const msg = msgs[Math.floor(Math.random() * msgs.length)];
        const ts = new Date().toISOString().replace('T', ' ').substring(0, 19);
  const line = document.createElement('div');
  line.className = 'terminal-line';
  line.innerHTML = `<span class="log-time">[${ts}]</span> <span class="${msg.color}">${msg.level}</span> ${msg.text}`;
  terminal.appendChild(line);
  terminal.scrollTop = terminal.scrollHeight;
        while (terminal.children.length > 50) terminal.removeChild(terminal.firstChild);
    }

    function initLogs() {
        $('#clearLogsBtn').addEventListener('click', () => {
            $('#systemLogs').innerHTML = '';
            toast('Logs limpos', 'info');
        });
        $('#exportLogsBtn').addEventListener('click', () => {
            const text = [...$$('#systemLogs .terminal-line')].map(l => l.textContent).join('\n');
            const blob = new Blob([text], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url; a.download = 'nexus-logs.txt'; a.click();
            URL.revokeObjectURL(url);
            toast('Logs exportados com sucesso', 'success');
        });
        $('#logFilterSelect').addEventListener('change', e => {
            const filter = e.target.value;
            $$('#systemLogs .terminal-line').forEach(line => {
                if (filter === 'all') { line.style.display = ''; return; }
                const hasClass = line.querySelector(`.log-${filter}`);
                line.style.display = hasClass ? '' : 'none';
            });
        });
        $('#logFilterInput').addEventListener('input', e => {
            const q = e.target.value.toLowerCase();
            $$('#systemLogs .terminal-line').forEach(line => {
                line.style.display = line.textContent.toLowerCase().includes(q) ? '' : 'none';
            });
        });
    }

    function updateStatsForPeriod(period) {
const p = charts._periods[period];
if (!p) return;
const d = p.dash;
if (d) {
const rEl = $('#dashReceita'); if (rEl) rEl.textContent = 'R$ ' + Number(d.receita).toLocaleString('pt-BR');
const uEl = $('#dashUsuarios'); if (uEl) uEl.textContent = Number(d.usuarios).toLocaleString('pt-BR');
const pEl = $('#dashPedidos'); if (pEl) pEl.textContent = Number(d.pedidos).toLocaleString('pt-BR');
const cEl = $('#dashConversao'); if (cEl) cEl.textContent = d.conversao;
const rc = $('#dashReceitaChange'); if (rc) { rc.className = 'stat-change ' + d.receitaDir; rc.innerHTML = `<i class="fas fa-arrow-${d.receitaDir === 'positive' ? 'up' : 'down'}"></i> ${d.receitaChange}`; }
const uc = $('#dashUsuariosChange'); if (uc) { uc.className = 'stat-change ' + d.usuariosDir; uc.innerHTML = `<i class="fas fa-arrow-${d.usuariosDir === 'positive' ? 'up' : 'down'}"></i> ${d.usuariosChange}`; }
const pc = $('#dashPedidosChange'); if (pc) { pc.className = 'stat-change ' + d.pedidosDir; pc.innerHTML = `<i class="fas fa-arrow-${d.pedidosDir === 'positive' ? 'up' : 'down'}"></i> ${d.pedidosChange}`; }
const cc = $('#dashConversaoChange'); if (cc) { cc.className = 'stat-change ' + d.conversaoDir; cc.innerHTML = `<i class="fas fa-arrow-${d.conversaoDir === 'positive' ? 'up' : 'down'}"></i> ${d.conversaoChange}`; }
}
const a = p.analytics;
if (a) {
const pv = $('#anPageviews'); if (pv) pv.textContent = a.pageviews;
const tm = $('#anTempoMedio'); if (tm) tm.textContent = a.tempoMedio;
const br = $('#anBounce'); if (br) br.textContent = a.bounce;
const rt = $('#anRetencao'); if (rt) rt.textContent = a.retencao;
const pvc = $('#anPageviewsChange'); if (pvc) { pvc.className = 'stat-change ' + a.pageviewsDir; pvc.innerHTML = `<i class="fas fa-arrow-${a.pageviewsDir === 'positive' ? 'up' : 'down'}"></i> ${a.pageviewsChange}`; }
const tmc = $('#anTempoMedioChange'); if (tmc) { tmc.className = 'stat-change ' + a.tempoMedioDir; tmc.innerHTML = `<i class="fas fa-arrow-${a.tempoMedioDir === 'positive' ? 'up' : 'down'}"></i> ${a.tempoMedioChange}`; }
const brc = $('#anBounceChange'); if (brc) { brc.className = 'stat-change ' + a.bounceDir; brc.innerHTML = `<i class="fas fa-arrow-${a.bounceDir === 'positive' ? 'up' : 'down'}"></i> ${a.bounceChange}`; }
const rtc = $('#anRetencaoChange'); if (rtc) { rtc.className = 'stat-change ' + a.retencaoDir; rtc.innerHTML = `<i class="fas fa-arrow-${a.retencaoDir === 'positive' ? 'up' : 'down'}"></i> ${a.retencaoChange}`; }
}
const t = p.trans;
if (t) {
const tt = $('#transTotal'); if (tt) tt.textContent = Number(t.total).toLocaleString('pt-BR');
const tc = $('#transConcluidas'); if (tc) tc.textContent = Number(t.concluidas).toLocaleString('pt-BR');
const tp = $('#transPendentes'); if (tp) tp.textContent = Number(t.pendentes).toLocaleString('pt-BR');
const tx = $('#transCanceladas'); if (tx) tx.textContent = Number(t.canceladas).toLocaleString('pt-BR');
}
}

// MISC BUTTONS
    function initMiscButtons() {
  $('#exportBtn').addEventListener('click', () => {
    const data = { receita: 284590, usuarios: 8432, pedidos: 1924, conversao: '68.7%' };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'nexus-dashboard-export.json'; a.click();
    URL.revokeObjectURL(url);
    toast('Dados exportados com sucesso', 'success');
  });

$('#periodSelect').addEventListener('change', e => {
const p = charts._periods[e.target.value];
if (p && charts.revenue) {
charts.revenue.data.labels = p.labels;
charts.revenue.data.datasets[0].data = p.rev;
charts.revenue.data.datasets[1].data = p.exp;
charts.revenue.update('active');
updateStatsForPeriod(e.target.value);
toast(`Período atualizado: ${e.target.selectedOptions[0].textContent}`, 'info');
}
});

        $('#viewAllTransBtn').addEventListener('click', () => navigateTo('transacoes'));

        $('#saveProfileBtn').addEventListener('click', () => {
    const name = $('#configName').value.trim();
    const email = $('#configEmail').value.trim();
    if (name) {
      $('.user-name').textContent = name;
      $('.user-role').textContent = email || 'Admin';
    }
    toast('Perfil atualizado com sucesso', 'success');
  });
        $('#saveSecurityBtn').addEventListener('click', () => toast('Configurações de segurança salvas', 'success'));

  const toggle2FA = $('#toggle2FA');
  if (toggle2FA && state.currentUser) {
    toggle2FA.checked = !!state.currentUser.twoFa;
    toggle2FA.addEventListener('change', async () => {
      state.currentUser.twoFa = toggle2FA.checked;
      const u = state.authUsers.find(u => u.email === state.currentUser.email);
      if (u) { u.twoFa = toggle2FA.checked; await saveUsers(); }
      toast(toggle2FA.checked ? '2FA ativado — na próxima login será solicitado o código' : '2FA desativado', toggle2FA.checked ? 'success' : 'warning');
    });
  }

        $('#newProjectBtn').addEventListener('click', showNewProjectModal);
        $('#newTaskBtn').addEventListener('click', showNewTaskModal);
        $('#newMemberBtn').addEventListener('click', () => toast('Convite enviado com sucesso', 'success'));

        document.addEventListener('revokeSession', () => {
            state.sessions = state.sessions.filter(s => s.current);
            renderSecurity();
            toast('Sessão revogada', 'warning');
        });
    }

// INIT
async function initAuth() {
  const authScreen = $('#authScreen');
  const appContainer = $('#appContainer');
  const loginForm = $('#loginForm');
  const signupForm = $('#signupForm');
  const tabs = $$('.auth-tab');
  const signupPw = $('#signupPassword');
  const strengthFill = $('#pwStrengthFill');
  const strengthLabel = $('#pwStrengthLabel');

  let twoFaCode = '';
  let twoFaTimer = null;
  let twoFaSeconds = 300;
  let pendingLoginUser = null;

  state.authUsers = await db.getAllUsers();
  if (state.authUsers.length === 0) {
    const defaultPw = await crypto.hashPw('admin123');
    state.authUsers.push({ name: 'Admin Nexus', email: 'admin@nexus.io', password: defaultPw, twoFa: false, profile: { tasks: [], transactions: [], projects: [] } });
    await db.saveAllUsers(state.authUsers);
  }

  if (db.needsWeeklyReset()) { db.doWeeklyReset(); }

  async function verifyPw(inputPw, storedHash) {
    if (storedHash.length !== 64) {
      const h = await crypto.hashPw(storedHash);
      if (h.length === 64) { const u = state.authUsers.find(u => u.password === storedHash); if (u) { u.password = h; saveUsers(); } return inputPw === storedHash; }
      return inputPw === storedHash;
    }
    return (await crypto.hashPw(inputPw)) === storedHash;
  }

  function showApp(demoMode) {
    if (demoMode) {
      state.currentUser = { name: 'Usuário Demo', email: 'demo@nexus.io', demo: true, twoFa: false, profile: { tasks: [], transactions: [], projects: [] } };
    }
    authScreen.classList.add('hidden');
    appContainer.style.display = '';
    document.body.style.overflow = 'hidden';
    if (state.currentUser) {
      const nameEl = $('#sidebarUserName');
      if (nameEl) nameEl.textContent = state.currentUser.name;
      const avatarEl = $('#sidebarAvatar');
      if (avatarEl) avatarEl.src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + encodeURIComponent(state.currentUser.name.split(' ')[0]);
      const roleEl = $('.user-role');
      if (roleEl) roleEl.textContent = state.currentUser.demo ? 'Demonstração' : (state.currentUser.email === 'admin@nexus.io' ? 'Super Admin' : 'Membro');
      loadUserProfile();
      const navUsuarios = $('#navUsuarios');
      if (navUsuarios) {
        const isAdmin = state.currentUser.email === 'admin@nexus.io' || state.currentUser.demo;
        navUsuarios.style.display = isAdmin ? '' : 'none';
      }
    }
    initDashboard();
  }

  async function saveUsers() { await db.saveAllUsers(state.authUsers); }

  function generateCode() {
    return String(Math.floor(100000 + Math.random() * 900000));
  }

  function openOverlay(id) { $(id).classList.add('visible'); }
  function closeOverlay(id) { $(id).classList.remove('visible'); }

  function startTwoFaTimer() {
    twoFaSeconds = 300;
    clearInterval(twoFaTimer);
    updateCountdown();
    twoFaTimer = setInterval(() => {
      twoFaSeconds--;
      updateCountdown();
      if (twoFaSeconds <= 0) { clearInterval(twoFaTimer); toast('Código expirado', 'error'); closeOverlay('#twoFaOverlay'); }
    }, 1000);
  }

  function updateCountdown() {
    const m = String(Math.floor(twoFaSeconds / 60)).padStart(2, '0');
    const s = String(twoFaSeconds % 60).padStart(2, '0');
    const el = $('#twoFaCountdown');
    if (el) el.textContent = m + ':' + s;
  }

  function sendTwoFaCode(user) {
    twoFaCode = generateCode();
    pendingLoginUser = user;
    const maskedEmail = user.email.replace(/(.{2})(.*)(@.*)/, '$1***$3');
    $('#twoFaEmail').textContent = maskedEmail;
    $('#twoFaEmailUserName').textContent = user.name.split(' ')[0];
    $('#twoFaEmailCode').textContent = twoFaCode;
    $$('.twoFa-digit').forEach(d => { d.value = ''; });
    $('#twoFaVerify').disabled = true;
    openOverlay('#twoFaOverlay');
    startTwoFaTimer();
    setTimeout(() => openOverlay('#twoFaEmailPreview'), 300);
  }

  function verifyTwoFa() {
    const entered = $$('.twoFa-digit').map(d => d.value).join('');
    if (entered.length !== 6) { toast('Digite o código completo', 'error'); return; }
    if (entered !== twoFaCode) { toast('Código incorreto', 'error'); $$('.twoFa-digit').forEach(d => { d.value = ''; d.focus(); }); $$('.twoFa-digit')[0].focus(); return; }
    clearInterval(twoFaTimer);
    closeOverlay('#twoFaOverlay');
    closeOverlay('#twoFaEmailPreview');
    state.currentUser = pendingLoginUser;
    localStorage.setItem('nexus_session', pendingLoginUser.email);
    toast('Verificação concluída! Bem-vindo, ' + pendingLoginUser.name.split(' ')[0] + '!', 'success');
    showApp();
  }

  const saved = localStorage.getItem('nexus_session');
  if (saved) {
    const u = state.authUsers.find(u => u.email === saved);
    if (u) { state.currentUser = u; showApp(); return; }
  }

  tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const isLogin = tab.dataset.tab === 'login';
    loginForm.style.display = isLogin ? '' : 'none';
    signupForm.style.display = isLogin ? 'none' : '';
  }));

  $$('.auth-toggle-pw').forEach(btn => {
    btn.addEventListener('mousedown', e => { e.preventDefault(); e.stopPropagation(); });
    btn.addEventListener('click', e => {
      e.preventDefault(); e.stopPropagation();
      const input = $('#' + btn.dataset.target);
      if (!input) return;
      const icon = btn.querySelector('i');
      if (input.type === 'password') { input.type = 'text'; if (icon) icon.className = 'fas fa-eye-slash'; }
      else { input.type = 'password'; if (icon) icon.className = 'fas fa-eye'; }
    });
  });

  if (signupPw) signupPw.addEventListener('input', () => {
    const v = signupPw.value;
    let score = 0;
    if (v.length >= 6) score++;
    if (v.length >= 10) score++;
    if (/[A-Z]/.test(v)) score++;
    if (/[0-9]/.test(v)) score++;
    if (/[^A-Za-z0-9]/.test(v)) score++;
    const pct = (score / 5) * 100;
    const colors = ['#ef4444', '#f59e0b', '#eab308', '#10b981', '#00d4ff'];
    const labels = ['Muito fraca', 'Fraca', 'Razoável', 'Forte', 'Muito forte'];
    strengthFill.style.width = pct + '%';
    strengthFill.style.background = colors[Math.max(0, score - 1)] || '#ef4444';
    strengthLabel.textContent = v.length === 0 ? 'Força da senha' : labels[Math.max(0, score - 1)] || '';
    strengthLabel.style.color = v.length === 0 ? '' : colors[Math.max(0, score - 1)];
  });

  // 2FA digit input auto-advance
  $$('.twoFa-digit').forEach((inp, i, all) => {
    inp.addEventListener('input', () => {
      if (inp.value.length === 1 && i < all.length - 1) all[i + 1].focus();
      const full = all.map(d => d.value).join('');
      const verifyBtn = $('#twoFaVerify');
      verifyBtn.disabled = full.length !== 6;
    });
    inp.addEventListener('keydown', e => {
      if (e.key === 'Backspace' && !inp.value && i > 0) { all[i - 1].focus(); all[i - 1].value = ''; }
      if (e.key === 'Enter') verifyTwoFa();
    });
    inp.addEventListener('paste', e => {
      e.preventDefault();
      const paste = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '').slice(0, 6);
      paste.split('').forEach((ch, j) => { if (all[j]) all[j].value = ch; });
      if (paste.length > 0) all[Math.min(paste.length, all.length) - 1].focus();
      const full = all.map(d => d.value).join('');
      $('#twoFaVerify').disabled = full.length !== 6;
    });
  });

  // LOGIN
  loginForm.addEventListener('submit', async e => {
    e.preventDefault();
    const email = $('#loginEmail').value.trim();
    const pw = $('#loginPassword').value;
    const user = state.authUsers.find(u => u.email === email);
    if (!user || !(await verifyPw(pw, user.password))) { toast('Email ou senha incorretos', 'error'); return; }
    if (user.twoFa) { sendTwoFaCode(user); }
    else { state.currentUser = user; localStorage.setItem('nexus_session', email); toast('Bem-vindo de volta, ' + user.name.split(' ')[0] + '!', 'success'); showApp(); }
  });

  // 2FA verify
  $('#twoFaVerify').addEventListener('click', verifyTwoFa);
  $('#twoFaResend').addEventListener('click', e => { e.preventDefault(); if (pendingLoginUser) { sendTwoFaCode(pendingLoginUser); toast('Código reenviado', 'success'); } });
  $('#twoFaClose').addEventListener('click', () => { closeOverlay('#twoFaOverlay'); clearInterval(twoFaTimer); });
  $('#twoFaEmailClose').addEventListener('click', () => closeOverlay('#twoFaEmailPreview'));
  $('#twoFaEmailPreview').addEventListener('click', e => { if (e.target.id === 'twoFaEmailPreview') closeOverlay('#twoFaEmailPreview'); });

  // SIGNUP
  signupForm.addEventListener('submit', async e => {
    e.preventDefault();
    const name = $('#signupName').value.trim();
    const email = $('#signupEmail').value.trim();
    const pw = $('#signupPassword').value;
    const confirm = $('#signupConfirm').value;
    if (pw !== confirm) { toast('As senhas não coincidem', 'error'); return; }
    if (pw.length < 6) { toast('A senha deve ter pelo menos 6 caracteres', 'error'); return; }
    if (state.authUsers.find(u => u.email === email)) { toast('Este email já está cadastrado', 'error'); return; }
    const hashedPw = await crypto.hashPw(pw);
    const newUser = { name, email, password: hashedPw, twoFa: false, profile: { tasks: [], transactions: [], projects: [] } };
    state.authUsers.push(newUser);
    await saveUsers();
    state.currentUser = newUser;
    localStorage.setItem('nexus_session', email);
    toast('Conta criada com sucesso!', 'success');
    showApp();
    $('#emailUserName').textContent = name.split(' ')[0];
    setTimeout(() => openOverlay('#emailPreviewOverlay'), 400);
  });

  // WELCOME EMAIL PREVIEW
  $('#emailPreviewClose').addEventListener('click', () => closeOverlay('#emailPreviewOverlay'));
  $('#emailCtaBtn').addEventListener('click', () => closeOverlay('#emailPreviewOverlay'));
  $('#emailPreviewOverlay').addEventListener('click', e => { if (e.target.id === 'emailPreviewOverlay') closeOverlay('#emailPreviewOverlay'); });

  // FORGOT PASSWORD
  $('#forgotPwLink').addEventListener('click', e => { e.preventDefault(); openOverlay('#forgotPwOverlay'); });
  $('#forgotPwClose').addEventListener('click', () => closeOverlay('#forgotPwOverlay'));
  $('#forgotPwForm').addEventListener('submit', e => {
    e.preventDefault();
    const email = $('#forgotPwEmail').value.trim();
    const user = state.authUsers.find(u => u.email === email);
    if (!user) { toast('Email não encontrado', 'error'); return; }
    localStorage.setItem('nexus_reset_email', email);
    $('#resetEmailUserName').textContent = user.name.split(' ')[0];
    $('#forgotPwForm').style.display = 'none';
    $('#forgotSent').style.display = '';
    toast('Link de redefinição enviado para ' + email, 'success');
    setTimeout(() => openOverlay('#resetEmailPreview'), 400);
  });
  $('#forgotBackBtn').addEventListener('click', () => { closeOverlay('#forgotPwOverlay'); $('#forgotPwForm').style.display = ''; $('#forgotSent').style.display = 'none'; });
  $('#resetEmailClose').addEventListener('click', () => closeOverlay('#resetEmailPreview'));
  $('#resetEmailCta').addEventListener('click', () => { closeOverlay('#resetEmailPreview'); closeOverlay('#forgotPwOverlay'); openOverlay('#resetPwOverlay'); });
  $('#resetEmailPreview').addEventListener('click', e => { if (e.target.id === 'resetEmailPreview') closeOverlay('#resetEmailPreview'); });

  // RESET PASSWORD
  $('#resetPwClose').addEventListener('click', () => closeOverlay('#resetPwOverlay'));
  $('#resetPwForm').addEventListener('submit', async e => {
    e.preventDefault();
    const newPw = $('#resetPwNew').value;
    const confirmPw = $('#resetPwConfirm').value;
    if (newPw.length < 6) { toast('A senha deve ter pelo menos 6 caracteres', 'error'); return; }
    if (newPw !== confirmPw) { toast('As senhas não coincidem', 'error'); return; }
    const email = localStorage.getItem('nexus_reset_email');
    const user = state.authUsers.find(u => u.email === email);
    if (!user) { toast('Conta não encontrada', 'error'); return; }
    const newHash = await crypto.hashPw(newPw);
    if (newHash === user.password) { toast('A nova senha deve ser diferente da anterior', 'error'); return; }
    user.password = newHash;
    await saveUsers();
    localStorage.removeItem('nexus_reset_email');
    closeOverlay('#resetPwOverlay');
    toast('Senha redefinida com sucesso! Faça login com sua nova senha.', 'success');
    $('#forgotPwForm').style.display = '';
    $('#forgotSent').style.display = 'none';
  });

  // TERMS & PRIVACY
  $('#termsLink').addEventListener('click', e => { e.preventDefault(); openOverlay('#termsOverlay'); });
  $('#termsClose').addEventListener('click', () => closeOverlay('#termsOverlay'));
  $('#termsOverlay').addEventListener('click', e => { if (e.target.id === 'termsOverlay') closeOverlay('#termsOverlay'); });
  $('#privacyLink').addEventListener('click', e => { e.preventDefault(); openOverlay('#privacyOverlay'); });
  $('#privacyClose').addEventListener('click', () => closeOverlay('#privacyOverlay'));
  $('#privacyOverlay').addEventListener('click', e => { if (e.target.id === 'privacyOverlay') closeOverlay('#privacyOverlay'); });

  // DEMO
  $('#authDemoBtn').addEventListener('click', () => { toast('Modo demonstração ativado', 'info'); showApp(true); });
}

function initDashboard() {
  const banner = $('#weeklyResetBanner');
  const bannerDismiss = $('#bannerDismiss');
  if (banner && bannerDismiss) {
    if (localStorage.getItem('nexus_banner_dismissed')) banner.classList.add('hidden');
    bannerDismiss.addEventListener('click', () => { banner.classList.add('hidden'); localStorage.setItem('nexus_banner_dismissed', '1'); });
  }
  initParticles();
        updateClock();
        setInterval(updateClock, 1000);
        animateCounters();
        initSparklines();
        initCharts();
        initNavigation();
        initSidebar();
        initUserDropdown();
        initNotifications();
        initMessages();
        initCommandPalette();
        initModal();
        initFullscreen();
        initTheme();
        initUsersPage();
        initTransactions();
        initCalendar();
        initLogs();
        initMiscButtons();
        renderUsers();
  updateBadges();
  setInterval(updateServerMetrics, 5000);
  setInterval(addLogEntry, 8000);
    }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initAuth);
  else initAuth();
})();
