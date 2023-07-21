import express from 'express';

import {
  createPosition,
  getPositions,
  getPosition,
  updatePosition,
  removePosition,
} from '@/controllers/admin/position.controllers';

const router = express.Router();

router.get('/', getPositions);
router.get('/:id', getPosition);
router.post('/', createPosition);
router.put('/', updatePosition);
router.delete('/', removePosition);

export default router;
