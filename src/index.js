import express from'express';
import morgan from 'morgan';
import path  from 'path';
import { engine } from 'express-handlebars';
import { extname } from 'path';
import router from'./routers/index';

// Create App
const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'publish')));

// Template engine

app.engine(
    'hbs',
    engine({
        extname: 'hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Router init
router(app);

app.listen(port, () => {
    console.log(`App Learning English at http://localhost:${port}`);
});

// "start": "nodemon --inspect src/index.js",


  
  
   
  