import express from 'express';

import {
  createNotice,
  getNotices,
  updateNotice,
  removeNotice,
} from '@services/admin/notice.services';

const router = express.Router();

router.get('/', getNotices);
router.post('/', createNotice);
router.put('/', updateNotice);
router.delete('/', removeNotice);

export default router;
