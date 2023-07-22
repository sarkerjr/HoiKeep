import express from 'express';

import {
  createDesignation,
  getDesignations,
  getDesignation,
  updateDesignation,
  removeDesignation,
} from '@/controllers/admin/designation.controllers';

const router = express.Router();

router.get('/', getDesignations);
router.get('/:id', getDesignation);
router.post('/', createDesignation);
router.put('/', updateDesignation);
router.delete('/', removeDesignation);

export default router;
