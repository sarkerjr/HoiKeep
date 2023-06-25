import express from 'express';

import { createHall } from '@services/admin/hall.services';

const router = express.Router();

router.post('/create', createHall);

export default router;
