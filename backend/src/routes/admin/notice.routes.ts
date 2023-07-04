import express from 'express';

import {
  createNotice,
  getNotices,
  updateNotice,
  removeNotice,
} from '@/controllers/admin/notice.controllers';

const router = express.Router();

router.get('/', getNotices);
router.post('/', createNotice);
router.put('/', updateNotice);
router.delete('/', removeNotice);

export default router;
