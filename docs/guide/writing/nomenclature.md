# Nomenclatura
Regras que devemos utilizar para criar os nomes das classes CSS.

## Nome
- Nomes podem ser formados por mais de uma palavra.
- Use `camelCase` para destacar múltiplas palavras em um mesmo nome.
- Isso serve para IDs também, mesmo não sendo utilizados dentro do CSS.

```scss
.card {
}

.blogCard {
}

.myBlogCard {		
}
```

## Nome por herança
- São classes de elementos que herdam o nome da classe de um elemento superior. 
- Elementos superiores podem ser [páginas](../categorization/pages.md), [componentes](../categorization/components.md) ou [blocos](../categorization/blocks.md).
- Utilize underline `_` para indicar que a classe está herdando um nome.

### Benefícios
- Especificidade baixa
- Pouca repetição de código para responsividade

### Exemplos
```html
<li class="blogCard"> <!-- componente -->
	<div class="blogCard_header"> <!-- bloco de estruturação -->
		<h3 class="blogCard_title"> <!-- unidade -->
			Title
		</h3>
	</div>
	<p class="blogCard_tagName"></p> <!-- unidade -->
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

### Não faça isso!
- Especificidade muito alta
- Mais difícil de manter
- Repete a estrutura toda vez que é necessário ajustar a responsividade.

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
## Encadeamento
Utilize encadeamento de herança para evitar elementos com nome de classe duplicado.

### Benefícios
- Baixa especificidade
- Fácil de manter
- Probabilidade de conflitos é muito menor

### Exemplos
```html
<li class="blogCard"> <!-- componente -->
	<h2 class="blogCard_title">Title</h2> <!-- unidade -->
	<div class="blogCard_header"> <!-- bloco hereditário -->
		<h3 class="blogCard_header_title"> <!-- unidade -->
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
### Não faça isso!
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
O encadeamento de herança pode ser utilizado mesmo não tendo a possibilidade de existirem nomes de classe duplicados, porém dessa forma você estará criando nomes longos sem necessidade.
:::