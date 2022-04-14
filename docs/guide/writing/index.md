# Escrita
Agora que já vimos como [categorizar](../categorization/index.md) uma estrutura HTML, é importante saber como as classes devem ser nomeadas e organizadas dentro do CSS.

## Dicas gerais
* Evite nomes atômicos e difíceis de entender
* Não utilize IDs ou tags para aplicar estilo, SEMPRE utilize classes. Isso diminui a probabilidade de conflitos de especificidade e facilita a manutenção.

---
## Nomenclatura
Estrutura de nomenclatura que devemos utilizar nos nomes de classes CSS
* Use `camelCase` para nomes com mais de uma palavra.
	```scss
	.card {
	}

	.blogCard {
	}

	.myBlogCard {		
	}
	```
	* Isso serve para IDs também, mesmo não sendo utilizado dentro do CSS.

* Elementos "filhos" sempre herdam o nome do elemento "pai". Utilize underline `_` para separar os nomes. Elementos pais são **páginas** e **componentes**.
  
	:heavy_check_mark: Correto
	- Especificidade baixa
	- Pouca repetição de código para responsividade

  	```html
	<li class="blogCard">
		<div class="blogCard_header">
			<h3 class="blogCard_title">
				Title
			</h3>
		</div>
		<p class="blogCard_tagName"></p>
	</li>
	```
	```scss
	.blogCard_header {
	}

	.blogCard_title {
	}

	.blogCard_tagName {
	}

	@media (max-width: 20rem) {
		.blogCard_title {
		}
	}
	```

	:x: Errado 
	- Especificidade muito alta
	- Mais difícil de manter
	- Temos que repetir a estrutura toda vez que é necessário ajustar o estilo em um tamanho de tela diferente `@media`

	```html
	<li class="blogCard">
		<div class="header">
			<h3 class="title">
				Title
			</h3>
		</div>
		<p class="tagName"></p>
	</li>
	```
	```scss
	.blogCard {
		> .header {		
			> .title {			
			}	
		}

		> .tagName {			
		}
	}

	@media (max-width: 20rem) {
		.blogCard {
			> .header {		
				> .title {			
				}	
			}
		}
	}
	```

* Podemos utilizar encadeamento de herança para evitar elementos com nome de classe duplicado.

	:heavy_check_mark: Correto
	- Baixa especificidade
	- Fácil de manter
	- Probabilidade de conflitos é muito menor
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
	```scss
	.blogCard_title {		
	}

	.blogCard_header_title {
	}
	```

	:x: Errado
	- Especificidade desnecessária
	- Mais difícil de manter
	- Probabilidade de conflitos é muito maior
	```html
	<li class="blogCard">
		<h2 class="blogCard_title">Title</h2>
		<div class="blogCard_header">
			<h3 class="blogCard_title">
				Title
			</h3>
		</div>
	</li>
	```
	```scss
	.blogCard {
		> .blogCard_title {		
		}
	}	

	.blogCard_header {
		.blogCard_title {			
		}
	}
	```

	:::tip
	O encadeamento de herança pode ser utilizado mesmo não existindo nomes duplicados dentro de um componente, porém dessa forma você estará criando nomes longos sem necessidade.
	:::

---
## Aninhamento
Utilizando o SASS é possível fazer aninhamento de classes. Essa funcionalidade é muito boa para deixar o CSS mais organizado e simples de entender. 

:::danger Atenção
Apesar do aninhamento ser muito bom, cuidado para não tornar isso um grande problema, pois fazer aninhamentos muito longos ou sem necessidade, acaba deixando o CSS com uma especificidade muito alta e consequentemente difícil de manter.
:::

* Não faça aninhamento de classes filhas
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

:heavy_check_mark: Correto 
- Baixa especificidade
- Mais clareza para leitura
- Completo aproveitamento sobre sistema de herança de nomes que é feito justamente para evitar os problemas citados acima
```scss
.blogCard {
}

.blogCard_title {
}

.blogCard_header {		
}

.blogCard_header_title {
}
```

:x: Errado
- Gera mais CSS
- Maior especificidade
- Grandes aninhamentos ficam difíceis de ler
- Classes modificadoras, filhos e seletores ficam todos juntos
  
```scss
.blogCard {
	.blogCard_title {
	}

	.blogCard_header {
		.blogCard_header_title {
		}
	}
}
```

:x: Errado
- Péssimo para leitura
  
```scss
.blogCard {
	&_title {
	}

	&_header {
		&_title {
		}
	}
}
```

## Classes modificadoras {#modifier-classes}
As classes modificadoras são classes utilizadas para criar diferentes variações de um componente.

#### Regras
- Possuem um hífen `-` como prefixo `-secondary` `-big`
- **SEMPRE** ficam aninhadas dentro da classe de um componente
```html
<button class="button -secondary -big">
	Submit
</button>
```
```scss
.button {
	color: $color-text-primary-button;

	padding: $padding-button;

	&.-secondary {	
		color: $color-text-secondary-button;
	}

	&.-big {
		padding: $padding-big-button;
	}
}	
```

## Estilos específicos
Estilos específicos acontecem quando um componente precisa de estilos que são unicamente feitos dentro de uma página ou outro componente.

