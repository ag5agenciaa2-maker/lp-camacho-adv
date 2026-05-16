# SITE DNA — CAMACHO ADVOCACIA & IMOBILIÁRIA

**Nicho:** Advocacia e Imobiliária — Direito Imobiliário, Família e Sucessões, Trabalhista e do Consumidor. Escritório com forte raiz local em Campo Grande, RJ, com mais de 40 anos de tradição.

**Posicionamento:** Autoridade jurídica regional sólida, transmitindo peso institucional, confiança geracional e sofisticação editorial. A interface comunica seriedade sem frieza, usando ouro sobre escuro para evocar prestígio e proximidade ao mesmo tempo — como um escritório de advocacia de alto padrão que ainda conhece o nome do cliente.

**Data de criação:** 2026-02-27

---

## IDENTIDADE VISUAL

### Paleta de Cores

| Variável CSS             | Hex / Valor                        | Função Específica no Layout                                               |
|--------------------------|------------------------------------|---------------------------------------------------------------------------|
| `--gold`                 | `#F5C94A`                          | Cor primária de destaque; CTAs, ícones, delineadores, texto de impacto    |
| `--gold-light`           | `#FFE89A`                          | Ponto de brilho no gradient-text do H1 (meio do gradiente)                |
| `--gold-dark`            | `#D4A830`                          | Sombra do gradiente dourado; ancora o brilho sem perder profundidade      |
| `--dark`                 | `#050505`                          | Background base do `<body>` e seções primárias; quase preto puro          |
| `--dark-surface`         | `#0C0C0C`                          | Background de seções alternadas (areas, galeria, footer); leve contraste  |
| `--dark-card`            | `rgba(255,255,255,0.03)`           | Fill padrão de glass cards; imperceptível, serve para o blur funcionar    |
| `--text`                 | `#F9F9F9`                          | Texto primário em headings e labels de alto destaque                      |
| `--text-muted`           | `#B0B0B0`                          | Parágrafos, nav links, metadados; reduz peso visual sem desaparecer       |
| Cor de Erro / Dor        | `#F87171` (red-400 Tailwind)       | Exclusivo para o lado "Consequências da Insegurança" no card de dor       |
| WhatsApp                 | `#25D366`                          | Botão flutuante; cor padrão da marca, não adaptada ao tema                |
| Seleção de Texto         | `background: #F5C94A; color: #050505` | `::selection` — reforça a identidade mesmo na leitura                 |

### Tipografia

| Elemento            | Família                  | Peso           | Tamanho Exato              | Observações                                                                 |
|---------------------|--------------------------|----------------|----------------------------|-----------------------------------------------------------------------------|
| H1 Hero             | `Playfair Display`, serif | 700           | `3.5rem` (desktop) / `2.5rem` (≤768px) | Quebra de linha manual com `<br>` para controle editorial da mancha |
| H2 Seções           | `Playfair Display`, serif | 700           | `2.5rem`                   | `line-height: 1.2`; sem margin-top, espaçamento controlado pelo pai        |
| H2 Localização      | `Playfair Display`, serif | 700           | `2rem`                     | Menor que os demais H2, seção secundária                                   |
| H3 Cards            | `Playfair Display`, serif | 700           | ~`1.25rem` (herdado)       | Nos cards `.glass-card` de áreas; sem font-size explícito, herda do root   |
| H3 Hero Card        | `Playfair Display`, serif | 700           | `1.5rem`                   | Card de "Confiança Geral" no hero desktop; `color: var(--gold)`            |
| Body / Parágrafos   | `Inter`, sans-serif       | 400           | `1rem` base / `1.125rem` hero | `line-height: 1.6`; `-webkit-font-smoothing: antialiased`              |
| Tagline Sublogo     | `Inter`, sans-serif       | 400 (normal)  | `0.65rem`                  | "Advocacia & Imobiliária" abaixo do nome no header; `letter-spacing: 0.2em`; `text-transform: uppercase` |
| Badge / Labels      | `Inter`, sans-serif       | 600           | `0.75rem`                  | `.badge`; `text-transform: uppercase; letter-spacing: 0.1em`               |
| Nav Links           | `Inter`, sans-serif       | 500           | `0.875rem`                 | `.nav-link`; muted default, gold no hover                                  |
| Mobile Nav Links    | `Playfair Display`, serif | 700           | `2.5rem`                   | `.mobile-nav-link`; display editorial de revista no menu fullscreen        |
| Metadados de Card   | `Inter`, sans-serif       | 400 / 600     | `0.65rem` label / `0.875rem` valor | Mini-cards dentro do hero card; uppercase label + bold value       |
| Footer Logo Text    | `Playfair Display`, serif | 700           | `1.5rem`                   | `.footer-logo-text`; gold, sem ícone no footer                             |
| Footer Heading      | `Playfair Display`, serif | 700           | `0.85rem`                  | Headings de colunas do footer com pseudo `::after` dourado de 40px         |
| Footer Links        | `Inter`, sans-serif       | 400           | `0.8rem`                   | `.footer-links a` e `.footer-contact-item`                                 |

