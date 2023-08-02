import express from 'express';

import { createFees, getFeesDue } from '@/controllers/admin/fee.controllers';

const router = express.Router();

router.post('/', createFees);
router.get('/due', getFeesDue);

export default router;
