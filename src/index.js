import express from'express';
import morgan from 'morgan';
import path  from 'path';
import { engine } from 'express-handlebars';
import { extname } from 'path';
import router from'./routers/index.js';
import { fileURLToPath } from 'url';
import { error } from 'console';


// Create App
const app = express();
const port = 3000;

// Create __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// HTTP logger
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'publish')));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Có thứ gì đó đã bị hỏng !")
});

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


  
  
   
  