### Estilo Geral

Design editorial de luxo sombrio com matriz dark-gold: a linguagem visual é inspirada no jornalismo de prestígio e no design de marcas financeiras premium — fundos em near-black `#050505`, tipografia serifada (Playfair Display) em titulações para carregar historicidade e peso institucional, combinada com Inter para legibilidade técnica no corpo. A paleta única ouro-sobre-preto recusa paletas de segurança como azul-marinho ou verde institucional, apostando no dourado como símbolo de valor, não de exibicionismo. O glassmorphism é usado com sobriedade extrema (backdrop-filter blur de 12px, fill de 3% de branco) para criar profundidade sem leveza excessiva, mantendo o caráter austero. Toda a linguagem de animação opera abaixo de 800ms, preferindo `ease-out` e `cubic-bezier(0.16,1,0.3,1)` para um ritmo que soa deliberado e confiante, nunca ágil demais.

---

## LAYOUT — SEÇÃO POR SEÇÃO

### SEÇÃO 1 — Header / Navegação

**Estrutura:** Flexbox `justify-content: space-between; align-items: center`. Altura fixa de `90px`, reduz para `70px` com scroll. `max-width: 1280px` via `.container`. Nav centralizado com `margin-left: auto`. Botão CTA pill à direita no desktop; hamburger `2rem × 2rem` no mobile (≤768px).

**Fundo:** Transparente no topo. Com `.scrolled`: `background: rgba(5,5,5,0.8)` + `backdrop-filter: blur(10px)` + `border-bottom: 1px solid rgba(245,201,74,0.1)`. Transição de altura: `0.3s ease`.

**Elementos Restritos:** Logo à esquerda — ícone SVG de balança `2rem` em `stroke: #F5C94A` + coluna com "Camacho" em Playfair 700 `1.25rem` gold e subtítulo `0.65rem` muted uppercase. Nav links com gap `2rem` entre itens.

**Animação:** `transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)` para hide/show. Header some com `translateY(-100%)` quando scroll desce após 150px; reaparece quando sobe. Gatilho via `requestAnimationFrame` para evitar layout thrash.

**Micro-interações:** `.nav-link:hover { color: var(--gold) }` — apenas troca de cor, sem transform. `.btn-cta:hover { background: var(--gold); color: var(--dark) }` — fill sólido; transição `0.3s ease`.

**Diferenciador Visual:** O logo não usa imagem — é um SVG inline de balança jurídica em stroke dourado com tipografia empilhada, permitindo carregamento instantâneo e perfeita fidelidade em qualquer DPI. O subtítulo em `letter-spacing: 0.2em` cria um ritmo tipográfico que posiciona a marca como insígnia, não como logomarca comum.

---

### SEÇÃO 2 — Hero

**Estrutura:** `min-height: 100vh`. Grid `grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center`. `padding-top: 100px` para compensar o header fixo. Mobile: `1fr` (coluna única, lado direito `.hidden-mobile`).

