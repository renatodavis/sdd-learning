const phases = [
  { command: 'specify init', title: 'Preparar o workspace', section: 'seção 01', body: 'Instale o Spec Kit, escolha o agente e gere os arquivos base para trabalhar com SDD desde o primeiro commit.', icon: '⌁', tone: 'violet', side: 'right' },
  { command: '/speckit.constitution', title: 'Definir princípios', section: 'seção 01', body: 'Registre regras de qualidade, segurança, UX, testes e padrões técnicos que guiam todas as próximas decisões.', icon: '◈', tone: 'blue', side: 'left' },
  { command: '/speckit.specify', title: 'Especificar o que e por quê', section: 'seção 02', body: 'Transforme uma ideia em requisitos claros, fluxos de usuário, critérios de aceite e limites de escopo.', icon: '✦', tone: 'cyan', side: 'right' },
  { command: '/speckit.clarify', title: 'Eliminar ambiguidades', section: 'seção 02', body: 'Use perguntas estruturadas para resolver lacunas antes que elas virem retrabalho durante a implementação.', icon: '?', tone: 'teal', side: 'left' },
  { command: '/speckit.plan', title: 'Planejar a solução técnica', section: 'seção 03', body: 'Conecte requisitos a arquitetura, stack, contratos, modelo de dados, riscos e estratégia de validação.', icon: '▣', tone: 'indigo', side: 'right' },
  { command: '/speckit.tasks', title: 'Quebrar em tarefas executáveis', section: 'seção 03', body: 'Gere uma lista sequenciada, paralelizável e verificável para implementar a feature com rastreabilidade.', icon: '✓', tone: 'sky', side: 'left' },
  { command: '/speckit.analyze', title: 'Auditar consistência', section: 'seção 04', body: 'Compare spec, plano e tarefas para encontrar contradições, requisitos órfãos ou decisões sem justificativa.', icon: '◎', tone: 'emerald', side: 'right' },
  { command: '/speckit.implement', title: 'Implementar e concluir', section: 'seção 04', body: 'Execute as tarefas, valide os critérios de aceite e entregue código alinhado ao que foi especificado.', icon: '↗', tone: 'purple', side: 'left' },
];

const navItems = ['Visão', 'Fundamentos', 'Fluxo', 'Spec Kit', 'Comandos', 'Práticas'];
const commands = [
  ['constitution', 'Cria ou atualiza as regras permanentes do projeto.'],
  ['specify', 'Converte a intenção em spec.md com cenários e critérios.'],
  ['clarify', 'Faz perguntas para reduzir incertezas importantes.'],
  ['plan', 'Produz plan.md com stack, arquitetura e checkpoints.'],
  ['tasks', 'Gera tasks.md em ordem de execução verificável.'],
  ['analyze', 'Verifica divergências entre artefatos antes de codar.'],
  ['implement', 'Executa a lista de tarefas orientada pelos artefatos.'],
];

const practices = [
  ['👥', 'Revisão humana', 'Aprove cada artefato antes de avançar para manter produto, engenharia e IA alinhados.'],
  ['✅', 'Critérios testáveis', 'Escreva sucesso e falha de forma mensurável para facilitar validação automatizada e manual.'],
  ['🧩', 'Escopo pequeno', 'Prefira features finas; specs menores são mais fáceis de revisar, corrigir e implementar.'],
  ['🔗', 'Rastreabilidade', 'Conecte requisitos, plano, tarefas, commits e testes para saber por que cada linha existe.'],
];

const artifacts = [
  ['constitution.md', 'Princípios permanentes', '📜'],
  ['spec.md', 'Requisitos e cenários', '📄'],
  ['plan.md', 'Desenho técnico', '🧭'],
  ['tasks.md', 'Execução passo a passo', '☑️'],
];

let activePhase = 2;
const root = document.getElementById('root');

function icon(symbol, className = '') {
  return `<span class="icon ${className}" aria-hidden="true">${symbol}</span>`;
}

