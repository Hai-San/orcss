# Classes de estado
- São classes que representam o estado de um componente ou elemento. 
- São formadas por um verbo e um estado separados por um underline `_`
- O estado pode ser temporário ou fixo até que o usuário execute alguma ação.
- O estado não pode ser utilizado para criar variações de um componente.
  - Para isso são utilizadas as [classes de customização](customization-classes.md).
- Normalmente os estados são manipulados pelo javascript
- Sempre ficam aninhados em uma classe principal

Todos os estados citados são apenas exemplos e você pode criar seus próprios estados de acordo com a necessidade do projeto.

## Condição `is_`
Indica o estado atual de um componente ou elemento.
- Ativado - `.is_active`
- Desativado - `.is_disabled`
- Ligado - `.is_on`
- Desligado - `.is_off`
- Aberto - `.is_open`
- Fechado - `.is_closed`
- Carregando - `.is_loading`
- Carregado - `.is_loaded`

## Condição `has_`
Indica que o componente ou elemento possui um estado específico.
- Possui carregamento lento - `.has_lazy`
- Possui um erro - `.has_error`

## Condição `need_`
Indica quando o componente ou elemento necessita de uma condição específica.
- Precisa carregar - `.need_load`
- Precisa aguardar - `.need_wait`

## Condição `was_`
Indica quando o componente ou elemento atingiu uma determinada condição
- Foi enviado - `.was_sent`
- Foi aprovado - `.was_approved`

## Exemplos
```sass
.button {
	&.is_loading {
		opacity: 0.75;
	}

	&.is_loaded {
		background-color: green;
	}
}
```

### Com SASS
Se você estiver utilizando SASS, as classes de estado podem ser utilizadas como @mixins que recebem conteúdos e seus arquivos devem ficar dentro da pasta `styles/utils`. Assim se um dia você decidir mudar o nome de classe de uma condição, você só precisa alterar dentro do @mixin.

```sass
// utils/status.scss
@mixin active() {
    &.is_active {
        @content;
    }
}
```

```sass
// utils/status.scss v2.0
@mixin active() {
    &.is_enable {
        @content;
    }
}
```

```sass
// components/button.scss
.button {
	@include active {
		color: red;
	}
}
```