**Fundo:** `background-image: linear-gradient(to bottom, rgba(5,5,5,0.7), rgba(5,5,5,1)), url('assets/images/hero-bg (2).webp')`. `background-size: cover; background-position: center; background-attachment: fixed` (parallax). No mobile/tablet ≤1024px: `background-attachment: scroll` (fix de PageSpeed — fixed attachment causa heavy repaints em GPU mobile).

**Elementos Restritos:** Coluna esquerda: H1 + parágrafo `font-size: 1.125rem` + grupo de 2 CTAs `flex; gap: 1rem; flex-wrap: wrap`. Coluna direita: `.glass-card` com `padding: 2.5rem`, ícone SVG decorativo `8rem` em `opacity: 0.1` absolute top-right, bloco de mini-cards de credencial empilhados. Glow decorativo: `div.hero-glow-1` absoluto `500×500px`, `background: rgba(245,201,74,0.05)`, `filter: blur(120px)` no top-right do container.

**Animação:** `.animate-up` via `@keyframes fadeInUp { from: opacity:0, translateY(20px); to: opacity:1, translateY(0) }` — `0.8s ease-out forwards`. Ativado por IntersectionObserver (threshold: 0.1). Sections e `.glass-card` têm `opacity: 0` inicial via JS para evitar FOUC.

**Micro-interações:** CTA primário (sólido gold): hover sem transform, apenas fill já está aplicado. CTA secundário (ghost): `.btn-cta:hover { background: var(--gold); color: var(--dark) }`. Glass card do hero: `.glass-card:hover { border-color: rgba(245,201,74,0.3) }`.

**Diferenciador Visual:** O H1 usa `gradient-text` com `background: linear-gradient(to right, #F5C94A, #FFE89A, #D4A830)` aplicado via `background-clip: text; -webkit-text-fill-color: transparent` — o texto dourado metálico tricolor não é flat, simula reflexo de luz como uma inscrição em bronze. A coluna direita com o card de credenciais substitui a imagem genérica de advogado de gravata que 90% dos concorrentes usam.

---

### SEÇÃO 3 — Dor e Solução

**Estrutura:** `.grid-2; gap: 4rem; align-items: stretch`. Dois `.glass-card` de altura igual com imagem no topo e lista abaixo. Mobile: `grid-template-columns: 1fr`.

**Fundo:** `background-color: var(--dark)`. Card de Dor: `background: rgba(255,0,0,0.02); border-color: rgba(255,255,255,0.03)`. Card de Solução: `background: rgba(245,201,74,0.02); border-color: rgba(245,201,74,0.2)`.

**Elementos Restritos:** Cada card: imagem `height: 250px; border-radius: 1.5rem 1.5rem 0 0; overflow: hidden` + overlay `linear-gradient(to bottom, transparent, var(--dark-surface))` + label absolutamente posicionado `bottom: 1.5rem; left: 1.5rem`. Corpo: lista de 3 itens com ícone SVG (X vermelho / checkmark dourado) + `h4` + `p`. Imagem do card de dor: `filter: grayscale(1) opacity(0.5)` — dessaturada deliberadamente.

**Animação:** Entrada por IntersectionObserver, `fadeInUp 0.8s ease-out`.

**Micro-interações:** `.glass-card:hover { border-color: rgba(245,201,74,0.3) }` — transição `0.3s ease`. Sem hover nas imagens nesta seção.

**Diferenciador Visual:** A contraposição visual deliberada entre os dois cards — um com imagem dessaturada + ícones vermelhos `#F87171`, outro com imagem colorida + ícones dourados — cria uma narrativa visual binária sem usar texto explícito de "antes/depois". A label de categoria flutua sobre a imagem em `uppercase letter-spacing: 0.1em` como em um editorial de revista.

---

### SEÇÃO 4 — Áreas de Atuação

**Estrutura:** `.grid-4; gap: 2rem`. Mobile: `grid-template-columns: 1fr`. `background-color: var(--dark-surface)`. Cabeçalho centralizado com `margin-bottom: 4rem`.

