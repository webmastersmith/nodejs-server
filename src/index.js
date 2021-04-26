import 'dotenv/config';
import express from 'express';
 
const app = express();
 
app.listen(process.env.PORT, () =>
console.log(`Example app listening on port ${process.env.PORT}!`),
);

console.log('Hello Node.js project.');
 
console.log(process.env.MY_SECRET);