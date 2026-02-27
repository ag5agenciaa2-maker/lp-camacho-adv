---
name: skill-logo-seo
description: Skill de automação para análise de contexto visual (fundo claro/escuro) e conteúdo HTML, selecionando logos e ícones otimizados (circular/arredondado/sem fundo) de uma biblioteca de recursos e gerando metadados SEO ricos e dinâmicos.
---

# Skill: Implementação Inteligente de Logo e SEO

Esta skill guia o assistente na tarefa de **analisar o design atual de um site** (HTML/CSS) para selecionar a melhor variante de logo (circular, com fundo, sem fundo) e **gerar metadados SEO otimizados** baseados no conteúdo real da página, em vez de depender apenas de templates estáticos.

## 1. Análise do Contexto Visual (Design)

Antes de selecionar qualquer imagem, **leia o arquivo HTML/CSS** alvo para identificar as cores de fundo das seções críticas:

1.  **Cabeçalho (Header/Menu):** Verifique a cor de fundo (ex: classes `bg-white`, `bg-dark`, estilos inline `background-color`).
    *   **Fundo Claro:** Requer logo com contraste (escuro ou com fundo colorido).
    *   **Fundo Escuro:** Requer logo com contraste (claro ou sem fundo).
2.  **Rodapé (Footer):** Verifique a cor de fundo.

## 2. Regras de Seleção de Imagens (Prioridade)

Acesse a pasta de recursos de imagens (ex: `Imagens Logo`, `Logo-Img`) e selecione os arquivos seguindo estritamente estas prioridades:

### A. Para o Cabeçalho (Header/Menu)
*   **Se o Fundo for CLARO:**
    1.  **Prioridade 1:** Imagens **Com Fundo** -> Preferência por **Circulares** ou **Arredondadas**.
    2.  **Prioridade 2:** Imagens Normais Com Fundo (se não houver circulares).
*   **Se o Fundo for ESCURO:**
    1.  **Prioridade 1:** Imagens **Sem Fundo** (para contraste limpo e integração visual).
    2.  **Prioridade 2:** Imagens com borda clara ou adequadas para fundo escuro.

### B. Para o Rodapé (Footer)
*   **Se o Fundo for ESCURO:**
    1.  **Prioridade 1:** Imagens **Sem Fundo** (máxima integração).
*   **Se o Fundo for CLARO:**
    1.  **Prioridade 1:** Imagens **Arredondadas** (para destaque suave).
    2.  **Prioridade 2:** Imagens com Fundo que harmonizem com o layout.

### C. Para Favicon e Ícones (Mobile/App)
*   **Prioridade 1:** Ícones **Circulares** (padrão moderno de apps).
*   **Prioridade 2:** Ícones **Sem Fundo** (verificar legibilidade em abas claras/escuras).
*   **Ação:** Selecione sempre a maior resolução disponível e redimensione se necessário, ou use o `.ico` se disponível.

## 3. Geração de Metadados SEO (Conteúdo Real)

A skill exige que os metadados sejam gerados com base no **conteúdo atual da página**, e não apenas copiados de um arquivo de exemplo.

1.  **Referência:** Use o arquivo `seo-metadados.html` (se existir na pasta de logos) APENAS para entender o **formato** esperado das tags.
2.  **Análise de Conteúdo:** Leia o `<h1`, os primeiros `<p>` e a estrutura de tópicos da página.
3.  **Geração Dinâmica:**
    *   `<title>`: Crie um título otimizado e atrativo usando as palavras-chave principais encontradas no texto.
    *   `<meta name="description">`: Escreva um resumo persuasivo (150-160 caracteres) do que a página realmente oferece.
    *   `<meta name="keywords">`: Extraia 5-10 palavras-chave relevantes do texto.
    *   **Open Graph (OG):** Configure `og:title`, `og:description` e `og:url`.
    *   **Schema.org (JSON-LD):** Tente preencher o JSON-LD com dados reais encontrados no HTML (telefone, endereço, nome da empresa).

## 4. Fluxo de Execução Recomendado

1.  **Identificar:** Cores de fundo do header/footer e conteúdo textual principal.
2.  **Selecionar:** Escolher os arquivos de imagem corretos na pasta de origem baseando-se nas regras de contraste acima.
3.  **Otimizar:** Copiar as imagens selecionadas para uma pasta local otimizada (ex: `img/` ou `assets/img/`) com nomes simples (`logo-header.webp`, `favicon.ico`).
4.  **Implementar:** Editar o HTML para:
    *   Inserir as novas tags `Match` de SEO e Metadados.
    *   Atualizar os caminhos `src` das imagens de logo no header e footer.
    *   Garantir que os atributos `alt` descrevam corretamente as imagens.

## 5. Exemplo de Estrutura de Pastas Esperada (Output)

Ao final, o site deve ter uma estrutura limpa como:

```
/
├── index.html (com SEO e Logos atualizados)
└── img/ (ou assets/img/)
    ├── logo-header.webp (Circular/Arredondado se fundo claro)
    ├── logo-footer.webp (Sem fundo se fundo escuro)
    ├── favicon.ico
    └── og-image.webp
```