**Fundo:** `background-color: var(--dark-surface)` — `#0C0C0C`, leve diferenciação da seção anterior.

**Elementos Restritos:** 4 cards `.glass-card.hover-lift` com `padding: 2rem`. Cada card: ícone SVG `32×32px` em `color: var(--gold); margin-bottom: 1.5rem` + H3 + parágrafo `0.875rem` + link "Saiba mais →" em gold `0.8rem font-weight: 600`.

**Animação:** `.hover-lift:hover { transform: translateY(-6px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.8), 0 0 15px rgba(245,201,74,0.1) }` — `transition: 0.3s ease`.

**Micro-interações:** Elevação com sombra dupla no hover: sombra de profundidade (`-10px spread`) + halo dourado sutil (`0 0 15px`). Border torna-se `rgba(245,201,74,0.3)` simultaneamente.

**Diferenciador Visual:** Os ícones SVG são inline stroke (não preenchidos), peso `stroke-width: 1.5` — traço fino que evoca o estilo de ícones de luxo contemporâneos. O link "Saiba mais →" abre direto no WhatsApp com texto pré-preenchido por área de atuação, eliminando fricção na conversão.

---

### SEÇÃO 5 — Sobre / História

**Estrutura:** `.grid-2; align-items: center`. Coluna esquerda: imagem com aspect-ratio `4/5` + glow ambient. Coluna direita: badge + H2 + parágrafos + lista com bullet dourado. `gap` padrão `2rem`.

**Fundo:** `background-color: var(--dark)` — retorna ao fundo base após a seção de áreas.

**Elementos Restritos:** Imagem: `.glass-card; aspect-ratio: 4/5; border-radius: 1.5rem; overflow: hidden`. Glow ambient: `div` absoluto com `inset: -1rem; background: rgba(245,201,74,0.1); filter: blur(20px)` — halo dourado ao redor da foto. Overlay inferior na imagem: `linear-gradient(to top, var(--dark), transparent)` com H3 + p sobre a foto. Bullets da lista: `div 8×8px; border-radius: 50%; background: var(--gold)` com `margin-top: 0.5rem` para alinhamento óptico com o início do texto.

**Animação:** Entrada por IntersectionObserver.

**Micro-interações:** `.glass-card:hover { border-color: rgba(245,201,74,0.3) }` na imagem.

**Diferenciador Visual:** O glow ambient dourado posicionado com `inset: -1rem` cria um aura luminosa que "emana" da foto como se o sujeito fosse uma fonte de luz. A sobreposição de texto na foto (nome + subtítulo) dentro do próprio container da imagem evita a estrutura padrão de "foto à esquerda, texto solto à direita".

---

### SEÇÃO 6 — Galeria (Slider Contínuo)

**Estrutura:** `overflow: hidden`. `.slider-wrapper { width: 100%; padding: 1rem 0 4rem }`. `.slider-track { display: flex; width: calc(320px * 18) }`. 18 slides (9 originais + 9 duplicatas para loop seamless).

**Fundo:** `background-color: var(--dark-surface)`.

**Elementos Restritos:** `.slide { width: 320px; height: 420px; padding: 0 10px; flex-shrink: 0 }`. Imagens com `object-fit: cover; border-radius: 1rem; border: 1px solid rgba(255,255,255,0.05); filter: grayscale(0.3)`.

**Animação:** `@keyframes scroll-gallery { 0%: translateX(0); 100%: translateX(calc(-320px * 9)) }` — `animation: scroll-gallery 50s linear infinite`. `will-change: transform` para otimização GPU. Pausa no hover: `.slider-track:hover { animation-play-state: paused }`. Mobile: slides reduzem para `260×340px`, keyframe atualizado para `calc(-260px * 9)`.

**Micro-interações:** `.slide img:hover { border-color: var(--gold); transform: scale(1.03); filter: grayscale(0) }` — desativa o dessaturamento e aplica borda dourada. Transição `0.3s ease`.

