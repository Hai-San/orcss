# Stylelint - Vue
Configurações especificas que devem ser feitas quando queremos utilizar stylelint com Vue.js

:::warning Atenção
Antes de seguir com este guia tenha certeza de ter aplicado as configurações padrões do styelint [aqui](stylelint.md)
:::

## VSCode
```json
// settings.json
{
	"[vue]": { // Extensão do arquivo
        "editor.codeActionsOnSave": {
            "source.fixAll.stylelint": true,
        },
    },
	"stylelint.validate": [
		//...
		"vue"
	]
}
```

## .stylelintrc
Para que o stylelint funcione corretamente com Vue.js são necessárias algumas bibliotecas auxiliares:
  - [postcss-scss](https://github.com/postcss/postcss-scss#readme) - Apenas se estiver utilizando SASS
  - [postcss-safe-parser](https://github.com/postcss/postcss-safe-parser#readme)
  - [postcss-html](https://github.com/ota-meshi/postcss-html#readme)

Após a instalação finalizar, ensira a seguinte configuração no stylelint.

```javascript
// .stylelintrc.js
module.exports = {
	plugins: [
		//...
	],
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
		//...
	}
};

```