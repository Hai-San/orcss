# Tools
Nesta pasta ficam as funções que são utilizadas globalmente

## Especificações
- São funções utilizadas para gerar valores que sejam utilizados pelas propriedades do CSS.
- Podem existir funções em outros arquivos, porém devem ser exclusivamente utilizadas nos mesmos. Caso a função seja utilizada em mais de um arquivo, ela deve ser inserida nesta pasta.
- Essa pasta também pode ser nomeada de `functions`
- Aqui não tem CSS (seletores, propriedades)

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