**Diferenciador Visual:** O grayscale parcial de `0.3` nas imagens em repouso é proposital — cria uniformidade no conjunto e faz as cores "explodirem" no hover individualmente, como uma galeria de arte que ganha vida ao toque.

---

### SEÇÃO 7 — Localização Estratégica

**Estrutura:** `.grid-2; align-items: center; gap: 4rem`. Lado esquerdo: título H2 + lista de 3 itens de credencial com ícone. Lado direito: embed Google Maps em `border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.05)`.

**Fundo:** `background-color: rgba(255,255,255,0.02)` — diferenciação mínima, quase imperceptível.

**Elementos Restritos:** Ícones de credencial: `div 2.5rem × 2.5rem; background: rgba(245,201,74,0.1); border-radius: 0.5rem` com SVG gold `20×20px`. Mapa: iframe responsivo dentro de `.footer-map-container { height: 120px }`.

**Micro-interações:** Nenhuma específica além do hover padrão de links.

**Diferenciador Visual:** O mapa real do Google Maps incorporado como prova de localização física — escritórios que "existem" mostram o endereço real. A seção não é chamada de "Onde Estamos" ou "Contato" — chama-se "Localização Estratégica", posicionando a proximidade geográfica como vantagem competitiva.

---

### SEÇÃO 8 — FAQ (Accordion)

**Estrutura:** Container centralizado. Lista de `.faq-item` empilhados com `margin-bottom: 1rem`. Cabeçalho com badge + H2.

**Fundo:** Herda `var(--dark)` ou seção anterior.

**Elementos Restritos:** `.faq-trigger { width: 100%; background: none; border: none; display: flex; justify-content: space-between; align-items: center; padding: 1.5rem; color: var(--text); font-weight: 600 }`. `.faq-content { max-height: 0; overflow: hidden; padding: 0 1.5rem; transition: max-height 0.3s ease, padding 0.3s ease }`. Ativo: `max-height: 400px; padding-bottom: 1.5rem`. Ícone chevron: `transform: rotate(180deg)` no estado ativo.

**Animação:** Accordion com `max-height` de `0 → 400px` via `transition: 0.3s ease`. Apenas um item aberto por vez (JS fecha os demais antes de abrir o novo).

**Micro-interações:** Rotação do ícone chevron `180deg` sincronizada com a abertura do conteúdo. Toque/click fecha o item se já estiver aberto (toggle).

**Diferenciador Visual:** Sem bordas laterais ou backgrounds coloridos nos itens — apenas divisão por espaçamento. O FAQ é implementado como schema.org `FAQPage` no JSON-LD, servindo SEO diretamente.

---

### SEÇÃO 9 — Formulário de Contato

**Estrutura:** `.grid-2` ou coluna única mobile. Lado esquerdo: informações de contato. Lado direito: formulário com campos `name`, `phone`, `subject` (select), `message`.

**Fundo:** `var(--dark-surface)`.

**Elementos Restritos:** Inputs com `border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); border-radius: 0.5rem; padding: 0.75rem 1rem; color: var(--text)`. Select options: `background-color: #1a1a1a; color: white` — fix de visibilidade em dark mode. Botão submit: CTA primário gold com spinner SVG animado durante processamento.

**Animação:** Spinner `@keyframes animate-spin` durante o processamento de 1200ms. Mensagem de sucesso aparece/desaparece com `style.display` toggle.

**Micro-interações:** `input:focus, select:focus, textarea:focus { border-color: var(--gold) !important; box-shadow: 0 0 0 2px rgba(245,201,74,0.2) !important }` — ring dourado no foco, consistente com identidade. Formulário abre WhatsApp com texto pré-formatado após 1.2s de feedback visual.

**Diferenciador Visual:** O formulário não envia para e-mail ou backend — redireciona para WhatsApp com mensagem estruturada e pré-formatada. O delay de 1.2s com spinner cria percepção de processamento que aumenta a confiança antes da abertura do chat.

---

