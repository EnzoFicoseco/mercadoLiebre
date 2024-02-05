const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../src/views'));


const homeRoute = require('./routes/homeRoutes');

app.use('/', homeRoute);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server up on port: http://localhost:${PORT}`));
