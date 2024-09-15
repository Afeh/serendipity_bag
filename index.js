import express from "express"
import bodyParser from "body-parser"


const app = express();
const port = 3000;

const year = new Date().getFullYear();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
	res.render("index.ejs", {year: year});
});

app.post("/submit", (req, res) => {
	const blogTitle = req.body.title;
	const blogText = req.body.blogText;


	res.render("index.ejs", {blogTitle: blogTitle, blogText: blogText, year: year});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});