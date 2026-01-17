import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'mfi-recover-backend' });
});

export default router;
