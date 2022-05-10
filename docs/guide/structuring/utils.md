# Utils
Utils são @mixins utilizados globalmente para reaproveitar código CSS.

## Regras
- São semelhantes aos snippets porém mais flexíveis. A diferença é que os utils podem receber parâmetros e retornar valores customizados.
- Aqui ficam apenas @mixins utilizados em mais de um arquivo.
  - Se um @mixin é utilizado apenas em um arquivo, então ele deve ficar no arquivo em que é utilizado e não nesta pasta. 

## Exemplos
Utilizando em um snippet
```scss
// utils/placeholderColor.scss
@mixin placeholderColor ($color) {
	&::input-placeholder {
		color: $color;
	}

	&::placeholder {
		color: $color;
	}
}

// snippets/inputs.scss
@use 'utils/placeholderColor.scss' as *;

@mixin input ($placeholderColor: $input-placeholder-color) {
	@include placeholderColor($placeholderColor);
}
```

Utilizando em uma página e dentro do próprio util
```scss
// utils/interactions.scss
@mixin blockInteractions () {
	&:not(:disabled):not(.is_disabled):not(.is_invalid):not(.is_valid) {
		@content;
	}
}

@mixin interaction_full () {
	@include blockInteractions {

		&:focus {
			@content;
		}

		@media (min-width: $media-tablet) {

			&:hover {
				@content;
			}
		}
	}
}

// pages/home.scss
@use 'utils/interactions.scss' as *;

.my_element {
	@include interaction_full {
		opacity: .75;
	}
}
```