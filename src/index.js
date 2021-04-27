import 'dotenv/config';
import cors from 'cors'
import express from 'express';
import models from './models'
import routes from './routes'
 
const app = express();

app.use(cors())
app.use(express.static('public'))
// next middleware
app.use((req,res,next) => {
  req.context = {
    models,
    me: models.users[1]
  }
  next()
})
// req.body.text is turned into JSON data for you, otherwise you get the whole html page.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// modules
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

// app.put('/', (req, res) => {
//   return res.send('Received a PUT HTTP method');
// });
// app.put('/users/:userId', (req, res) => {
//   return res.send(`Received a PUT Wildcard HTTP method ${req.params.userId}\n`);
// });
  

app.listen(5500, () =>
console.log(`Example app listening on port ${process.env.PORT}!`),
);
