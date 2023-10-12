const express = require('express');
const app = express();
const port = 3000;

const handlebars = require('express-handlebars');
const indexRouter = require('./routers/index');

app.set('view engine', 'hbs');
app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'planB',
    partialsDir: __dirname + '/views/partials/'
}));

app.use(express.static('public'))

app.use('/', indexRouter);






app.listen(port, () => console.log(`App listening to port ${port}`));