# Aninhamento
Utilizando o SASS é possível fazer aninhamento de classes. Essa funcionalidade é muito boa para deixar o CSS mais organizado e simples de entender. 

:::danger Atenção
Apesar do aninhamento ser muito bom, cuidado para não tornar isso um grande problema, pois fazer aninhamentos muito longos ou sem necessidade, acaba deixando o CSS com uma especificidade muito alta e consequentemente difícil de manter.
:::

## Quando utilizar?
Normalmente o aninhamento é normal para pseudo-classes, pseudo-elementos, valores de atributos, [classes modificadoras](modifiers.md) e [estilos específicos](specific-styles.md). Nos casos de seletores por tag, id e classes filhas tente evitar ao máximo. O objetivo é que o aninhamento seja utilizado para casos realmente necessários e seja evitado sempre que possível.

## Exemplos
Como podemos utilizar o aninhamento de forma correta.

Principais benefícios:
- Baixa especificidade
- Mais clareza para leitura
- Evita repetição de código

```html
<li class="blogCard">
	<h2 class="blogCard_title">Title</h2>
	<div class="blogCard_header">
		<h3 class="blogCard_header_title">
			Title
		</h3>
	</div>
	<div class="blogCard_description">
		<p>...</p>
		<p>
			<b>...</b>
			<span>...</span>
		</p>
	</div>
</li>
```
### Elementos filhos
- Completo aproveitamento sobre sistema de herança de nomes
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

### Tags
- Tags sempre devem ser aninhadas
- Sempre dê preferência para classes
```scss
.blogCard_description {
	p {
		...
	}
}
```

### Pseudo-classes
```scss
.blogCard {
	&:focus,
	&:hover {

	}
}
```

### Pseudo-elementos
```scss
.blogCard_header_title {
	&::after {
		content: "→";
	}
}
```

### [Classes modificadoras](modifiers.md)

### [Estilos específicos](specific-styles.md)

## Não faça isso!

Os exemplos abaixo podem causar os seguintes problemas:
- Gera mais CSS
- Maior especificidade de forma desnecessária
- Mais dicifuldade para manter o código
- Grandes aninhamentos ficam difíceis de ler
- Classes modificadoras, filhos e seletores ficam todos juntos

### Reaproveitamento de nomes
- Péssimo para leitura
- Torna inútil a herança de nomes que é feita para evitar aninhamento e facilitar a leitura
  
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

### Elementos filhos
Não aninhe classes de elementos filhos. O css não precisa seguir a mesma estrutura do HTML em questão de aninhamento    
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

### Super aninhamento
    
```scss
.blogCard {
	.blogCard_description {
		p {
			span {

			}
		}
	}
}
```
* Exemplo correto
	```scss
	.blogCard {
	}

	.blogCard_description {
		p {		
		}
		span {
		}
	}
	```


