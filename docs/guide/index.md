# Sobre
<abbr title="Regras de organização para CSS">ORCSS</abbr> (Regras de organização para CSS) é um guia que apresenta boas práticas de como melhorar a organização do CSS.

## Problema
Quando se trata de CSS, muitos desenvolvedores tem dificuldade em organizar uma estrutura que seja simples e escalável. Em consequência disso procuram soluções alternativas para "facilitar" o processo do desenvolvimento de layouts. As soluções mais comuns são:
1. **UI frameworks:** Muito úteis para empresas que não possuem designers e precisam de um layout OK.
    * **Ex:** bootstrap, Material Design, vuetify, Chakra UI.
2. **Bibliotecas utilitárias:** Estilização baseada em classes atômicas, feito pensando principalmente na agilidade de desenvolvimento.
    * **Ex:** Tailwind
3. **Bibliotecas de CSS-IN-JS:** Não foi criado para melhorar o CSS e sim para se adaptar em frameworks que usam apenas javascript
    * **EX:** styled-components, emotion

**Pontos positivos**

- **[1,2]** Projetos pequenos 
- **[1]** Projetos que não possuem designers 
- **[1,2]** Projetos que precisam ser feitos em curto prazo 

**Desvantagens**
* **[1,2,3]** "Funciona" apenas se a equipe de desenvolvedores ter conhecimento sobre a solução selecionada.
* **[1,2]** Os designer precisam ter conhecimento
* **[1]** A criatividade dos designers fica limitada ao que a solução pode oferecer.
* **[1,2,3]** Nunca possuem todas as peças necessárias. No longo prazo isso faz o projeto virar um Frankenstein cheio de código customizado para atender as demandas. Consequentemente os desenvolvedores tem muito mais trabalho para desenvolver os layouts, pois precisam adicionar códigos customizados.
* **[1,2,3]** Possuem a curva de aprendizado muito maior do que as vantagens oferecidas

Para concluir, o maior problema é que todo dia surge alguma "solução inovadora", isso vira requisito para vagas de emprego e o desenvolvedor é obrigado a aprender "mil formas" de escrever um simples CSS para conseguir acompanhar o mercado ansioso. Porém não é só culpa das empresas, muitos desenvolvedores não gostam do CSS e acabam procurando meios de contornar essa linguagem, por isso muitas soluções do mercado acabam fazendo sucesso não por serem boas e sim por livrarem os desenvolvedores de terem que lidar diretamente com o CSS.

## Objetivo
O objetivo deste guia é mostrar como utilizar o CSS de forma simples, rápida e escalável. A única exigência é saber CSS e o básico do SASS.  

#### Principais vantagens
* Flexível
* Organizado
* Escalável
* Simples
* Fácil de dar manutenção
* Fácil de aprender
* Liberdade para o time de design

#### Desvantagens
* O processo de desenvolvimento é mais lento no começo, pois toda a estrutura precisa ser criada do zero. 
  * No longo prazo isso é recompensado com uma estrutura muito consistente e ágil.

:::tip Pode ir com calma
No começo pode parecer muita informação, mas é MUITA informação SIMPLES. Aplique as regras aos poucos e logo resultados vão aparecer.
:::

"O básico bem feito é capaz de criar qualquer tipo de layout". 