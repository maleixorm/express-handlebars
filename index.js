import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));

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

    const items = ["Item A", "Item B", "Item C"];
    
    res.render('dashboard', {items});
})

app.get('/post', (req, res) => {
    const post = {
        title: "Aprender Node.JS",
        category: "Programming",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, dolores expedita. Quas delectus consequatur officia? Ducimus ratione ex blanditiis atque dolore! Nemo, illum suscipit consequuntur voluptatum ut sapiente quos est architecto tempore culpa quisquam, libero accusantium officiis minus praesentium repellat? Inventore minima quidem, sunt odio ut quaerat eum explicabo iure!",
        comments: 4
    }

    res.render('blogpost', { post });
});

app.get('/blog', (req, res)=> {
    const posts = [
        {
            title: "Aprender Node.JS",
            category: "Programação",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, dolores expedita.",
            comments: 4
        },
        {
            title: "Aprender PHP",
            category: "Programação",
            body: "Lorem ipsum dolor sit amet consectetur.",
            comments: 7
        },
        {
            title: "Aprender Java",
            category: "Programação",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            comments: 43
        }
    ]

    res.render('blog', { posts });
});

app.listen(3000, () => {
    console.log("App funcionando!");
});