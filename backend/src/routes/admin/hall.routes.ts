import express from 'express';

import {
  createHall,
  getHalls,
  updateHall,
} from '@services/admin/hall.services';

const router = express.Router();

router.get('/', getHalls);
router.post('/', createHall);
router.put('/', updateHall);

export default router;
