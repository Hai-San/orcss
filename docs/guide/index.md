# Sobre
<abbr title="Regras de organização para CSS">ORCSS</abbr> (Regras de organização para CSS) é um guia que apresenta boas práticas de como melhorar a organização do CSS.

## Problema
Quando se trata de CSS, muitos desenvolvedores tem dificuldade em organizar uma estrutura que seja simples e escalável. Em consequência disso procuram soluções alternativas para "facilitar" o processo do desenvolvimento de layouts. As soluções mais comuns são:
* UI frameworks (bootstrap, Material Design, vuetify, Chakra UI etc... ) => Muito úteis para empresas que não possuem designers e precisam de um layout OK.
* Bibliotecas utilitárias (tailwind) => Estilização baseada em classes atômicas.
* Bibliotecas de CSS-IN-JS (styled-components, emotion) => Só serve pra complicar.

#### Os UI frameworks e o Tailwind são vantajosos para:
* Projetos pequenos
* Projetos que não possuem designers
* Projetos que precisam ser feitos em curto prazo
  * Isso só funciona se a equipe inteira já ter conhecimento sobre a solução selecionada.
  * Nesses casos pode funcionar bem no começo do negócio, mas no longo prazo pode ficar bem complicado.
  
#### Desvantagens:
* Nunca possuem todas as peças necessárias. 
  * No longo prazo isso faz o projeto virar um Frankenstein cheio de código customizado para atender as demandas.
  * Para ter um layout consistente os designers precisam estudar a solução e isso raramente acontece. 
  * A criatividade dos designers fica limitada ao que a solução pode oferecer.
  * Os desenvolvedores tem muito mais trabalho para desenvolver os layouts, pois precisam adicionar códigos customizados.
* Possuem a curva de aprendizado muito maior do que as vantagens oferecidas
* É necessário que toda a equipe de desenvolvedores tenha domínio sobre a solução utilizada.

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