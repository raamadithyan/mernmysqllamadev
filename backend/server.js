const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "willpower",
	database: "test",
});

app.get("/", (req, res) => {
	res.json("dala lama");
});

app.get("/books", (req, res) => {
	const q = " SELECT * FROM test.books";
	db.query(q, (err, data) => {
		if (err) {
			console.log("????");
		}
		return res.json(data);
	});
});

app.listen(3000);
