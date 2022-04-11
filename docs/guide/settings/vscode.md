# VSCode
Como as configurações do ORCSS são um padrão fixo para o projeto, o ideal é ter uma configuração do VSCode exclusiva para que todos os desenvolvedores do projeto sigam o mesmo padrão. Essa configuração é conhecida com `workspace` dentro do VSCode.

[Documentação oficial](https://code.visualstudio.com/docs/getstarted/settings)

Para fazer isso é bem simples:
- Crie a pasta `.vscode` dentro da raiz do projeto
- Dentro da pasta `.vscode` crie crie os arquivos `extensions.json` e `settings.json`

Exemplo de estrutura:

📂my-project\
 ┣ 📂.vscode\
 ┃ ┣ 📜extensions.json\
 ┃ ┣ 📜settings.json

Ambos os arquivos são gerados automaticamente se você adicionar uma extensão como recomendada ou adicionar uma configuração de workspace pelo painel do VSCode.

## extensions.json
Este arquivo armazena uma lista de todas as extensões que são recomendadas para o projeto.

Para adicionar uma recomendação é só ir na lista de extensões já instaladas no VSCode, clicar na engrenagem da extensão e clicar na opção de adicionar extensão nas recomendações do projeto, assim o ID da extensão é adicionado nas recomendações. 

Exemplo:
```json
{
	"recommendations": [
		"johnsoncodehk.volar",
		"editorconfig.editorconfig",
		"stylelint.vscode-stylelint",
	]
}
```

## settings.json
Este arquivo armazena todas as configurações exclusivas do projeto que serão utilizadas pelo VSCode.

Exemplo:
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
	"stylelint.validate": [
		"css",
		"scss",
		"vue"
	],
}
```