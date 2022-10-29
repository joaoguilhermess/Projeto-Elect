import fetch from "node-fetch";

fetch("https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/ac/ac-c0001-e000544-r.json").then(function(res) {
	res.json().then(function(json) {
		console.log(json);
	});
});