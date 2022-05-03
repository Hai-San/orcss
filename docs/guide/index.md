# Sobre ( DOCUMENTAÇÃO EM PROGRESSO )
<abbr title="Regras de organização para CSS">ORCSS</abbr> (Regras de organização para CSS) é um guia de organização do CSS que agrupa algumas "regras" para um CSS de qualidade.

## Problema
O maior problema quando se trata de CSS é a dificuldade que os desenvolvedores tem em organizar uma estrutura que seja escalável e simples de manter. Muitas soluções no mercado tentam melhorar isso, porém acabam gerando uma curva de aprendizado maior do que o necessário, principalmente pelo fato de alterarem pontos que não deveriam ser alterados. Tudo isso fica pior quando todo dia surge alguma "solução inovadora", isso vira requisito para vagas de emprego, e o desenvolvedor é obrigado a aprender "mil formas" de escrever um simples CSS para conseguir acompanhar o mercado ansioso. Porém não é só culpa das empresas, muitos desenvolvedores não gostam do CSS e acabam procurando meios de contornar essa linguagem, por isso muitas soluções do mercado acabam fazendo sucesso não por serem boas e sim por livrarem os desenvolvedores de terem que lidar diretamente com o CSS.

Também existem problemas que afetam diretamente as equipes de design. Um desses problemas é o fato de que quando utilizamos as ditas "soluções" consequentemente algumas delas necessitam o conhecimento pela parte do designer. Isso causa um grande problema, pois agora o designer precisa entender sobre a "solução" de desenvolvimento para conseguir criar um layout que não saia dos limites da mesma. Esse aprendizado na grande maioria das vezes não acontece e o layout criado fica muito diferente do que a "solução" pode oferecer. Em consequência disso o desenvolvedor acaba tendo que inserir códigos customizados ou até misturar com outras "soluções", no fim temos o famoso projeto Frankenstein.

Soluções = Bootstrap, tailwind, css-in-js, vuetify, quasar etc...

:::tip Nem sempre é ruim
Algumas soluções que trazem um design pronto podem ser muito boas em casos específicos como:
* A empresa não possui designers para criar um layout qualificado.
* O projeto é simples e pequeno.
* O projeto precisa ser desenvolvido muito rápido.
  * Isso só funciona se a equipe inteira já ter conhecimento sobre a solução selecionada.
  * Nesses casos pode funcionar bem no começo do negócio, mas no longo prazo pode ficar bem complicado.

Isso não engloba coisas como css-in-js
:::

## Objetivo
O objetivo deste guia é mostrar como utilizar o CSS de forma simples, rápida e escalável. A única exigência aqui é saber CSS e um pouco de SASS. Apesar da necessidade do SASS, ainda será utilizado o CSS nativo e isso torna o código muito mais flexível, fazendo com que os layouts feitos pelo time de design sejam criados de forma muita mais fiel. 

"O básico bem feito é capaz de criar qualquer tipo de layout". 

## Principais benefícios
- Fácil manutenção
- Organizado
- Simples
- Escalável
- Fácil de aprender

:::tip Pode ir com calma
No começo pode parecer muita informação, mas é MUITA informação SIMPLES. Aplique as regras aos poucos e logo você vai ver os resultados no projeto.
:::