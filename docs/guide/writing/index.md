# Escrita
Regras gerais de como as classes devem ser nomeadas e organizadas dentro do CSS.

## Nomenclatura
* Os nomes podem ser formados por mais de uma palavra e quando isso acontecer, utilize camelCase
	```css
	.card {
	}

	.blogCard {
	}

	.myBlogCard {		
	}
	```

* Em alguns casos o elemento filho herda o nome da classe pai. Quando isso acontecer os nomes serão separados por um underline `_`. 
  	```html
	<li class="blogCard">
		<div class="blogCard_header">
		</div>
		<p class="blogCard_tagName"></p>
	</li>
	```
	```css
	.blogCard_header {
	}

	.blogCard_tagName {
	}
	```
* Também podemos ter um encadeamento de herança, neste caso elemento filho vai herdar o nome do elemento pai, que também já herdou o nome do elemento pai dele. O Encadeamento de herança normalmente é utilizado para evitar a repetição de nomes dentro de um mesmo componente
	```html
	<li class="blogCard">
		<h2 class="blogCard_title">Title</h2>
		<div class="blogCard_header">
			<h3 class="blogCard_header_title">
				Title
			</h3>
		</div>
	</li>
	```
	```css
	.blogCard_title {		
	}

	.blogCard_header_title {
	}
	```
  * Em muitos casos o encadeamento de herança é desnecessário, pois não existe a possibilidade de nomes serem repetidos dentro do mesmo componente. Nesses casos os elementos sempre herdarão o nome do componente.
	```html
	<li class="blogCard">
		<div class="blogCard_header">
			<h3 class="blogCard_title">
				Title
			</h3>
		</div>
	</li>
	```
	```css
	.blogCard_header {
	}

	.blogCard_title {
	}
	```

## Aninhamento
Utilizando o SASS é possível fazer aninhamento de classes. Essa funcionalidade é muito boa para deixar o CSS mais organizado e simples de entender. 

:::danger Observação
Apesar do aninhamento ser muito bom, muitos desenvolvedores tornam isso um grande problema, pois fazem aninhamentos muito longos e extremamente desnecessários. Isso acaba deixando o CSS com uma especificidade muito alta e consequentemente difícil de manter. Então preste muita atenção nas dicas que serão dadas nesta sessão.
:::