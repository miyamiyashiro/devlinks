# Revisão responsiva e testes locais

## Alterações
- Fundos mobile claro/escuro exportados dos nós 1:13 e 1:113 do Figma AM65cNyd3YRrl7UyVwfmrX.
- Até 600px, CSS usa os fundos mobile e nome em peso 500; acima, mantém fundos desktop.
- README substituído por instruções reais do projeto e créditos.

## Validação executada
Playwright instalado em pasta auxiliar fora do repositório, executado por Node.js com Chromium headless. Este teste NÃO foi feito via MCP.

- 320x800, 360x800 e 1440x1024, em ambos os temas: seis cenários aprovados.
- Sem rolagem horizontal.
- Quatro links principais e três redes sociais presentes.
- Fotos e ícones carregados; ícones sociais com 40x40px.
- Fundo correto para celular/computador.
- Tema e aria-checked persistem ao recarregar.
- Espaço e Enter alternam o tema; Tab alcança o primeiro link.
- URLs dos quatro botões correspondem às fornecidas pela estudante, com target e rel adequados. Disponibilidade externa dos perfis não foi testada.
- Nenhum erro JavaScript de página capturado.
- Capturas feitas com preferência de movimento reduzido para registrar o botão já na posição final.
- Capturas desktop/mobile examinadas visualmente.
- Lint, build e git diff --check passaram.

Resultados: [playwright-local.json](playwright-local.json).

## Capturas
- [Celular escuro](360-dark.png) / [celular claro](360-light.png)
- [Computador escuro](1440-dark.png) / [computador claro](1440-light.png)
- [Tela estreita escura](320-dark.png) / [tela estreita clara](320-light.png)

## Pendências de entrega
- Conectar e usar Playwright MCP se obrigatório no enunciado; estes testes locais não satisfazem essa evidência específica.
- Confirmar os requisitos de uso/evidência do OpenCode no enunciado. O desenvolvimento registrado aqui usou Codex.
- Enviar commits ao GitHub e confirmar eventual exigência de publicação. Esta etapa não executou push nem deploy.
