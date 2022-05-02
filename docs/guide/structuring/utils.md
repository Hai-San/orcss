# Utils
Util são pequenos componentes que podem ser utilizados apenas dentro do próprio CSS

## Regras
- Jamais serão utilizados diretamente no HTML
- Sempre serão formados por um placeholder. Placeholder é exatamente como uma classe, porém ele utiliza `%` no lugar de `.` e não é incluído na saída do CSS. Para mais detalhes é só clicar [aqui](https://sass-lang.com/documentation/style-rules/placeholder-selectors).
- Sempre serão incluídos em outras classes utilizando o `@extend`
- Não, você não deve criar CSS atômico aqui, alias, em nenhum lugar

```scss
// utils/containers.scss
%container {
	display: flex;
	max-width: 100%;
	width: $container-base;
	padding: $container-padding;
}
```

```scss
// pages/home.scss
@use 'utils/containers.scss' as *;

.pageHome_container {
	@extend %container;
}
```