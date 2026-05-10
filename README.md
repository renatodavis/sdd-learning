# SDD Learning

SDD Learning é uma landing page educativa, moderna e responsiva para ensinar **Spec-Driven Development (SDD)** usando o [GitHub Spec Kit](https://github.com/github/spec-kit).

A experiência organiza o aprendizado em uma trilha visual, do onboarding até a conclusão do projeto:

1. Preparar o workspace com `specify init`.
2. Definir princípios com `/speckit.constitution`.
3. Especificar requisitos com `/speckit.specify`.
4. Esclarecer ambiguidades com `/speckit.clarify`.
5. Planejar a solução com `/speckit.plan`.
6. Quebrar em tarefas com `/speckit.tasks`.
7. Auditar consistência com `/speckit.analyze`.
8. Implementar com `/speckit.implement`.

## Como executar

```bash
npm install
npm run dev
```

Abra `http://localhost:5173` no navegador.

## Build estático

```bash
npm run build
```

O build copia os arquivos necessários para `dist/`, mantendo o projeto sem dependências de runtime.
