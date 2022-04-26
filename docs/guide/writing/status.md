# Classes de condição
- São classes que representam a condição de um componente ou elemento. 
- Essa condição pode ser temporária ou fixa até que o usuário execute alguma ação.
- Não é utilizado para criar variações de um componente, para isso são utilizadas as [classes modificadoras](modifiers.md).
- As próprias classes modificadoras podem conter classes de condição
- Normalmente as condições são manipuladas pelo javascript
- Sempre ficam aninhadas em uma classe principal

Todas as condições citadas são apenas exemplos e você pode criar suas próprias condições de acordo com a necessidade do projeto.

## Condições `is_`
Indica a condição atual de um componente ou elemento.
- Ativado - `.is_active`
- Desativado - `.is_disabled`
- Ligado - `.is_on`
- Desligado - `.is_off`
- Aberto - `.is_open`
- Fechado - `.is_closed`
- Carregando - `.is_loading`
- Carregado - `.is_loaded`

## Condições `has_`
Indica quando o componente ou elemento possui uma condição específica.
- Possui carregamento - `.has_loading`
- Possui carregamento lento - `.has_lazy`
- Possui um erro - `.has_error`

## Condições `need_`
Indica quando o componente ou elemento necessita de uma condição específica.
- Necessita carregar - `.need_load`
- Necessita aguardar - `.need_wait`

## Condições `was_`
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
Se você estiver utilizando SASS, as classes de condições podem ser utilizadas como @mixins que recebem conteúdos e seus arquivos devem ficar dentro da pasta `styles/tools`. Assim se um dia você decidir mudar o nome de classe de uma condição, você só precisa alterar dentro do @mixin.

```sass
// tools/status.scss
@mixin active() {
    &.is_active {
        @content;
    }
}
```

```sass
// tools/status.scss v2.0
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