### SEÇÃO 10 — Footer

**Estrutura:** Grid `grid-template-columns: 1.2fr 0.8fr 1.8fr 1fr; gap: 3rem; padding: 2.5rem 0 2rem`. Breakpoints: `≤1024px → 1fr 1fr; ≤768px → 1fr` com `padding-left: 25px`. Footer bottom: flexbox `justify-content: space-between; flex-wrap: wrap`.

**Fundo:** `background: var(--dark-surface)`. `border-top: 1px solid rgba(245,201,74,0.1)`. Decore: `div.footer-bg-decor` absoluto `300×300px` bottom-right com `radial-gradient(circle, var(--gold) 0%, transparent 70%)`, `filter: blur(50px); opacity: 0.03`.

**Elementos Restritos:** Coluna 1 (Brand): logo + descrição `0.825rem` + redes sociais (ícones circulares `38×38px` com border dourado). Coluna 2 (Links): lista com hover `padding-left: 4px` (shift sutil). Coluna 3 (Contato): lista com ícone gold SVG + texto. Coluna 4 (Mapa): iframe `height: 120px; border-radius: 12px`. Footer heading com `::after { width: 40px; height: 2px; background: var(--gold); position: absolute; bottom: -1px; left: 0 }`.

**Micro-interações:** `.footer-social-link:hover { background: rgba(245,201,74,0.1); border-color: var(--gold); color: var(--gold); transform: translateY(-2px) }`. `.footer-links a:hover { color: var(--gold); padding-left: 4px }` — `transition: 0.3s ease`.

**Diferenciador Visual:** O acento visual de `40px` dourado sob os headings do footer (`::after`) funciona como uma assinatura gráfica que repete a identidade dourada até na última seção da página. O mapa embutido no footer como 4ª coluna é incomum — reforça presença física sem precisar de uma seção dedicada extra.

---

## COMPONENTES REUTILIZÁVEIS

### Botão CTA — `.btn-cta`

```css
/* Estado padrão — Ghost/Outline */
.btn-cta {
  background: rgba(245, 201, 74, 0.1);
  border: 1px solid #F5C94A;
  color: #F5C94A;
  padding: 0.625rem 1.25rem;
  border-radius: 9999px;        /* pill shape */
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  text-decoration: none;
  transition: transform 0.3s ease, opacity 0.3s ease,
              background-color 0.3s ease, color 0.3s ease,
              border-color 0.3s ease;
}

/* Estado Hover — Fill sólido */
.btn-cta:hover {
  background: #F5C94A;
  color: #050505;
}

/* Variante Primary (inline style no hero) */
/* background: var(--gold); color: var(--dark); padding: 1rem 2rem; font-weight: 700 */
```

### Glass Card — `.glass-card`

```css
.glass-card {
  background: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 1.5rem;           /* 24px */
  transition: transform 0.3s ease, opacity 0.3s ease,
              background-color 0.3s ease, color 0.3s ease,
              border-color 0.3s ease;
}

.glass-card:hover {
  border-color: rgba(245, 201, 74, 0.3);
}
```

### Hover Lift — `.hover-lift` (para cards de Áreas)

```css
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-6px);
  box-shadow:
    0 10px 30px -10px rgba(0, 0, 0, 0.8),   /* sombra de profundidade */
    0 0 15px rgba(245, 201, 74, 0.1);         /* halo dourado sutil */
}
```

### Badge — `.badge`

```css
.badge {
  display: inline-block;
  padding: 0.375rem 1rem;
  background: rgba(245, 201, 74, 0.1);
  border: 1px solid rgba(245, 201, 74, 0.2);
  border-radius: 9999px;
  color: #F5C94A;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
}
```

### Gradient Text (H1 destaque) — `.gradient-text`

