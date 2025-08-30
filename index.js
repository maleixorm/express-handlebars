import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    const user = {
        name: "Marcos",
        lastname: "Marques"
    }
    res.render('home', { user: user });
});

app.listen(3000, () => {
    console.log("App funcionando!");
});