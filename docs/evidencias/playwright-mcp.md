# Evidência de Playwright MCP

Execução em 08/11/2026, iniciada por Luana no terminal do VS Code, com resultado PASS. O agente conferiu o JSON e as capturas produzidas.

- Servidor oficial: @playwright/mcp 0.0.84.
- Cliente: SDK Model Context Protocol, via InMemoryTransport.
- 25 chamadas MCP, nenhuma com isError.
- Ferramentas utilizadas: browser_navigate, browser_resize, browser_click, browser_evaluate, browser_emulate_media, browser_take_screenshot, browser_console_messages e browser_close.
- Viewports: 360x800 e 1440x1024, nos temas claro e escuro.
- Verificado: troca de tema, foto correspondente, quatro links principais, três redes sociais, preferência mantida após navegar novamente para a página e ausência de rolagem horizontal.
- Console retornou zero erros e zero avisos.
- Os endereços foram conferidos no DOM; não houve navegação externa para validar a disponibilidade dos perfis.
- Capturas com movimento reduzido, para registrar o seletor na posição final.

## Arquivos

- [Registro das chamadas e respostas](playwright-mcp.json)
- [Desktop escuro](mcp-1440-dark.png) e [desktop claro](mcp-1440-light.png)
- [Celular escuro](mcp-360-dark.png) e [celular claro](mcp-360-light.png)

A execução usa o servidor MCP oficial programaticamente; não foi uma sessão de plugin persistente no Codex. Os testes locais anteriores estão separados em playwright-local.json.
