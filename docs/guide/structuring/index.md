# Estruturação

## Sobre

O modelo de estrutura de pastas e arquivos utilizado no ORCSS tem como principal objetivo a escalabilidade. Os seguintes pontos são o que fazem essa estrutura ser eficiente.

* **Arquivos separados por função:** Cada arquivo CSS tem apenas um função. Dessa forma é mais fácil entender o que cada arquivo representa apenas pelo seu nome e localização dentro das pastas.
* **Arquivos menores:** Quando temos arquivos com menos código, consequentemente é mais simples aplicar alterações sem gerar conflitos de especificidade e código morto.
* **Código reutilizável:** Podemos evitar um projeto inchado podendo reaproveitar pequenos trexos de código.
  - Não estamos falando de CSS atômico. Nada de criar uma classe para apenas um atributo CSS.
  - O foco aqui é reutilizar grupos de atributos que se repetem em várias partes do projeto.
  - Normalmente este tipo de código fica dentro da pasta [utils](/guide/structuring/utils.md).
* **Preparado para um design system:** Seu CSS vai escalar com o Design System da empresa independente de quantos projetos ou marcas existam
* **CSS padrão:** Utilizando o CSS padrão temos os seguintes benefícios:
  * **Simplicidade:** Não precisamos aprender milhares de nomes de classe CSS que utilitários e frameworks CSS criam. Utilizamos a forma universal do CSS que todos conhecem.
  * **Controle:** Você vai ter controle sobre seu código CSS e não vai depender da manutenção de terceiros para fazer modificações.
  * **Código limpo:** Tendo um CSS puro você não vai ter problemas com a "salada" de código CSS puro misturado com classes de um utilitário. Se você for muito azarado ainda vai ter mais um framework qualquer ali misturado para complicar ainda mais sua vida.

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