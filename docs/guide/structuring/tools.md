# Tools
Nesta pasta ficam as funções que são utilizadas globalmente

## Regras
- Aqui não tem CSS
- Essas funções normalmente são utilizadas para gerar algum valor que seja utilizado para alguma propriedade do CSS
- Funções podem ser criadas em outros arquivos, porém devem ser exclusivamente utilizadas apenas no arquivo em que foram criadas. Caso exista a necessidade de ser utilizada em mais de um arquivo, elas devem ser inseridas nesta pasta.
- Essa pasta também pode ser nomeada de `functions`

## Exemplos
Função utilizada para converter um valor em `px` para `vh`
```scss
// tools/convertPxToVh.scss
@use 'sass:math';

@function pxvh ($pixels) {
	$screenVerticalHeight: math.div(937, 100);
	$result: math.div($pixels, $screenVerticalHeight);

	@return $result + vh;
}

// pages/home.scss
@use 'tools/convertPxToVh.scss' as *;

.container {
	margin-top: pxvh(40); // return 4,268943436499466vh
}
```