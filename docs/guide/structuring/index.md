# Estruturação

[[toc]]

## Definição
O modelo de estrutura de pastas e arquivos utilizado no ORCSS tem como principal objetivo a escalabilidade. Os seguintes pontos são o que fazem essa estrutura ser eficiente.

### Arquivos componentizados
Cada arquivo CSS tem apenas um objetivo especifico. Dessa forma é mais fácil entender o que cada arquivo representa apenas pelo seu nome e localização dentro das pastas.

### Pequenos blocos de código
Componentizando o CSS, consequentement teremos arquivos com menos código. Isso resulta em uma manutenção de código mais simplificada com menos riscos de gerar conflitos de especificidade e código morto.
  
### Código reutilizável 
Mais uma das vantagens da componentização é que podemos reaproveitar pequenos trexos de código, assim evitando código repetido.

::: tip Observações
- Não estamos falando de CSS atômico! Então, nada de sair criando uma classe para cada atributo CSS
- O foco aqui é reutilizar grupos de atributos que se repetem em várias partes do projeto.
- Normalmente este tipo de código fica dentro da pasta [utils](/guide/structuring/utils.md).
:::

### Design System
Seu CSS vai escalar com o Design System da empresa independente de quantos projetos ou marcas existam
  
### CSS padrão
Utilizando o CSS padrão temos os seguintes benefícios:
  * **Simplicidade:** Não precisamos aprender milhares de nomes de classe CSS que utilitários e frameworks CSS criam. Utilizamos a forma universal do CSS que todos conhecem.
  * **Controle:** Você vai ter controle sobre seu código CSS e não vai depender da manutenção de terceiros para fazer modificações.
  * **Código limpo:** Tendo um CSS puro você não vai ter problemas com a "salada" de código CSS puro misturado com classes de um utilitário. Se você for muito azarado ainda vai ter mais um framework qualquer ali misturado para complicar ainda mais sua vida.

::: info Não tão padrão assim
Mesmo querendo manter o CSS nativo, ainda existem algumas coisas que não são possíveis de se fazer sem utilizar um pré-processador CSS como o SASS. Algumas dessas funcionalidades são a componentização, aninhamento (vai com calma aqui), @function, @mixin e @extend. Essas são as funcionalidades que eu mais utilizo e fazem muita diferença no fluxo do trabalho. Porém a escrita padrão do CSS não é alterada, você só terá algumas funcionalidades complementares e rapidinho vai pegar o jeito.
:::

## Estrutura de pastas

📂styles\
 ┣ 📂[tokens](/guide/structuring/tokens.md)\
 ┃ ┣ 📂[brands](/guide/structuring/tokens#📂-brands)\
 ┃ ┃ ┣ 📂default\
 ┃ ┃ ┃ ┣ 📜border.scss\
 ┃ ┃ ┃ ┣ 📜fonts.scss\
 ┃ ┃ ┃ ┗ 📜spacing.scss\
 ┃ ┃ ┃ ┣ 📁components\
 ┃ ┃ ┃ ┣ 📂[themes](/guide/structuring/tokens#📂-themes)\
 ┃ ┃ ┃ ┃ ┣ 📂default\
 ┃ ┃ ┃ ┃ ┃ ┣ 📜colors.scss\
 ┃ ┃ ┃ ┃ ┃ ┣ 📜colors_dark.scss\
 ┃ ┃ ┃ ┃ ┃ ┗ 📜colors_light.scss\
 ┃ ┣ 📂[components](/guide/structuring/tokens#📂-components)\
 ┃ ┣ 📂[global](/guide/structuring/tokens#📂-global)\
 ┣ 📂[tools](/guide/structuring/tools.md)\
 ┣ 📂[utils](/guide/structuring/utils.md)\
 ┣ 📂[global](/guide/structuring/global.md)\
 ┣ 📂[components](/guide/structuring/components.md)\
 ┣ 📂[pages](/guide/structuring/pages.md)