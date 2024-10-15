import express from 'express';

const app = express();
const port = process.env.PORT || 5001;  

app.listen(port, () => {
    console.log(`Server running on http:localhost:3000/${port}`);
})

app.get('/', (req, res) => {
    res.send('Hello from the Node.js backend!');
  });