import express from 'express';

import {
  createHall,
  getHalls,
  getHall,
  updateHall,
} from '@/controllers/admin/hall.controllers';

import {
  validateCreateHall,
  validateGetHall,
  validateUpdateHall,
} from '@/validators/hall.validators';

const router = express.Router();

router.get('/', getHalls);
router.get('/:id', validateGetHall, getHall);
router.post('/', validateCreateHall, createHall);
router.put('/', validateUpdateHall, updateHall);

export default router;
