# Nomenclatura
Regras que devemos utilizar para criar os nomes das classes CSS.

## CamelCase
Use `camelCase` para nomes com mais de uma palavra.

```scss
.card {
}

.blogCard {
}

.myBlogCard {		
}
```
- Isso serve para IDs também, mesmo não sendo utilizado dentro do CSS.

## Herança
Elementos "filhos" sempre herdam o nome do elemento "pai". Utilize underline `_` para separar os nomes. Elementos pais são **páginas** e **componentes**.

Os elementos filhos também seguem as mesmas regras de camelCase para nomes com mais de uma palavra.

### Benefícios
- Especificidade baixa
- Pouca repetição de código para responsividade

### Exemplos
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

### Não faça isso!
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
## Ecadeamento
Podemos utilizar encadeamento de herança para evitar elementos com nome de classe duplicado.

### Benefícios
- Baixa especificidade
- Fácil de manter
- Probabilidade de conflitos é muito menor

### Exemplos
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
O encadeamento de herança pode ser utilizado mesmo não existindo nomes duplicados dentro de um componente, porém dessa forma você estará criando nomes longos sem necessidade.
:::