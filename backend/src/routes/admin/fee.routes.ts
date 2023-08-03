import express from 'express';

import {
  createFees,
  getFees,
  getFeesDue,
  updateFees,
  removeFees,
} from '@/controllers/admin/fee.controllers';

const router = express.Router();

router.post('/', createFees);
router.get('/', getFees);
router.get('/due', getFeesDue);
router.put('/', updateFees);
router.delete('/', removeFees);

export default router;
