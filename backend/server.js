const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "willpower",

	database: "test",
});

app.get("/", (req, res) => {
	res.json("dala lama");
});

app.post("/books", (req, res) => {
	const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES (?)";
	const value = ["Leena", "mycutie", "heart.jpg"];

	db.query(q, [value], (err, data) => {
		if (err) {
			res.send(err);
		}
		return res.json(data);
	});
});

app.get("/books", (req, res) => {
	const q = " SELECT * FROM books";
	db.query(q, (err, data) => {
		if (err) {
			res.send(err);
		}
		return res.json(data);
	});
});

app.listen(3000);
