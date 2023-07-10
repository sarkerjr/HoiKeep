import express from 'express';

import {
  createSeat,
  getSeats,
  getSeat,
  updateSeat,
  removeSeat,
} from '@/controllers/admin/seat.controllers';

const router = express.Router();

router.get('/', getSeats);
router.get('/:id', getSeat);
router.post('/', createSeat);
router.put('/', updateSeat);
router.delete('/', removeSeat);

export default router;
