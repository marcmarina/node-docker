import express from 'express';

const app = express();

app.use('/', (req, res) => {
  res.send('<h2>Hello World!</h2>');
});

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
