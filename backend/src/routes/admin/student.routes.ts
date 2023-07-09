import express from 'express';

import {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  removeStudent,
} from '@/controllers/admin/student.controllers';

const router = express.Router();

router.get('/', getStudents);
router.get('/:id', getStudent);
router.post('/', createStudent);
router.put('/', updateStudent);
router.delete('/', removeStudent);

export default router;
