# O que você vai precisar
Para aplicar o ORCSS de uma forma mais eficiente você vai precisar de algumas ferramentas auxiliares que simplificam o trabalho e trazem ótimos beneficios dentro do CSS.

Se antes preferir entender como o ORCSS funciona, comece por [aqui](../categorization/).

## SASS
O pre-processador SASS (Dart) é essencial para que possamos organizar os estilos CSS em vários arquivos menores. Consequentemente ganhamos outros benefícios que ele trás e que otimizam muito o fluxo de trabalho com o CSS. 

Não se preocupe se nunca utilizou SASS, aqui ele será utilizado da forma mais simples possível, sem a necessidade de criação de `@mixins` ou `functions` gigantescas cheias de logica como um javascript. O objetivo é utilizar apenas algumas coisas que simplificam o trabalho com o CSS.

A forma que o SASS é configurado varia muito de acordo com a tecnologia que é utilizada no projeto, porém é padrão a instalação do SASS por um gerenciador de pacotes utilizando o seguinte comando `npm i -D sass`.

Para mais detalhes e ver tudo que o SASS pode oferecer olhe [Documentação oficial](https://sass-lang.com/dart-sass)

## Stylelint
O StyleLint é um Linter CSS essencial para manter o CSS organizado e aplicar correções de forma automática. Dessa forma otimizamos o fluxo de trabalho e não teremos problemas com cada desenvolvedor escrevendo o CSS de um jeito diferente.

Para saber como configurar o Stylelint em seu projeto e aplicar os padrões do ORCSS é só seguir o [Guia de configuração](../settings/stylelint.md).

[Documentação oficial](https://stylelint.io/)\
[Integração com editores](https://stylelint.io/user-guide/integrations/editor)

:::info Observação
Essa lista pode ser alterada de acordo com a evolução das soluções no mercado.
:::