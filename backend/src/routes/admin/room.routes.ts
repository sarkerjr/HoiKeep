import express from 'express';

import {
  createRoom,
  getRooms,
  getRoom,
  updateRoom,
  removeRoom,
} from '@/controllers/admin/room.controllers';

const router = express.Router();

router.get('/', getRooms);
router.get('/:id', getRoom);
router.post('/', createRoom);
router.put('/', updateRoom);
router.delete('/', removeRoom);

export default router;
