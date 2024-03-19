import express, { Router } from 'express';
import { promises as fs } from 'fs';

const messageRouter: Router = express.Router();
const messagesPath = './messages';

messageRouter.use(express.json());

messageRouter.post('/', async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(404).json({error: 'Not found'})
  }

  const datetime = new Date().toISOString();
  const fileName = `${datetime}.txt`;
  const filePath = `${messagesPath}/${fileName}`;

  try {
    await fs.writeFile(filePath, JSON.stringify({ message, datetime }), 'utf-8');
    res.status(201).json({ message, datetime });
  } catch (error) {
    res.status(500).json({ error: 'Messages could not be read' });
  }
});


export default messageRouter;
