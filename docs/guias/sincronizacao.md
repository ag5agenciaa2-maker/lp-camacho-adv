# Guia: Regra de Sincronização Automática

Para garantir que todos os sites estáticos tenham header e footer consistentes sem precisar de frameworks pesados, utilizamos o **Protocolo de Sincronização via Script**.

## Como Implementar no Refinamento (Para outros sites)

Para que o seu Agente IA faça isso automaticamente em outros projetos, você deve adicionar a seguinte instrução no seu arquivo de regras (`user_rules` ou `GEMINI.md`):

### 📋 A Instrução para a IA:
> **REGRA DE SINCRONIZAÇÃO DE LAYOUT:**
> 1. SEMPRE use comentários delimitadores no HTML: `<!-- Header -->` e `<!-- Footer -->`.
> 2. Ao alterar o Header ou Footer na `index.html`, replique AUTOMATICAMENTE a alteração para todas as outras páginas `.html`.
> 3. Se o projeto tiver muitas páginas, crie um script `sync_layout.py` para automatizar essa Replicação e execute-o após cada alteração visual global.

---

## Como usar o Script neste projeto
Sempre que você (usuário) ou eu (IA) alterarmos o Rodapé ou Cabeçalho na **index.html**, basta rodar:

```powershell
python sync_layout.py
```

### O que o script faz:
1. Ele lê a `index.html`.
2. Captura tudo o que está entre `<!-- Header -->` e o fim da tag `</header>`.
3. Captura tudo o que está entre `<!-- Footer -->` e o fim da tag `</footer>`.
4. Substitui os mesmos blocos em todos os outros arquivos `.html` da pasta.

### Por que isso é melhor que usar Frameworks?
- **SEO Máximo:** O Google lê o HTML pronto e limpo.
- **Velocidade:** Não há delay de carregamento de componentes via JS.
- **Independência:** O site funciona sem precisar de um servidor complexo.
