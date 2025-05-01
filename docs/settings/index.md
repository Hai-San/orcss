# Configurações

Cada projeto possui suas particularidades. Aqui estão as principais informações sobre as ferramentas necessárias e como configurá-las. No entanto, podem haver variações de acordo com cada projeto. Faça as adaptações necessárias e peça ajuda, se precisar.

Forneci os links oficiais de cada ferramenta. Acesse-os e siga as instruções de instalação e configuração.

## Linters
Primeiro, é necessário configurar os linters para garantir que o código siga um padrão, evitando que cada desenvolvedor escreva de forma diferente.

Os linters recomendados são:

- [Stylelint](https://stylelint.io/)
- [Prettier](https://prettier.io/)

## Extensões
Instale também as extensões necessárias na sua IDE:

- [Stylelint](https://marketplace.visualstudio.com/items/?itemName=stylelint.vscode-stylelint)
- [Sass](https://marketplace.visualstudio.com/items/?itemName=Syler.sass-indented)
- [EditorConfig](https://marketplace.visualstudio.com/items/?itemName=EditorConfig.EditorConfig)

## Outros Pacotes

Para automatizar o processo de verificação do código e analisar apenas os arquivos modificados, utilize:

- [husky](https://typicode.github.io/husky/)
- [lint-staged](https://github.com/lint-staged/lint-staged)

## Arquivos de Configuração

Nos exemplos abaixo, utilizo o [Vue.js](https://vuejs.org/), mas você pode adaptá-los para outras bibliotecas ou frameworks.

::: code-group
```js [.stylelintrc.mjs]
export default {
  plugins: ['stylelint-order', 'stylelint-scss', 'stylelint-prettier'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      extends: ['stylelint-config-html/vue'],
    },
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['*.scss', '**/*.scss', '*.vue', '**/*.vue'],
      rules: {
        'scss/at-rule-no-unknown': true,
        'scss/at-extend-no-missing-placeholder': true,
        'scss/at-else-if-parentheses-space-before': 'always',
        'scss/at-else-closing-brace-space-after': 'always-intermediate',
        'scss/at-if-closing-brace-space-after': 'always-intermediate',
        'scss/dollar-variable-colon-space-after': 'always',
        'scss/double-slash-comment-whitespace-inside': 'always',
        'scss/operator-no-unspaced': true,
        'scss/declaration-nested-properties': 'never',
        'scss/double-slash-comment-empty-line-before': [
          'always',
          {
            except: ['first-nested'],
          },
        ],
      },
    },
  ],
  rules: {
    'no-irregular-whitespace': true,
    'keyframes-name-pattern': null,
    'at-rule-no-unknown': null,
    'block-no-empty': null,
    'value-keyword-case': 'lower',
    'function-name-case': [
      'lower',
      {
        ignoreFunctions: [/.*/, /^get.*$/], //Force camelCase
      },
    ],
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
      },
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'blockless-after-blockless'],
        ignoreAtRules: ['else'],
      },
    ],
    'comment-empty-line-before': [
      'always',
      {
        ignore: ['stylelint-commands', 'after-comment'],
      },
    ],
    'prettier/prettier': true,
    'order/order': [
      'custom-properties',
      'dollar-variables',
      {
        type: 'at-rule',
        hasBlock: false,
      },
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
        name: 'keyframes',
        hasBlock: true,
      },
      {
        type: 'at-rule',
        name: 'content',
        hasBlock: false,
      },
    ],
    'order/properties-order': [
      [
        {
          groupName: 'Positions',
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: [
            'isolation',
            'position',
            'z-index',
            'top',
            'right',
            'bottom',
            'left',
            'inset',
            'inset-block',
            'inset-block-start',
            'inset-block-end',
            'inset-inline',
            'inset-inline-start',
            'inset-inline-end',
            'zoom',
            'transform',
            'transform-box',
            'transform-style',
            'transform-origin',
            'offset-path',
            'offset-distance',
            'offset-rotate',
          ],
        },
        {
          groupName: 'Layout',
          emptyLineBefore: 'threshold',
          noEmptyLineBetween: true,
          properties: [
            'content',
            'display',
            'float',
            'clear',
            'place-content',
            'place-items',
            'place-self',
            'align-self',
            'align-items',
            'align-content',
            'justify-content',
            'justify-items',
            'justify-self',
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
          groupName: 'Sizes and spacings',
          emptyLineBefore: 'threshold',
          noEmptyLineBetween: true,
          properties: [
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'margin-block',
            'margin-block-start',
            'margin-block-end',
            'margin-inline',
            'margin-inline-start',
            'margin-inline-end',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'padding-block',
            'padding-block-start',
            'padding-block-end',
            'padding-inline',
            'padding-inline-start',
            'padding-inline-end',
            'gap',
            'row-gap',
            'column-gap',
            'box-sizing',
            'aspect-ratio',
            'inline-size',
            'block-size',
            'min-block-size',
            'max-block-size',
            'min-inline-size',
            'max-inline-size',
          ],
        },
        {
          groupName: 'Typography',
          emptyLineBefore: 'threshold',
          noEmptyLineBetween: true,
          properties: [
            'font',
            'font-family',
            'font-size',
            'font-feature-settings',
            'font-variation-settings',
            'font-optical-sizing',
            'font-weight',
            'font-style',
            'font-display',
            'font-kerning',
            'font-variant',
            'font-variant-ligatures',
            'font-variant-caps',
            'font-variant-alternates',
            'font-variant-numeric',
            'font-variant-east-asian',
            'font-variant-position',
            'font-size-adjust',
            'font-stretch',
            'font-effect',
            'font-emphasize',
            'font-emphasize-position',
            'font-emphasize-style',
            'font-language-override',
            'font-synthesis',
            'font-smooth',
            'tab-size',
            'text-align',
            'text-align-last',
            'text-emphasis',
            'text-emphasis-color',
            'text-emphasis-style',
            'text-emphasis-position',
            'text-decoration',
            'text-decoration-color',
            'text-decoration-line',
            'text-decoration-style',
            'text-decoration-thickness',
            'text-decoration-skip-ink',
            'text-underline-position',
            'text-underline-offset',
            'text-indent',
            'text-justify',
            'text-outline',
            'text-overflow',
            'text-overflow-ellipsis',
            'text-overflow-mode',
            'text-shadow',
            'text-transform',
            'text-wrap',
            'text-size-adjust',
            'text-combine-upright',
            'text-orientation',
            'text-rendering',
            'letter-spacing',
            'line-height',
            'user-select',
            'vertical-align',
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
            'list-style',
            'list-style-position',
            'list-style-type',
            'list-style-image',
            'word-break',
            'word-spacing',
            'word-wrap',
            'white-space',
            'break-before',
            'break-inside',
            'break-after',
            'page-break-before',
            'page-break-inside',
            'page-break-after',
            'orphans',
            'max-zoom',
            'min-zoom',
            'user-zoom',
            'orientation',
            'paint-order',
          ],
        },
        {
          groupName: 'Apperance',
          emptyLineBefore: 'threshold',
          noEmptyLineBetween: true,
          properties: [
            'apperance',
            'visibility',
            'opacity',
            'color',
            'color-scheme',
            'background',
            'background-color',
            'background-image',
            'background-repeat',
            'background-repeat-x',
            'background-repeat-y',
            'background-attachment',
            'background-position',
            'background-position-x',
            'background-position-y',
            'background-clip',
            'background-origin',
            'background-size',
            'background-blend-mode',
            'border',
            'border-color',
            'border-style',
            'border-width',
            'border-top',
            'border-top-color',
            'border-top-style',
            'border-top-width',
            'border-right',
            'border-right-color',
            'border-right-style',
            'border-right-width',
            'border-bottom',
            'border-bottom-color',
            'border-bottom-style',
            'border-bottom-width',
            'border-left',
            'border-left-color',
            'border-left-style',
            'border-left-width',
            'border-block',
            'border-block-color',
            'border-block-start',
            'border-block-start-color',
            'border-block-start-style',
            'border-block-start-width',
            'border-block-end',
            'border-block-end-color',
            'border-block-end-style',
            'border-block-end-width',
            'border-inline',
            'border-inline-color',
            'border-inline-start',
            'border-inline-start-color',
            'border-inline-start-style',
            'border-inline-start-width',
            'border-inline-end',
            'border-inline-end-color',
            'border-inline-end-style',
            'border-inline-end-width',
            'border-radius',
            'border-start-start-radius',
            'border-start-end-radius',
            'border-end-start-radius',
            'border-end-end-radius',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius',
            'border-image',
            'border-image-source',
            'border-image-slice',
            'border-image-width',
            'border-image-outset',
            'border-image-repeat',
            'outline',
            'outline-color',
            'outline-style',
            'outline-width',
            'outline-offset',
            'box-shadow',
            'mix-blend-mode',
            'accent-color',
            'forced-color-adjust',
            'box-decoration-break',
            'backface-visibility',
            'object-fit',
            'object-position',
            'image-orientation',
            'clip',
            'clip-path',
            'filter',
            'backdrop-filter',
          ],
        },
        {
          groupName: 'SVG Presentation',
          emptyLineBefore: 'threshold',
          noEmptyLineBetween: true,
          properties: [
            'alignment-baseline',
            'baseline-shift',
            'dominant-baseline',
            'text-anchor',
            'cx',
            'cy',
            'd',
            'r',
            'rx',
            'ry',
            'fill',
            'fill-opacity',
            'fill-rule',
            'flood-color',
            'flood-opacity',
            'stop-color',
            'stop-opacity',
            'stroke',
            'stroke-dasharray',
            'stroke-dashoffset',
            'stroke-linecap',
            'stroke-linejoin',
            'stroke-miterlimit',
            'stroke-opacity',
            'stroke-width',
            'vector-effect',
            'color-interpolation',
            'color-interpolation-filters',
            'color-profile',
            'color-rendering',
            'image-rendering',
            'lighting-color',
            'marker-start',
            'marker-mid',
            'marker-end',
            'mask',
            'mask-type',
            'shape-rendering',
            'clip-rule',
          ],
        },
        {
          groupName: 'Transform, transition and animations',
          emptyLineBefore: 'threshold',
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
      ],
      {
        unspecified: 'bottomAlphabetical',
        emptyLineBeforeUnspecified: 'threshold',
        emptyLineMinimumPropertyThreshold: 20,
      },
    ],
  },
};
```
```json [.prettierrc]
{
  "arrowParens": "always",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "embeddedLanguageFormatting": "auto",
  "printWidth": 100,
  "semi": true,
  "singleAttributePerLine": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false,
  "vueIndentScriptAndStyle": false
}
```
``` [.editorconfig]
[*.{js,jsx,ts,tsx,vue}]
indent_style = space
indent_size = 2
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true
max_line_length = 100
```
```json [package.json]
// Sempre verifique se há versões mais recentes das dependências
{
  "scripts": {
    "prepare": "husky",
    "lint:fix": "pnpm lint --fix",
    "lint:stylelint": "stylelint **/*.{css,scss,vue} --cache --cache-location ./node_modules/.cache/stylelint/",
    "lint:prettier": "prettier **/*.{css,scss,vue} --config ./.prettierrc --ignore-path ./.prettierignore --cache",
    "lint:styles": "pnpm lint:prettier --check && pnpm lint:stylelint",
    "lint:styles:fix": "pnpm lint:prettier --write && pnpm lint:stylelint --fix",
  },
  "devDependencies": {
    "husky": "^9.1.7",
    "lint-staged": "^15.5.0",
    "postcss-html": "^1.8.0",
    "postcss-scss": "^4.0.9",
    "prettier": "^3.5.3",
    "stylelint": "^16.16.0",
    "stylelint-config-html": "^1.1.0",
    "stylelint-order": "^6.0.4",
    "stylelint-prettier": "^5.0.3",
    "stylelint-scss": "^6.11.1",
  },
  "lint-staged": {
    "**/*.{css,scss,vue}": [
      "pnpm lint:styles:fix"
    ]
  },
}
```
``` [husky/pre-commit]
npx lint-staged
```
```json [.vscode/settings.json]
{
    "[css]": {
        "editor.defaultFormatter": "stylelint.vscode-stylelint",
        "editor.formatOnSave": false,
        "editor.codeActionsOnSave": {
            "source.fixAll.stylelint": "explicit"
        }
    },
    "[scss]": {
        "editor.defaultFormatter": "stylelint.vscode-stylelint",
        "editor.formatOnSave": false,
        "editor.codeActionsOnSave": {
            "source.fixAll.stylelint": "explicit"
        }
    },
    "[vue]": {
        "editor.formatOnSave": false,
        "editor.codeActionsOnSave": {
            "source.fixAll.stylelint": "explicit"
        }
    },
    "css.validate": false,
    "less.validate": false,
    "scss.validate": false,
    "stylelint.validate": [
        "css",
        "vue",
        "scss"
    ],
    "editor.formatOnSave": true,
}
```
:::

:::info Observação  
Esta lista pode ser alterada de acordo com a evolução das soluções disponíveis no mercado.  
:::
