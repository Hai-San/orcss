# Configurações do Stylelint no VSCode

[Extensão Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)


## Configuração no VSCode
```json
{
	"[css]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.stylelint": true
        }
    },
	"[scss]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.stylelint": true
        }
    },

	/*
	* Caso seja um framework você também deve aplicar a mesma configuração para a extensão de arquivo do framework.
	*/
	"[vue]": { // Extensão do arquivo
        "editor.codeActionsOnSave": {
            "source.fixAll.stylelint": true,
        },
    },

	/*
	* Adicionamos todas as extensões que o Stylelint deve validar 
	*/
	"stylelint.validate": [
		"css",
		"scss",
		"vue"
	]
}
```

## .stylelintrc.js
```javascript
module.exports = {
    plugins: [ 'stylelint-order', 'stylelint-scss' ],
    overrides: [
        {
            files: [ '*.vue', '**/*.vue' ],
            customSyntax: require('postcss-html')({
                css: 'postcss-safe-parser',
                scss: require('postcss-scss')
            }),
        }
    ],
    rules: {
        "scss/at-rule-no-unknown": true,
        'scss/at-extend-no-missing-placeholder': true,
        'scss/at-function-parentheses-space-before': 'always',
        'scss/at-mixin-parentheses-space-before': 'always',
        'scss/at-else-if-parentheses-space-before': 'always',
        'scss/at-else-closing-brace-space-after': 'always-intermediate',
        'scss/at-if-closing-brace-space-after': 'always-intermediate',
        'scss/dollar-variable-colon-space-after': 'always',
        'scss/double-slash-comment-whitespace-inside': 'always',
        'scss/operator-no-unspaced': true,
        'scss/declaration-nested-properties': 'never',
        'scss/selector-nest-combinators': 'always',
        'function-name-case': [
            'lower',
            {
                ignoreFunctions: [ /.*/, /^get.*$/ ], //Force camelCase
            },
        ],
        'rule-empty-line-before': 'always',
        'at-rule-empty-line-before': 'always',
        "at-rule-no-unknown": null,
        'declaration-block-trailing-semicolon': 'always',
        'block-no-empty': null,
        'value-keyword-case': 'lower',
        'function-name-case': 'lower',
        'number-leading-zero': 'never',
        'string-quotes': 'single',
        'comment-empty-line-before': [
            'always',
            {
                ignore: [ 'stylelint-commands', 'after-comment' ],
            },
        ],
        'max-empty-lines': 1,
        indentation: 'tab',
        'order/order': [
            'custom-properties',
            'dollar-variables',
            'at-rules',
            'declarations',
            'rules',
            {
                type: 'at-rule',
                name: 'include',
                hasBlock: true,
            },
            {
                type: 'at-rule',
                name: 'media',
                hasBlock: true,
            },
            {
                type: 'at-rule',
                name: 'content',
                hasBlock: false,
            }
        ],
        'order/properties-order': [
            [
                {
                    groupName: 'Position',
                    emptyLineBefore: 'always',
                    noEmptyLineBetween: true,
                    properties: [ 'position', 'top', 'right', 'bottom', 'left', 'z-index' ],
                },
                {
                    groupName: 'Display e modelo de caixa',
                    emptyLineBefore: 'always',
                    noEmptyLineBetween: true,
                    properties: [
                        'content',
                        'display',
                        'float',
                        'align-self',
                        'align-items',
                        'align-content',
                        'justify-content',
                        'flex',
                        'flex-basis',
                        'flex-direction',
                        'flex-flow',
                        'flex-grow',
                        'flex-shrink',
                        'flex-wrap',
                        'order',
                        'grid-area',
                        'grid-auto-columns',
                        'grid-auto-flow',
                        'grid-auto-rows',
                        'grid-column-end',
                        'grid-column-gap',
                        'grid-column-start',
                        'grid-column',
                        'grid-gap',
                        'grid-row-end',
                        'grid-row-gap',
                        'grid-row-start',
                        'grid-row',
                        'grid-template-areas',
                        'grid-template-columns',
                        'grid-template-rows',
                        'grid-template',
                        'grid',
                        'box-sizing',
                        'overflow',
                        'overflow-wrap',
                        'overflow-x',
                        'overflow-y',
                    ],
                },
                {
                    groupName: 'Medições e espaçamentos da caixa',
                    emptyLineBefore: 'always',
                    noEmptyLineBetween: true,
                    properties: [
                        'width',
                        'max-width',
                        'min-width',
                        'height',
                        'max-height',
                        'min-height',
                        'padding',
                        'padding-top',
                        'padding-bottom',
                        'padding-left',
                        'padding-right',
                        'margin',
                        'margin-top',
                        'margin-bottom',
                        'margin-left',
                        'margin-right',
                        'gap',
                    ],
                },
                {
                    groupName: 'Estilização da caixa',
                    emptyLineBefore: 'always',
                    noEmptyLineBetween: true,
                    properties: [
                        'appearance',
                        'opacity',
                        'visibility',
                        'color',
                        'background',
                        'background-blend-mode',
                        'background-clip',
                        'background-image',
                        'background-color',
                        'background-size',
                        'background-position',
                        'background-repeat',
                        'background-origin',
                        'filter',
                        'mix-blend-mode',
                        'border',
                        'border-collapse',
                        'border-width',
                        'border-style',
                        'border-color',
                        'border-radius',
                        'border-top',
                        'border-top-width',
                        'border-top-style',
                        'border-top-color',
                        'border-top-left-radius',
                        'border-top-right-radius',
                        'border-bottom',
                        'border-bottom-width',
                        'border-bottom-style',
                        'border-bottom-color',
                        'border-bottom-left-radius',
                        'border-bottom-right-radius',
                        'border-left',
                        'border-left-width',
                        'border-left-style',
                        'border-left-color',
                        'border-right',
                        'border-right-width',
                        'border-right-style',
                        'border-right-color',
                        'border-image',
                        'border-image-outset',
                        'border-image-repeat',
                        'border-image-source',
                        'border-image-slice',
                        'border-image-width',
                        'outline',
                        'outline-color',
                        'outline-offset',
                        'outline-style',
                        'outline-width',
                        'box-shadow',
                    ],
                },
                {
                    groupName: 'Textos',
                    emptyLineBefore: 'always',
                    noEmptyLineBetween: true,
                    properties: [
                        'font-family',
                        'font-kerning',
                        'font-language-override',
                        'font-size-adjust',
                        'font-size',
                        'font-stretch',
                        'font-style',
                        'font-synthesis',
                        'font-variant',
                        'font-variant-alternates',
                        'font-variant-caps',
                        'font-variant-east-asian',
                        'font-variant-ligatures',
                        'font-variant-numeric',
                        'font-variant-position',
                        'font-weight',
                        'tab-size',
                        'text-align',
                        'text-align-last',
                        'text-decoration',
                        'text-decoration-color',
                        'text-decoration-line',
                        'text-decoration-skip',
                        'text-decoration-style',
                        'text-indent',
                        'text-overflow',
                        'text-shadow',
                        'text-transform',
                        'text-underline-position',
                        'letter-spacing',
                        'line-height',
                        'columns',
                        'column-count',
                        'column-fill',
                        'column-gap',
                        'column-rule',
                        'column-rule-color',
                        'column-rule-style',
                        'column-rule-width',
                        'column-span',
                        'column-width',
                        'word-break',
                        'word-spacing',
                        'word-wrap',
                    ],
                },
                {
                    groupName: 'Transform, transition e animação',
                    emptyLineBefore: 'always',
                    noEmptyLineBetween: true,
                    properties: [
                        'transition',
                        'transition-delay',
                        'transition-duration',
                        'transition-property',
                        'transition-timing-function',
                        'transform',
                        'transform-origin',
                        'perspective',
                        'perspective-origin',
                        'animation',
                        'animation-delay',
                        'animation-direction',
                        'animation-duration',
                        'animation-fill-mode',
                        'animation-iteration-count',
                        'animation-name',
                        'animation-play-state',
                        'animation - timing - function',
                    ],
                },
                {
                    groupName: 'Outros',
                    emptyLineBefore: 'always',
                    noEmptyLineBetween: true,
                    properties: [ 'cursor', 'caret-color' ],
                }
            ],
            {
                unspecified: 'bottomAlphabetical',
                emptyLineBeforeUnspecified: 'always',
            },
        ],
    },
};

```