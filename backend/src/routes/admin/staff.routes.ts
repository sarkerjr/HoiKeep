import express from 'express';

import {
  createStaff,
  getStaffs,
  getStaff,
  updateStaff,
  removeStaff,
} from '@/controllers/admin/staff.controllers';

const router = express.Router();

router.get('/', getStaffs);
router.get('/:id', getStaff);
router.post('/', createStaff);
router.put('/', updateStaff);
router.delete('/', removeStaff);

export default router;
