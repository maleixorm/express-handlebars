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

    const auth = true;

    const approved = false;

    res.render('home', { user: user, auth, approved });
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
})

app.listen(3000, () => {
    console.log("App funcionando!");
});