```css
.gradient-text {
  background: linear-gradient(to right, #F5C94A, #FFE89A, #D4A830);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Ícone Container (áreas, localização)

```css
/* Padrão quadrado arredondado */
.icon-box {
  width: 2.5rem;          /* 40px */
  height: 2.5rem;
  background: rgba(245, 201, 74, 0.1);
  border-radius: 0.5rem;   /* 8px */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
/* SVG interno: stroke="#F5C94A" stroke-width="1.5" fill="none" — 20×20px */
```

### Rede Social Footer — `.footer-social-link`

```css
.footer-social-link {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(245, 201, 74, 0.2);
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: /* var(--transition) */;
}

.footer-social-link:hover {
  background: rgba(245, 201, 74, 0.1);
  border-color: #F5C94A;
  color: #F5C94A;
  transform: translateY(-2px);
}
```

### WhatsApp Float — `.whatsapp-float`

```css
.whatsapp-float {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 64px;
  height: 64px;
  background-color: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 100;
  overflow: visible;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  animation: pulse-glow 2s infinite, wa-bounce 2s infinite ease-in-out;
  /* pulse-glow: 0→0 rgba(37,211,102,0.4) | 70%→20px rgba(37,211,102,0) */
  /* wa-bounce: 0%,100% scale(1) | 50% scale(1.1) */
  transition: transform 0.3s ease;
}

.whatsapp-float:hover {
  transform: scale(1.1);
}

/* Badge de notificação */
.wa-badge {
  position: absolute;
  top: 5px;
  right: 5px;
  background: #ff3b30;
  color: white;
  font-size: 10px;
  font-weight: 700;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: wa-bounce 2s infinite ease-in-out;
}
```

### Input / Form Fields

```css
/* Foco */
input:focus,
select:focus,
textarea:focus {
  border-color: #F5C94A !important;
  box-shadow: 0 0 0 2px rgba(245, 201, 74, 0.2) !important;
  outline: none;
}

/* Select dark mode fix */
select option {
  background-color: #1a1a1a;
  color: white;
}
```

---

## ANTI-PADRÕES REGISTRADOS

❌ **1. Hero com foto genérica de martelo/balança de tribunal como elemento principal** — Em vez disso, o hero usa uma imagem real do escritório como background com overlay escuro, combinado com um card de credenciais à direita. O símbolo jurídico (balança SVG) aparece como logo discreto de 32px, não como peça visual dominante.

❌ **2. Paleta azul-marinho + dourado da "advocacia tradicional"** — O site rompe com o azul institucional padrão do segmento (usado por 80%+ dos concorrentes locais) e aposta em near-black `#050505` + gold `#F5C94A`, criando associação a marcas de luxo premium em vez de autoridade pública.

❌ **3. Seção "Nossos Serviços" com lista de bullets enumerada e sem hierarquia visual** — As áreas de atuação são apresentadas em grid de 4 cards com hover lift, ícone próprio por área, texto técnico conciso e CTA direto para WhatsApp por área — sem listas soltas, sem acordeão genérico de serviços.

❌ **4. Formulário de contato que envia para e-mail com mensagem genérica** — O form envia via WhatsApp com texto pré-formatado estruturado (nome, telefone, área de interesse, mensagem), com feedback visual de 1.2s com spinner antes da abertura do chat — reduzindo a barreira e aumentando a taxa de resposta.

❌ **5. Depoimentos com foto de stock + nome genérico + "★★★★★" empilhados em carrossel** — A seção de prova social é substituída por galeria real do escritório em slider infinito com fotos reais do ambiente, equipe e estrutura — credibilidade visual genuína versus credibilidade fabricada.

❌ **6. Footer minimal com "Todos os direitos reservados" e dois links** — O footer é um grid de 4 colunas com brand, links de navegação, informações de contato completas e um mapa interativo embutido, com detalhe tipográfico `::after` dourado nos headings — funcional e esteticamente consistente com a identidade.

❌ **7. Header fixo sem comportamento de scroll inteligente** — O header implementa hide-on-scroll-down / show-on-scroll-up (scroll > 150px), com redução de altura de `90px → 70px` e glassmorphism progressivo apenas quando rolado. Usa `requestAnimationFrame` para performance — não um `scroll` listener ingênuo.
