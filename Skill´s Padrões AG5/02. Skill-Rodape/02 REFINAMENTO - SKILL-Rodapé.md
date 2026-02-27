Quero que você refine e reestruture o Rodapé (<footer>) do site aplicando o seguinte padrão Premium e Minimalista. Não altere as tecnologias base (mantenha HTML e CSS limpos), apenas adeque o código às regras abaixo:

1. Cor de Fundo e Contraste (Obrigatório)

Cor do Rodapé: Não use preto puro (#000000) nem cinza genérico. Use um tom escuro derivado da paleta primária do projeto para dar uma quebra sutil, mas que ainda converse com a identidade (Exemplo que usamos: #21050E, um tom super escuro da cor de fundo principal).
Linha Divisória: Adicione uma borda fina no topo e na base (separando os direitos autorais) com uma opacidade bem baixa: border-top: 1px solid rgba(255, 255, 255, 0.1).
2. Estrutura de Colunas (Grid 4 Colunas) No Desktop (@media min-width: 1024px), o rodapé deve obrigatoriamente seguir a proporção de grid 1.5fr 1fr 1.5fr 1fr, divididas exatamente assim:

Coluna 1 (Marca):
Logo do site reduzida (aprox. 70px a 80px de altura).
Uma tagline (descrição curta) abaixo do logo com fonte pequena.
Redes Sociais em formato de SVG circulares com hover que reage à cor Accent (destaque).
Coluna 2 (Links Rápidos):
Links de navegação ancorados (Início, Sobre, Áreas, Contato).
Hover nos links usando a cor Accent.
Coluna 3 (Contato - Organização Específica):
Esta coluna deve listar exclusivamente as informações de contato direto, em ordem de hierarquia.
Ordem: 1º Nome da Empresa/Razão Social; 2º Endereço Físico Completo; 3º Telefone Principal/Fixo; 4º Telefones Celulares/WhatsApp.
Cada linha deve ter um ícone SVG (limpo, sem preenchimento forte) de 18px, alinhado com o texto.
Coluna 4 (Atendimento e Mapa):
Deve conter a infraestrutura de localização visual.
Mapa: Insira um <iframe> do Google Maps da empresa com border-radius: 8px, height: 100px, width: 100%, com borda translúcida.
Abaixo do mapa, coloque os Locais de Atendimento resumidos (ex: "Atendimento em: Santa Cruz, Campo Grande...") e o Horário de Funcionamento.
Use fontes bem pequenas (10px a 12px) com opacidade (opacity: 0.8) nesta área.
3. Dimensões e Espaçamentos (Minimalismo)

Reduza severamente o padding vertical do rodapé (use algo em torno de padding-top: 30px; padding-bottom: 24px). Ele não deve ocupar meia tela do usuário.
Reduza as fontes de todo o texto das colunas para tamanhos entre 0.75rem e 0.85rem.
4. Rodapé Inferior (Bottom / Direitos Autorais)

Deve usar display: flex; justify-content: space-between;
Lado Esquerdo: Copyright atualizado + Links em linha do "Banner de Cookie", "Termos e Condições" e "Política de Privacidade" divididos por |.
Lado Direito: Créditos de Desenvolvimento (Ex: "Desenvolvido por AG5 Agência") com link clicável destacando a agência."