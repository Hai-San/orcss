# Estruturação
O modelo de estrutura de pastas e arquivos utilizado no ORCSS tem como principal objetivo a escalabilidade. Os seguintes pontos são o que fazem essa estrutura ser eficiente.

* **Arquivos componentizados**: Cada arquivo CSS tem apenas um objetivo especifico. Dessa forma é mais fácil entender o que cada arquivo representa apenas pelo seu nome e localização dentro das pastas.

* **Pequenos blocos de código**: Componentizando o CSS consequentemente os arquivos terão menos código. Isso resulta em uma manutenção mais simplificada, com menos riscos de gerar conflitos de especificidade e código morto.
  
* **Código reutilizável**: Utilizando o SASS é possível reaproveitar pequenos trechos de código, assim evitando código repetido.

* **Design System**: Independente de quantos projetos ou marcas existam o CSS vai escalar com o Design System.