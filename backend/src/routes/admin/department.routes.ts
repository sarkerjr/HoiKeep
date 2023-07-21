import express from 'express';

import {
  createDepartment,
  getDepartments,
  getDepartment,
  updateDepartment,
} from '@/controllers/admin/department.controllers';

const router = express.Router();

router.get('/', getDepartments);
router.get('/:id', getDepartment);
router.post('/', createDepartment);
router.put('/', updateDepartment);

export default router;
