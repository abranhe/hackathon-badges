import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import { createEngine } from 'express-react-views';
import routes from './routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use('/', routes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', createEngine());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { title: 'Hackathon Badges' });
});

app.use((req, res, next) => {
  res.status(404).render('404');
});

app.listen(3000, () => console.log('Listen on ports http://localhost:3000'));
