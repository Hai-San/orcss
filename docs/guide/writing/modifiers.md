# Classes modificadoras {#modifier-classes}
As classes modificadoras são classes utilizadas para criar diferentes variações de um componente.

## Características
- Possuem um hífen `-` como prefixo `-secondary` `-big`
- **SEMPRE** ficam aninhadas dentro da classe de um componente

## Exemplo
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