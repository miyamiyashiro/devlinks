# Seletor de tema

- Implementado ThemeToggle com botão nativo, role switch, aria-checked e foco visível.
- useState guarda o tema; useEffect sincroniza as cores da página e localStorage (chave devlinks-theme).
- Tema claro usa foto com óculos; escuro usa a original. Armazenamento bloqueado não impede a troca.
- Context7 MCP consultado em 08/11/2026, biblioteca /reactjs/react.dev, sobre inicialização de useState com localStorage e sincronização com useEffect. Referências retornadas: https://react.dev/reference/react/useState e https://react.dev/reference/eslint-plugin-react-hooks/lints/use-memo.
- Figma consultado: arquivo AM65cNyd3YRrl7UyVwfmrX, telas 58:455 e 58:415. Fundo claro e ícones originais baixados para assets. Ícones preservados em 16x16; trilho 64x24 e controle 32x32.
- npm.cmd run lint, npm.cmd run build e git diff --check passaram.
- Playwright MCP não está disponível. Troca por clique/teclado, persistência ao recarregar e comparação visual no navegador ainda precisam de validação.
- Fundos específicos de celular continuam pendentes para a etapa responsiva.

## Conferência manual
1. Clique no botão abaixo do nome: fundo claro, texto preto e foto com óculos.
2. Atualize a página: o modo claro deve permanecer.
3. Use Tab para focar o botão e Espaço ou Enter para voltar ao escuro.
4. Atualize novamente: o modo escuro deve permanecer.
