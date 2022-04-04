# Utils

Util são pequenos componentes que podem ser utilizados apenas dentro do próprio CSS

## Regras importantes:

- Jamais serão utilizados diretamente no HTML
- Sempre serão formados por um placeholder. Placeholder é exatamente como uma classe, porém ele utiliza `%` no lugar de `.` e não é incluído na saída do CSS. Para mais detalhes é só clicar [aqui](https://sass-lang.com/documentation/style-rules/placeholder-selectors).
- Sempre serão incluídos em outras classes utilizando o `@extend`
- Não, você não deve criar CSS atômico aqui, alias, em nenhum lugar