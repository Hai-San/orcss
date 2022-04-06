# O que você vai precisar

[[toc]]

## SASS (Dart)
O pre-processador SASS (Dart) é essencial para que possamos organizar os estilos CSS em vários arquivos menores e consequentemente ganhamos todos os outros benefícios que ele trás, que otimizam muito o fluxo de trabalho com o CSS. 

Não precisa ficar preocupado se você nunca usou SASS, vou usar da forma mais simples possível, sem a necessidade de criação de mixins ou funções gigantescas cheias de logica como um javascript. O objetivo é utilizar apenas algumas coisas que simplificam o trabalho com o CSS.

[Documentação oficial](https://sass-lang.com/dart-sass)

## StyleLint
O StyleLint é um Linter CSS essencial para manter o CSS organizado e aplicar correções de forma automática. Dessa forma otimizamos o fluxo de trabalho e não teremos problemas com cada desenvolvedor escrevendo o CSS de um jeito diferente.

[Documentação oficial](https://stylelint.io/)
[Integração com editores](https://stylelint.io/user-guide/integrations/editor)

* Alguns plugins são necessários para deixar o stylelint mais completo
  - [stylelint-order](https://github.com/hudochenkov/stylelint-order#readme)
  - [stylelint-scss](https://github.com/stylelint-scss/stylelint-scss#readme)

* Para integração com Frameworks você vai precisar de alguns plugins extras. Esses plugins vão permitir o linter trabalhar dentro de arquivos que não possuem apenas css.
  - [postcss-scss](https://github.com/postcss/postcss-scss#readme)
  - [postcss-safe-parser](https://github.com/postcss/postcss-safe-parser#readme)
  - [postcss-html](https://github.com/ota-meshi/postcss-html#readme)