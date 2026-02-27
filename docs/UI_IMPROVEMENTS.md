# Laudo de Diagnóstico UI/UX (Padrão AG5)

Este relatório lista os pontos de melhoria identificados para elevar a experiência do usuário, performance e acessibilidade do projeto Camacho Advocacia.

---

## 🔍 Auditoria Detalhada

### 1. Interação e Navegação
- **[CRÍTICO] Smart Header:** O menu superior está sempre fixo. Deve ser implementada a lógica de "esconder ao rolar para baixo" e "mostrar ao rolar para cima" para liberar espaço de leitura.
- **[CRÍTICO] Âncoras e Sobreposição:** Ao clicar nos links do menu, os títulos das seções ficam escondidos sob o header fixo. Necessário adicionar `scroll-margin-top`.
- **[SUGESTÃO] Navegabilidade Cross-Page:** As páginas de Termos e Privacidade precisam de links que retornem à home (`index.html#secao`) em vez de apenas `#secao`.

### 2. Performance e SEO Técnico (Anti-CLS & LCP)
- **[CRÍTICO] Preload de LCP:** A imagem `hero-bg.png` é o maior elemento da pintura inicial e não está pré-carregada.
- **[SUGESTÃO] Atributos Anti-CLS:** Tags `<img>` não possuem `width` e `height` definidos, o que pode causar saltos de layout durante o carregamento.
- **[SUGESTÃO] Favicon Fallback:** Atualmente não há um favicon definido no `<head>`.

### 3. Acessibilidade e Estética
- **[OK] Contraste de Cores:** A paleta Gold/Black atende aos requisitos WCAG AA (4.5:1).
- **[SUGESTÃO] Hierarquia de Títulos:** Validar se as páginas secundárias seguem a hierarquia `h1 -> h2` sem pular níveis.
- **[SUGESTÃO] Limpeza de Emojis:** Identificados alguns caracteres que podem ser substituídos por SVGs mais profissionais.

### 4. Consistência Visual (Symmetry)
- **[SUGESTÃO] Padronização de Rodapé:** O rodapé das páginas secundárias não reflete as melhorias premium aplicadas recentemente na `index.html`.

---

## 🚀 Próximos Passos
1. Implementar lógica de Header Inteligente no `script.js`.
2. Otimizar o `<head>` com preloads e favicons.
3. Sincronizar as páginas secundárias com a estrutura da Home.
