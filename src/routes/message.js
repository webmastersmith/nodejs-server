import {Router} from 'express'
import {v4} from 'uuid'
const router = Router()

router.get('/', (req, res) => {
    res.send(JSON.stringify(req.context.models.messages) + '\n');
});
router.get('/:messageId', (req, res) => {
    res.send(JSON.stringify(req.context.models.messages[req.params.messageId]) + '\n');
});

// post request
router.post('/', (req, res) => {
    const id = v4();
    const message = {
      id,
      text: req.body.text,
      userId: req.context.me.id,
      userId: req.context.me.username,
    }
    req.context.models.messages[id] = message
    return res.send(message);
  });
  
  
  // delete messages
  router.delete('/:messageId', (req, res) => {
    let {
      [req.params.messageId]: message,
      ...otherMessages
    } = req.context.models.messages;

    req.context.models.messages = otherMessages;
   
    return res.send(message);
  });

  export default router
  