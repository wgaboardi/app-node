const dotenv = require('dotenv')
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const www = process.env.WWW || './';
const projects = require("./projects")
const database = process.env.MONGODB_URL;

dotenv.config();
app.use(express.static(www));
app.use(express.json());
app.use(express.urlencoded(false));
console.log(`serving ${www}`);

app.use("/projects", projects)
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
