# Snippets
Snippets são como componentes, porém devem ser utilizados apenas dentro do próprio CSS. A única diferença entre snippets e componentes é o fato de que snippets não tem ligação direta com nenhum HTML. A decisão de que um código CSS vai se tornar um componente ou snippet depende totalmente do que for melhor para o projeto. O principal ponto sempre será se o código CSS precisa ser exclusivo de uma estrutura HTML ou não.

## Especificações
* Snippets são utilizados apenas dentro do CSS
* Sempre são formados por um placeholder. 
  * Placeholder é exatamente como uma classe, porém ele utiliza `%` no lugar de `.` e não é incluído na saída do CSS. 
  * Para mais detalhes é só clicar [aqui](https://sass-lang.com/documentation/style-rules/placeholder-selectors).
* Snippets sempre são incluídos em outras classes utilizando o @extend
* Não, você não deve criar CSS atômico aqui, alias, em nenhum lugar

## Exemplos
```scss
// snippets/containers.scss
%container {
	display: flex;
	max-width: 100%;
	width: $container-base;
	padding: $container-padding;
}
```

```scss
// pages/home.scss
@use 'snippets/containers.scss' as *;

.pageHome_container {
	@extend %container;
}
```