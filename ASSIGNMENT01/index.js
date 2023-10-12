const express = require('express');
const app = express();
const port = 3000;

const handlebars = require('express-handlebars');
app.set('view engine', 'hbs');
app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'planB',
    partialsDir: __dirname + '/views/partials/'
}));

app.use(express.static('public'))

fakeApi = () => {
return [
        {
            name: 'Katarina',
            lane: 'midlaner'
        },
        {
            name: 'Jayce',
            lane: 'toplaner'
        },
        {
            name: 'Heimerdinger',
            lane: 'toplaner'
        },
        {
            name: 'Zed',
            lane: 'midlaner'
        },
        {
            name: 'Azir',
            lane: 'midlaner'
        }
];
}

app.get('/', (req, res) => {
    res.render('home', {layout: 'index', suggestedChamps: fakeApi(), listExists: true});
});


app.get('/project', (req, res) => {
    res.render('project', {layout: 'index', suggestedChamps: fakeApi(), listExists: true});
});
app.get('/contact', (req, res) => {
    res.render('contact', {layout: 'index', suggestedChamps: fakeApi(), listExists: true});
});


app.get('/blog', (req, res) => {
    res.render('blog', {layout: 'index', suggestedChamps: fakeApi(), listExists: true});
});



app.listen(port, () => console.log(`App listening to port ${port}`));