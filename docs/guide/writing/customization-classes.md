# Classes de customização
As classes de customização são utilizadas para criar uma ou mais variações de um componente ou elemento especifico.

Essas classes podem ser criadas de duas formas:

## Modificadores
São pequenas classes aninhadas dentro da classe principal do componente e inseridas na estrutura HTML de acordo com as necessidades.

### Caracteristicas
- Possuem um hífen `-` como prefixo `-secondary` `-big`
- **SEMPRE** ficam aninhadas dentro de uma classe principal
- Contém sobreposição de código
- Possuem um código compartilhado
- É mais simples
- Gera menos CSS
- Funciona muito bem com CSS puro

### Exemplo
```html
<button class="button">
	Submit
</button>

<button class="button -big">
	Submit
</button>

<button class="button -secondary -big">
	Submit
</button>
```
```scss
.button {
	display: flex;
    align-items: center;
    justify-content: center;

	max-width: 100%;
	padding: $button-padding;

	color: $button-color;

	&.-secondary {	
		color: $button-color-secondary;
	}

	&.-big {
		padding: $button-padding-big;
	}
}	
```

## Clones
São formadas pelo nome do componente junto com o nome das classes modificadoras.

### Caracteristicas
- Evitam aninhamento
- Evitam sobreposição de código
- Possuem um código exclusivo
- É mais trabalhoso
- Gera mais CSS
- Funciona melhor com SASS, pois o uso de `@mixins` diminui a repetição de código

### Exemplo
```html
<button class="button">
	Submit
</button>

<button class="button_big">
	Submit
</button>

<button class="button_secondary">
	Submit
</button>

<button class="button_secondary_big">
	Submit
</button>
```
```scss
.button {
	display: flex;
    align-items: center;
    justify-content: center;

	max-width: 100%;
	padding: $button-padding;

	color: $button-color;
}	

.button_big {
	display: flex;
    align-items: center;
    justify-content: center;

	max-width: 100%;
	padding: $button-padding-big;

	color: $button-color;
}

.button_secondary {
	display: flex;
    align-items: center;
    justify-content: center;

	max-width: 100%;
	padding: $button-padding;

	color: $button-color-secondary;
}

.button_secondary_big {	
	display: flex;
    align-items: center;
    justify-content: center;

	max-width: 100%;
	padding: $button-padding-big;

	color: $button-color-secondary;
}
```

#### Com @mixins
```scss
@mixin button_style(
    $color: $button-color,
) {
	display: flex;
    align-items: center;
    justify-content: center;

	max-width: 100%;

	color: $color;
}

@mixin button_size(
    $padding: $button-padding,
) {
	padding: $padding;
}

.button {
	@include button_style;
	@include button_size;
}	

.button_big {
	@include button_style;
	@include button_size(
		$padding: $button-padding-big
	);
}

.button_secondary {
	@include button_style(
		$color: $button-color-secondary
	);
	@include button_size;
}

.button_secondary_big {	
	@include button_style(
		$color: $button-color-secondary
	);

	@include button_size(
		$padding: $button-padding-big
	);
}
```