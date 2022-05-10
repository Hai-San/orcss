# Sobre ( DOCUMENTAÇÃO EM PROGRESSO )
<abbr title="Regras de organização para CSS">ORCSS</abbr> (Regras de organização para CSS) é um guia de organização do CSS que agrupa algumas "regras" para um CSS de qualidade.

## Problema
Quando se trata de CSS muitos desenvolvedores tem dificuldade em organizar uma estrutura que seja escalável e simples de manter. Em consequencia disso muitos procuram soluções alternativas para "facilitar" o processo do desenvolvimento de layouts. Os tipos de soluções mais comuns são:
* UI frameworks (bootstrap, Material Design, vuetify, Chakra UI etc... ) => Muito úteis para empresas que não possuem designers e precisam de um layout OK.
* Bibliotecas utilizatárias (tailwind) => Estilização baseada em classes atomicas.
* Bibliotecas de CSS-IN-JS (styled-components, emotion) => Só serve pra complicar.

#### Os UI frameworks e o Tailwind são vantajosos para:
* Projetos pequenos
* Projetos que não possuem designers
* Projetos que precisam ser feitos em curto prazo
  * Isso só funciona se a equipe inteira já ter conhecimento sobre a solução selecionada.
  * Nesses casos pode funcionar bem no começo do negócio, mas no longo prazo pode ficar bem complicado.
  
#### Desvantagens:
* Nunca possuem todas as peças necessárias, cada projeto é único. Isso no longo prazo faz o projeto virar um frankenstein cheio de código cuztomizado para atender as demandas.
* Limitam a criatividade dos designers, pois é necessário que eles sigam as regras da solução utilizada.
* Os designers precisam estudar a solução para que possam criar layouts que sigam as regras da mesma. Se isso não for feito, os desenvolvedores terão muito mais trabalho para desenvolver os layouts, pois precisaram adicionar códigos customizados.
* Criam uma nova curva de aprendizado. 
* É necessário que toda a equipe de desenvolvedores tenha dominio sobre a solução utilizada.


Para concluir, o maior problema é que todo dia surge alguma "solução inovadora", isso vira requisito para vagas de emprego e o desenvolvedor é obrigado a aprender "mil formas" de escrever um simples CSS para conseguir acompanhar o mercado ansioso. Porém não é só culpa das empresas, muitos desenvolvedores não gostam do CSS e acabam procurando meios de contornar essa linguagem, por isso muitas soluções do mercado acabam fazendo sucesso não por serem boas e sim por livrarem os desenvolvedores de terem que lidar diretamente com o CSS.

## Objetivo
O objetivo deste guia é mostrar como utilizar o CSS de forma simples, rápida e escalável. A única exigência é saber CSS e o básico do SASS.  

#### Principais vantagens
- Flexível
- Organizado
- Escalável
- Simples
- Fácil de dar manutenção
- Fácil de aprender
- Liberdade para o time de design

#### Desvantagens
- Mais demorado

:::tip Pode ir com calma
No começo pode parecer muita informação, mas é MUITA informação SIMPLES. Aplique as regras aos poucos e logo você vai ver os resultados no projeto.
:::

"O básico bem feito é capaz de criar qualquer tipo de layout". 