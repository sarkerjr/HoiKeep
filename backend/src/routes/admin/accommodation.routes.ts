import express from 'express';

import {
  createAccommodation,
  getAccommodations,
  getAccommodation,
  updateAccommodation,
  removeAccommodation,
} from '@/controllers/admin/accommodation.controllers';

const router = express.Router();

router.get('/', getAccommodations);
router.get('/:id', getAccommodation);
router.post('/', createAccommodation);
router.put('/', updateAccommodation);
router.delete('/', removeAccommodation);

export default router;
