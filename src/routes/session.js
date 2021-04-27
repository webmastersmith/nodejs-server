import {Router} from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send(JSON.stringify(Object.values(req.context.models.users[req.context.me.id])) + '\n');
});

export default router