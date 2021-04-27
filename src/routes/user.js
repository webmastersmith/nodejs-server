import {Router} from 'express'

const router = Router()

// get request
router.get('/', (req, res) => {
    res.json(req.context.models.users);
});
router.get('/:userId', (req, res) => {
    res.json(req.context.models.users[req.params.userId]);
});
router.delete('/:userId', (req, res) => {
    return res.send(`DELETE HTTP method on user/${req.params.userId} resource\n`);
  });
  
  export default router