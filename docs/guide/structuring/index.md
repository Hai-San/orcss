# Estruturação

## Definição
O modelo de estrutura de pastas e arquivos utilizado no ORCSS tem como principal objetivo a escalabilidade. Os seguintes pontos são o que fazem essa estrutura ser eficiente.

* **Arquivos componentizados**: Cada arquivo CSS tem apenas um objetivo especifico. Dessa forma é mais fácil entender o que cada arquivo representa apenas pelo seu nome e localização dentro das pastas.

* **Pequenos blocos de código**: Componentizando o CSS, consequentemente teremos arquivos com menos código. Isso resulta em uma manutenção de código mais simplificada com menos riscos de gerar conflitos de especificidade e código morto.
  
* **Código reutilizável**: Mais uma das vantagens da componentização é que podemos reaproveitar pequenos trechos de código, assim evitando código repetido.

* **Design System**: Seu CSS vai escalar com o Design System da empresa independente de quantos projetos ou marcas existam

## Estrutura de pastas

📂styles\
 ┣ 📂[tokens](tokens.md)\
 ┃ ┣ 📂[brands](tokens#📂-brands)\
 ┃ ┃ ┣ 📂default\
 ┃ ┃ ┃ ┣ 📜border.scss\
 ┃ ┃ ┃ ┣ 📜fonts.scss\
 ┃ ┃ ┃ ┗ 📜spacing.scss\
 ┃ ┃ ┃ ┣ 📁components\
 ┃ ┃ ┃ ┣ 📂[themes](tokens#📂-themes)\
 ┃ ┃ ┃ ┃ ┣ 📂default\
 ┃ ┃ ┃ ┃ ┃ ┣ 📜colors.scss\
 ┃ ┃ ┃ ┃ ┃ ┣ 📜colors_dark.scss\
 ┃ ┃ ┃ ┃ ┃ ┗ 📜colors_light.scss\
 ┃ ┣ 📂[components](tokens#📂-components)\
 ┃ ┣ 📂[global](tokens#📂-global)\
 ┣ 📂[tools](tools.md)\
 ┣ 📂[utils](utils.md)\
 ┣ 📂[global](global.md)\
 ┣ 📂[components](components.md)\
 ┣ 📂[pages](pages.md)