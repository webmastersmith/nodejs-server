import 'dotenv/config';
import cors from 'cors'
import {v4} from 'uuid'
import express from 'express';
import {users, messages} from './db'
 
const app = express();

app.use(cors())
 
app.use(express.static('public'))

// next middleware
app.use((req,res,next) => {
  req.me = users[1]
  next()
})

// req.body.text is turned into JSON data for you, otherwise you get the whole html page.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// get request
app.get('/users', (req, res) => {
    res.send(JSON.stringify(Object.values(users)) + '\n');
});
app.get('/users/:userId', (req, res) => {
    res.send(JSON.stringify(users[req.params.userId]) + '\n');
});
app.get('/messages', (req, res) => {
    res.send(JSON.stringify(Object.values(messages)) + '\n');
});
app.get('/messages/:messageId', (req, res) => {
    res.send(JSON.stringify(messages[req.params.messageId]) + '\n');
});



// post request
app.post('/messages', (req, res) => {
  const id = v4();
  const message = {
    id,
    text: req.body.text,
    userId: req.me.id,
    userId: req.me.username,
  }
  messages[id] = message
  return res.send(message);
});






app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});
app.put('/users/:userId', (req, res) => {
  return res.send(`Received a PUT Wildcard HTTP method ${req.params.userId}\n`);
});
  
app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});
app.delete('/users/:userId', (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource\n`);
});

app.listen(process.env.PORT, () =>
console.log(`Example app listening on port ${process.env.PORT}!`),
);


console.log('Hello Node.js project.');
// console.log(v4())
 
console.log(process.env.MY_SECRET);