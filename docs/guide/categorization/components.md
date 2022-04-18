# Componentes
Da mesma forma que as páginas são únicas em um projeto também não existirão dois componentes iguais, caso existir, alguma coisa foi mal pensada. Dessa forma, o nome do componete pode ser utilizado como classe CSS e assim teremos uma classe única no projeto. Componentes são blocos de código HTML que podem ser reutilizados em várias partes do projeto e é essencial que suas classes sejam únicas, pois caso não sejam, isso pode gerar conflitos com estilos de páginas e outros componentes.

Características:
- Deve ter uma classe principal com um nome exclusivo que não herda o nome de nenhum outro elemento.
- Todos os elementos dentro de um componente herdam seu nome.
- Possuem um CSS exclusivo.

```html
<section class="featuredPosts">
	<div class="featuredPosts_container">
		<div class="featuredPosts_header">
			<h1 class="featuredPosts_title">featured posts</h1>
			<p class="featuredPosts_description">featured posts description</p>
		</div>

		<ul class="featuredPosts_list">
		</ul>
	</div>
</section>
```