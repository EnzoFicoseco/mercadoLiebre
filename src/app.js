// ************ Require's ************
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const methodOverride = require("method-override") // Esto sirve para poder usar los métodos PUT y DELETE

// ************ Express - no tocar ************
const app = express();

// ************ Middlewares - no tocar ************
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false}));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

// ************ Template Engine - no tocar ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../src/views')); // define la ubicación de la carpeta Vistas

// ************ Route System require and use（）************
const homeRoute = require('./routes/homeRoutes');
app.use('/', homeRoute);

// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server up on port: http://localhost:${PORT}`));
