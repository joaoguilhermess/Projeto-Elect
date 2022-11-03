import express from "express";
import fetch from "node-fetch";
import path from "path";
import url from "url";

var app = express();

app.get("/", function(req, res) {
	res.sendFile(path.join(path.dirname(url.fileURLToPath(import.meta.url)), "index.html"));
});

app.get("/votos/\*/\*", async function(req, res) {
	try {
		var code = req.url.split("/")[3];
		var turno = req.url.split("/")[2];

		var f = await fetch(
		"https://resultados.tse.jus.br/oficial/ele2022/" +
			turno + "/dados-simplificados/" + code + "/" +
			code + "-c0001-e000" + turno + "-r.json"
		);
		var json = await f.json();
		
		json.cand.sort(function(a, b) {
			return parseFloat(b.vap) - parseFloat(a.vap);
		});

		res.send(JSON.stringify(json));

		return
	} catch (e) {console.log(e)}
});

app.get("/whitney.woff", function(req, res) {
	res.sendFile(path.join(path.dirname(url.fileURLToPath(import.meta.url)), "whitney.woff"));
});

app.listen(3000, function() {
	console.log("Ready");
});
