# Classes de customização
As classes de customização são utilizadas para criar uma ou mais variações de um componente ou elemento especifico.

Essas classes podem ser criadas de duas formas:

## Classes Modificadores
São pequenas classes aninhadas dentro da classe principal do componente e inseridas na estrutura HTML de acordo com as necessidades.

### Características
* Possuem um hífen `-` como prefixo `-secondary` `-big`
* **SEMPRE** ficam aninhadas dentro de uma classe principal

### Benefícios
* É mais simples
* Gera menos CSS
* Funciona muito bem com CSS puro

### Desvantagens
* Contém sobreposição de código
* Possuem um código compartilhado

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

## Classes de composição
São formadas pelo nome do componente junto com o nome das classes modificadoras.

### Características
- É formado por um nome de classe único
- Funciona melhor com SASS, pois o uso de `@mixins` diminui a repetição de código
  
### Benefícios
- Evita aninhamento
- Evita sobreposição de código
- Possui código exclusivo
  
### Desvantagens
- É mais trabalhoso
- Gera mais CSS
  
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