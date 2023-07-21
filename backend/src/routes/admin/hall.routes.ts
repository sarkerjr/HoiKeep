import express from 'express';

import {
  createHall,
  getHalls,
  getHall,
  updateHall,
} from '@/controllers/admin/hall.controllers';

const router = express.Router();

router.get('/', getHalls);
router.get('/:id', getHall);
router.post('/', createHall);
router.put('/', updateHall);

export default router;
