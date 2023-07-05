import express from 'express';

import {
  createOperator,
  getOperators,
  getOperator,
  updateOperator,
  removeOperator,
} from '@/controllers/admin/operator.controllers';

const router = express.Router();

router.get('/', getOperators);
router.get('/:id', getOperator);
router.post('/', createOperator);
router.put('/', updateOperator);
router.delete('/', removeOperator);

export default router;