#### Regras
- Evite o máximo que puder, sempre dê preferência para [classes modificadoras](#modifier-classes).
- Crie um nome de classe customizado formado pelo nome do elemento principal mais o nome do componente filho.
  - Páginas: `pageHome` + `featuredPosts` = `pageHome_featuredPosts`.
  - Componentes: `featuredPosts` + `blogCard` = `featuredPosts_blogCard`.
- Nestes casos é obrigatório o aninhamento das classes do componente dentro da classe customizada para ter um grau de especificidade maior. Assim não teremos conflitos com os estilos originais.

### Container
Existem casos onde não é possível modificar a estrutura HTML do componente. Nesses casos você deve criar um elemento container e nomear ele com a classe customizada. Em seguida insira o componente dentro do elemento container e faça todas as alterações a partir da classe do container.

Componente dentro de uma página
```html
<body class="pageHome"> <!-- Page -->
	<aside class="pageHome_aside">
		<div class="pageHome_featuredPosts"> <!-- Container -->
			<section class="featuredPosts"> <!-- Component -->
				<h2 class="featuredPosts_title">featuredPosts title</h2>
			</section>
		</div>
	</aside>
</body>
```
```scss
// pageHome.scss
.pageHome_aside {
}

.pageHome_featuredPosts { // Container
	margin-top: 12px;

	.featuredPosts { // Component class
		background-color: red;
	}

	.featuredPosts_title { // Component class
		font-weight: 600;
	}
}	
```

Componente dentro de outro componente
```html
<section class="featuredPosts"> <!-- Component -->
	<h2 class="featuredPosts_title">featuredPosts title</h2>
	<ul class="featuredPosts_list">
		<div class="featuredPosts_blogCard"> <!-- container -->
			<li class="blogCard"> <!-- child component -->
				<h2 class="blogCard_title">Title</h2>
				<div class="blogCard_header">
					<h3 class="blogCard_header_title">
						Title
					</h3>
				</div>
			</li>
		</div>
	</ul>
</section>
```
```scss
// featuredPosts.scss
.featuredPosts_list {
}

.featuredPosts_blogCard { // Container
	margin-top: 12px;

	.blogCard { // Component class
		background-color: red;
	}

	.blogCard_header_title { // Component class
		font-weight: 600;
	}
}	
```
### Direto
Não é necessário criar o elemento container para casos onde é possível mexer na estrutura do componente. Nesses casos você pode inserir a classe customizada direto no elemento principal do componente. As regras permanecem as mesmas.

```html
<section class="featuredPosts"> <!-- Component -->
	<h2 class="featuredPosts_title">featuredPosts title</h2>
	<ul class="featuredPosts_list">
		<li class="blogCard featuredPosts_blogCard"> <!-- child component + custom class -->
			<h2 class="blogCard_title">Title</h2>
			<div class="blogCard_header">
				<h3 class="blogCard_header_title">
					Title
				</h3>
			</div>
		</li>
	</ul>
</section>
```
```scss
// featuredPosts.scss
.featuredPosts_list {
}

.featuredPosts_blogCard { // Component custom class
	margin-top: 12px;

	&.blogCard { // Component class
		background-color: red;
	}

	.blogCard_header_title { // Component class
		font-weight: 600;
	}
}	
```

### Frameworks
Nas estruturas atuais é possível importar os componentes e inserir dentro da página, dessa forma não temos o HTML do componente diretamente dentro do HTML da página, assim não podemos atribuir um nome de classe diretamente ao componente e criar um container é uma forma mais simples. 

Caso você queira inserir de forma direta, você pode criar uma propriedade `const customClass = ''` dentro do componente, essa propriedade seria inserida dentro do atributo `class` do componente. Em seguida, dentro da página onde o componente foi inserido, passamos o nome da classe como valor da propriedade criada `customClass="pageHome_featuredPosts"`. A forma como isso pode ser feito varia de acordo com o framework utilizado, mas a lógica é a mesma.

## Interação com Javascript
Muitas vezes alguns elementos são utilizados dentro do javascript e precisamos de alguma referência para trabalhar com o elemento.

#### Seleção única
Como já dito antes, não devemos utilizar IDs para aplicar estilos CSS, porém eles são essenciais para criar identificadores únicos em elementos e são ótimo para trabalhar dentro do javascript quando precisamos selecionar um único elemento. Então, sempre utilize o atributo `id=""` para selecionar elementos únicos no seu projeto utilizando javascript.

```html
<button id="pageHome_submitButton" class="button -secondary -big">
	Submit
</button>
```

#### Seleção múltipla
Para trabalhar com seleções múltiplas, nós devemos criar classes com o prefixo `js-` seguido do nome da classe: `js-blogCard` `js-card`

* Esse tipo de classe não envolve alteração de estilos do elemento pelo javascript. São classes utilizadas para manipulação da DOM (loops, inserts, remove etc...)
* Classes com o prefixo `js-` são utilizadas apenas no javascript, não aplique estilos utilizando esse tipo de classe.
  * Isso facilita a manutenção, pois se o nome da classe precisar ser alterado você vai saber exatamente onde o código vai ser afetado.
  
```html
<li class="blogCard js-blogCard">
</li>
```