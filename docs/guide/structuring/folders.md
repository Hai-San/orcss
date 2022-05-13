# Estrutura de pastas

## Completa

📂styles\
┣ 📂[tokens](tokens.md)\
┃ ┣ 📂[brands](tokens#brands)\
┃ ┃ ┣ 📂default\
┃ ┃ ┃ ┣ 📜borders.scss\
┃ ┃ ┃ ┣ 📜fonts.scss\
┃ ┃ ┃ ┣ 📜spacings.scss\
┃ ┃ ┃ ┣ 📜layouts.scss\
┃ ┃ ┃ ┗ 📜others.scss\
┃ ┃ ┃ ┣ 📁components\
┃ ┃ ┃ ┣ 📂[themes](tokens#themes)\
┃ ┃ ┃ ┃ ┣ 📂default\
┃ ┃ ┃ ┃ ┃ ┣ 📜main.scss\
┃ ┃ ┃ ┃ ┃ ┣ 📜dark.scss\
┃ ┃ ┃ ┃ ┃ ┗ 📜light.scss\
┃ ┣ 📂[components](tokens#components)\
┃ ┣ 📂[global](tokens#global)\
┣ 📂[tools](tools.md)\
┣ 📂[snippets](snippets.md)\
┣ 📂[utils](utils.md)\
┣ 📂[global](global.md)\
┣ 📂[components](components.md)\
┣ 📂[pages](pages.md)

## Sem temas
Caso tenha apenas os temas dark e light

📂styles\
┣ 📂[tokens](tokens.md)\
┃ ┣ 📂[brands](tokens#brands)\
┃ ┃ ┣ 📂default\
┃ ┃ ┃ ┣ 📜borders.scss\
┃ ┃ ┃ ┣ 📜fonts.scss\
┃ ┃ ┃ ┣ 📜spacings.scss\
┃ ┃ ┃ ┣ 📜layouts.scss\
┃ ┃ ┃ ┣ 📜others.scss\
┃ ┃ ┃ ┣ 📁components\
┃ ┃ ┃ ┗ 📂[colors](tokens#themes)\
┃ ┃ ┃ ┃ ┣ 📜main.scss\
┃ ┃ ┃ ┃ ┣ 📜dark.scss\
┃ ┃ ┃ ┃ ┗ 📜light.scss\
┃ ┣ 📂[components](tokens#components)\
┃ ┣ 📂[global](tokens#global)\
┣ 📂[tools](tools.md)\
┣ 📂[snippets](snippets.md)\
┣ 📂[utils](utils.md)\
┣ 📂[global](global.md)\
┣ 📂[components](components.md)\
┣ 📂[pages](pages.md)

## Sem marcas
Caso os tokens não sejam utilizados por mais de uma marca

📂styles\
┣ 📂[tokens](tokens.md)\
┃ ┣ 📜borders.scss\
┃ ┣ 📜fonts.scss\
┃ ┣ 📜spacings.scss\
┃ ┣ 📜layouts.scss\
┃ ┣ 📜others.scss\
┃ ┣ 📂[themes](tokens#themes)\
┃ ┃ ┣ 📂default\
┃ ┃ ┃ ┣ 📜main.scss\
┃ ┃ ┃ ┣ 📜dark.scss\
┃ ┃ ┃ ┗ 📜light.scss\
┃ ┣ 📂[components](tokens#components)\
┣ 📂[tools](tools.md)\
┣ 📂[snippets](snippets.md)\
┣ 📂[utils](utils.md)\
┣ 📂[global](global.md)\
┣ 📂[components](components.md)\
┣ 📂[pages](pages.md)

## Sem marcas e temas
Caso os tokens não sejam utilizados por mais de uma marca e tenham apenas os temas dark e light

📂styles\
┣ 📂[tokens](tokens.md)\
┃ ┣ 📜borders.scss\
┃ ┣ 📜fonts.scss\
┃ ┣ 📜spacings.scss\
┃ ┣ 📜layouts.scss\
┃ ┣ 📜others.scss\
┃ ┣ 📂[colors](tokens#themes)\
┃ ┃ ┣ 📜main.scss\
┃ ┃ ┣ 📜dark.scss\
┃ ┃ ┗ 📜light.scss\
┃ ┣ 📂[components](tokens#components)\
┣ 📂[tools](tools.md)\
┣ 📂[snippets](snippets.md)\
┣ 📂[utils](utils.md)\
┣ 📂[global](global.md)\
┣ 📂[components](components.md)\
┣ 📂[pages](pages.md)

## Frameworks
Estrutura mais comum em frameworks modernos

📂styles\
┣ 📂[tokens](tokens.md)\
┣ 📂[tools](tools.md)\
┣ 📂[snippets](snippets.md)\
┣ 📂[utils](utils.md)\
┣ 📂[global](global.md)

## Mais pastas
Estrutura que tem arquivos mais específicos agrupados por pastas.

📂styles\
┣ 📂[tokens](tokens.md)\
┣ ┣ 📂borders\
┃ ┣ ┣ 📜widths.scss\
┃ ┣ ┣ 📜colors.scss\
┃ ┣ ┣ 📜radius.scss\
┃ ┣ ┣ 📜styles.scss\
┣ ┣ 📂fonts\
┃ ┣ ┣ 📜size.scss\
┃ ┣ ┣ 📜family.scss\
┃ ┣ ┣ 📜weight.scss\
┃ ┣ ┣ 📜lines.scss