function render() {
  const phase = phases[activePhase];
  const progress = Math.round(((activePhase + 1) / phases.length) * 100);
  root.innerHTML = `
    <main>
      <header class="topbar">
        <a class="brand" href="#visao"><span class="brand-mark">◇</span> sdd<span>learning</span></a>
        <nav>${navItems.map((item) => `<a href="#${item.toLowerCase().replace(' ', '-')}">${item}</a>`).join('')}</nav>
        <a class="top-cta" href="#fluxo">Iniciar trilha <span>→</span></a>
      </header>

      <section class="hero" id="visao">
        <div class="hero-orb orb-a"></div><div class="hero-orb orb-b"></div>
        <p class="eyebrow">${icon('✦')} trilha interativa de aprendizagem</p>
        <h1>SDD Learning para dominar <span>Spec-Driven Development</span></h1>
        <p class="hero-copy">Uma plataforma visual, linear e prática para aprender a usar o GitHub Spec Kit em projetos reais: da ideia ao código validado, com checkpoints humanos em cada fase.</p>
        <div class="hero-actions">
          <a class="primary-action" href="#fluxo">Iniciar trilha <span>→</span></a>
          <a class="secondary-action" href="https://github.com/github/spec-kit" target="_blank" rel="noreferrer">${icon('◉')} Ver Spec Kit</a>
        </div>
        <div class="hero-dashboard" aria-label="Resumo visual da jornada SDD">
          <div class="dashboard-card main-card">
            <div class="card-topline">${icon('🤖')} agente guiado por especificações</div>
            <h2>Transforme intenção em software auditável</h2>
            <div class="progress-shell"><span style="width:${progress}%"></span></div>
            <p>${progress}% da jornada demonstrada na etapa selecionada.</p>
          </div>
          <div class="floating-card code-card">${icon('▸')} <code>/speckit.specify</code></div>
          <div class="floating-card done-card">${icon('✓')} Done só depois de validar</div>
        </div>
      </section>

      <section class="foundation" id="fundamentos">
        ${sectionIntro('fundamentos', 'O que muda com SDD?', 'Em vez de pedir código diretamente, você cria artefatos vivos que descrevem comportamento, decisões e execução. O código passa a ser a consequência de uma especificação bem revisada.')}
        <div class="principle-grid">
          ${principle('✦', 'Spec antes do código', 'Comece pelo problema, usuários, regras e critérios de aceite; só depois escolha a implementação.')}
          ${principle('◈', 'Constituição do projeto', 'Declare padrões não negociáveis para orientar o agente e reduzir decisões inconsistentes.')}
          ${principle('◎', 'Auditoria contínua', 'Cada fase produz documentos revisáveis, comparáveis e úteis para onboarding e manutenção.')}
        </div>
      </section>

      <section class="journey" id="fluxo">
        ${sectionIntro('fluxo SDD', 'A jornada do Spec Kit do onboarding ao Done', 'Siga a linha central: cada cartão representa uma decisão ou artefato necessário para avançar com confiança.')}
        <div class="timeline">
          ${phases.map((item, index) => timelineItem(item, index)).join('')}
        </div>
      </section>

      <section class="playground" id="spec-kit">
        <div class="playground-panel">
          <div>
            <p class="eyebrow">${icon('▶')} etapa selecionada</p>
            <h2>${phase.title}</h2>
            <p>${phase.body}</p>
            <div class="terminal-line"><span>$</span> ${phase.command}</div>
          </div>
          <div class="phase-visual ${phase.tone}">
            <span>${phase.icon}</span>
            <strong>${String(activePhase + 1).padStart(2, '0')}</strong>
          </div>
        </div>
        <div class="artifact-grid">
          ${artifacts.map(([name, purpose, mark]) => `<article class="artifact-card"><span class="artifact-icon">${mark}</span><strong>${name}</strong><span>${purpose}</span></article>`).join('')}
        </div>
      </section>

      <section class="commands" id="comandos">
        ${sectionIntro('comandos', 'Mapa rápido dos comandos', 'Use esta sequência como checklist para começar um projeto com SDD e manter o agente trabalhando com contexto explícito.')}
        <div class="command-list">
          ${commands.map(([command, description], index) => `<article class="command-row"><span class="command-index">${String(index + 1).padStart(2, '0')}</span><code>/speckit.${command}</code><p>${description}</p><span class="chevron">›</span></article>`).join('')}
        </div>
      </section>

      <section class="practices" id="práticas">
        ${sectionIntro('boas práticas', 'Como concluir projetos com menos retrabalho', 'SDD funciona melhor quando a equipe trata cada documento como contrato de colaboração entre pessoas, agentes e código.')}
        <div class="practice-grid">
          ${practices.map(([mark, title, text]) => `<article class="practice-card"><span class="practice-icon">${mark}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}
        </div>
      </section>

      <footer><div class="brand"><span class="brand-mark">◇</span> SDD Learning</div><p>Aprenda, especifique, planeje, implemente e valide com GitHub Spec Kit.</p></footer>
    </main>`;

  document.querySelectorAll('[data-phase]').forEach((button) => {
    button.addEventListener('click', () => {
      activePhase = Number(button.dataset.phase);
      render();
      document.getElementById('spec-kit')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
}

function sectionIntro(label, title, text) {
  return `<div class="section-intro"><p class="eyebrow">${label}</p><h2>${title}</h2><p>${text}</p></div>`;
}

function principle(mark, title, text) {
  return `<article class="principle-card"><span class="principle-icon">${mark}</span><h3>${title}</h3><p>${text}</p></article>`;
}

function timelineItem(phase, index) {
  return `<article class="timeline-item ${phase.side} ${activePhase === index ? 'active' : ''}">
    <button class="timeline-node ${phase.tone}" data-phase="${index}" aria-label="Selecionar etapa ${index + 1}: ${phase.title}">${String(index + 1).padStart(2, '0')}</button>
    <div class="section-chip">${phase.section}</div>
    <button class="phase-card" data-phase="${index}">
      <div class="command-pill">${icon(phase.icon)} ${phase.command}</div>
      <h3>${phase.title}</h3><p>${phase.body}</p>
    </button>
    <span class="bot-icon" aria-hidden="true">🤖</span>
  </article>`;
}

render();
