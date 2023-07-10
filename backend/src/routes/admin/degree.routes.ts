import express from 'express';

import {
  createDegree,
  getDegrees,
  getDegree,
  updateDegree,
  removeDegree,
} from '@/controllers/admin/degree.controllers';

const router = express.Router();

router.get('/', getDegrees);
router.get('/:id', getDegree);
router.post('/', createDegree);
router.put('/', updateDegree);
router.delete('/', removeDegree);

export default router;
