const express = require("express");
const path = require("path");

var app = express();

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/whitney.woff", function(req, res) {
	res.sendFile(path.join(__dirname, "whitney.woff"));
});

app.listen(3000, function() {
	console.log("Ready");
});