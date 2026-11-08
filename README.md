# DevLinks — Luana M

Página pessoal de links feita com React, JavaScript, Vite e CSS, baseada no exercício DevLinks e personalizada com foto, nome e links de Luana.

## Executar

Use uma versão de Node.js compatível com Vite 8 (ambiente de desenvolvimento: Node 24).

```sh
npm install
npm run dev
```

No PowerShell, se necessário, use `npm.cmd` no lugar de `npm`. Abra o endereço mostrado no terminal.

## Comandos

- `npm run lint`: verifica o código com Oxlint.
- `npm run build`: gera a versão de produção na pasta dist.
- `npm run preview`: abre uma prévia da versão gerada.

## Funcionalidades

- Perfil com foto e nome.
- Tema claro/escuro, salvo no localStorage; foto com óculos no modo claro.
- Quatro links pessoais e ícones de GitHub, Instagram e LinkedIn.
- Fundos próprios para computador e celular; layout flexível.
- Botões acessíveis por teclado, foco visível e nomes para leitores de tela.

## Organização e conceitos

- `src/components`: partes reutilizáveis da interface (Profile, ThemeToggle, LinkButton, SocialLinks e Footer).
- `src/data/links.js`: textos e endereços dos links, exibidos com map e chaves estáveis.
- `src/App.jsx`: organiza os componentes e controla o tema.
- Props são informações passadas a um componente, como a foto do Profile.
- useState guarda o tema atual; useEffect aplica as cores e salva a preferência.
- `src/assets`: imagens, ícones e fonte locais.

## Referências e créditos

- [Figma do exercício](https://www.figma.com/design/zxErkHjdi0J3yZmZdUMnQE/DevLinks?node-id=0-1).
- [Cópia usada no desenvolvimento](https://www.figma.com/design/AM65cNyd3YRrl7UyVwfmrX/DevLinks?node-id=0-1).
- Ícones e fundos exportados do Figma. Fonte Inter: Google Fonts, licença OFL em src/assets/Inter-LICENSE.txt.
- Foto fornecida por Luana; versão com óculos produzida com edição de imagem por IA.
- Desenvolvimento assistido pelo Codex, com consultas reais ao Figma MCP e Context7 MCP.

## Evidências e entrega

Os registros de cada etapa ficam em [docs/evidencias](docs/evidencias). Eles representam o estado daquela etapa, não uma lista atualizada de funcionalidades.

A validação via Playwright MCP ainda precisa ser realizada: não está conectado nesta sessão. Testes locais, quando registrados, não substituem essa exigência. Confirmar também os requisitos do enunciado sobre OpenCode, o envio ao GitHub e eventual publicação antes da entrega.

Testes locais aprovados em seis cenários de tela/tema, com capturas e resultados em [revisão responsiva](docs/evidencias/revisao-responsiva.md).
