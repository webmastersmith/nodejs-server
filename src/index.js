import 'dotenv/config';
import cors from 'cors'
import express from 'express';
 
const app = express();

app.use(cors())
 
app.get('/', (req, res) => {
    res.send('Hello World!!!!');
});

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
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
 
console.log(process.env.MY_SECRET);