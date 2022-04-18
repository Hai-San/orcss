# Tools
Aqui ficam todos os arquivos com funções ou mixins que são utilizados globalmente. Não devemos inserir nenhum tipo de seletor diretamente no corpo do arquivo (classes, IDs, tags etc...). Os seletores só poderão ser retornados dentro de algum mixin ou função.

## Regras
Mixins e funções podem ser criados em outros arquivos, porém devem ser exclusivamente utilizados apenas no arquivo em que foram criados. Caso exista a necessidade de ser utilizado em mais de um arquivo, eles devem ser inseridos nesta pasta.