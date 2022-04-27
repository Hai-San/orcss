# Tokens
Os tokens são variáveis que vem do design system e servem para padronizar informações referente ao design do projeto. Essas informações normalmente são cores, espaçamentos, tamanhos, fontes e bordas. Um conjunto de tokens pode ser utilizado para crianção de componentes e páginas inteiras.

Dentro do CSS os tokens são vistos como variáveis e ajudam muito na organização e padronização do projeto. Também tornam a sincronização entre equipes de design e desenvolvedores muito mais simples.

## Tipos
Os tokens podem ser separados em 2 categorias:

### 1 - Core
São os tokens que armazenam os valores brutos

```scss
--color-primary-base: #5523c9;
--color-primary-dark: #4012ac;
--color-primary-medium: #5f2ada;
--color-primary-light: #7d4af3;

--color-neutral-low-base: #000000;

--color-neutral-high-base: #FFFFFF;

--font-size-px-xs: 16px;

--border-radius-sm: 4px;

--border-width-sm: 1px;

--spacing-px-xs: 16px;
--spacing-px-sm: 20px;
```
  
### 2 - Shortcuts
São tokens que possuem como valor os tokens `core`, eles são necessários para facilitar a manutenção do código. O principal objetivo deles é reduzir a quantidade de modificações feitas no código CSS, focando as alterações apenas nos valores utilizados pelos tokens `shortcuts`. Também são ótimos para projetos que possuem temas variados. Os shortcuts se dividem em dois tipos:
- **Layout**: Tokens globais que podem ser utilizados em vários pontos do projeto.
	```scss
	--color-text: var(--color-primary-base);
	--color-text-foreground: var(--color-neutral-high-base);

	--color-background: var(--color-neutral-high-base);
	--color-background-foreground: var(--color-neutral-low-base);
	```
- **Componentes**: Tokens que são criados exclusivamente para cada componente.
	```scss
	--button-color: var(--color-neutral-high-base);
	--button-color-hover: var(--color-primary-base);

	--button-background: var(--color-primary-base);
	--button-background-hover: var(--color-neutral-high-base);

	--button-border-size: var(--border-width-sm);
	--button-border-color: var(--color-neutral-high-base);
	--button-border-color-hover: var(--color-primary-base);

	--button-font-size: var(--font-size-px-xs);
	
	--button-padding: var(--spacing-px-xs) var(--spacing-px-sm);
	```


## Nomenclatura
Para que os tokens mantenham um mesmo padrão nos nomes é indicado que seja criado uma estrutura de nomenclatura para os tokens. Muitas pessoas se perdem aqui e criam nomes super longos pensando apenas na parte de design, mas esquecem que cada um desses tokens vai ser escrito centenas de vezes no código, então eles precisam ser simples.

### Core

### Layout

propriedade-variação-escala-componente-propriedade-estado

color-primary-default

color-primary-default-button-text

color-primary-default-button-text-hover

### Componente
Tokens de componente seguem o mesmo padrão dos tokens globais, porém iniciam o nome com o nome do componente.

componente-tipo-variação-escala-componente-propriedade-estado

### Dicas
* Não crie tokens com nomes relacionados ao valor do token, pois se em algum momento o valor do token precisar ser alterado o nome do token também terá que mudar e isso acaba demandando muito mais trabalho.

:x: Errado

```scss
:root {
	--color-primary-purple: purple;
}

.darkTheme {
	--color-primary-purple: blue;
}
```

:heavy_check_mark: Correto

```scss
:root {
	--color-primary-main: purple;
}

:root {
	--color-primary-base: purple;
}

:root {
	--color-primary-pure: purple;
}

:root {
	--color-primary-default: purple;
}

.darkTheme {
	--color-primary-main: red;
	--color-primary-base: blue;
	--color-primary-pure: yellow;
	--color-primary-default: green;
}
```

* Comece o nome do token sempre referenciando ao TIPO de valor que ele armazena. Isso facilita o processo de desenvolvimento, pois cria maior afinidade entre propriedade e valor. Isso pode parecer meio desnecessário, porém quando você inicia em uma nova empresa ou até mesmo um novo projeto, esse estilo de nomenclatura diminui a curva de aprendizado, pois será mais fácil lembrar o nome das variáveis pelo fato da primeira palavra estar ligada ao nome da propriedade CSS.
  
:x: Errado

```scss
:root {
	--primary-color-main: purple;
}

.pageHome_title {
	color: var(--primary-color-main);
}
```

:heavy_check_mark: Correto

```scss
:root {
	--color-primary-main: purple;
}

.pageHome_title {
	color: var(--color-primary-main);
	background-color: var(--color-primary-main);
	border-color: var(--color-primary-main);
}
```