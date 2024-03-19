import express from 'express';
import messagesRouter from './routers/messages';

const app = express();
const port = 7000;

app.use('/messages', messagesRouter);

app.listen(port, () => {
  console.log(`server started on ${port} port`);
});
