import express from 'express';

import {
  createAuthority,
  getAuthorities,
  updateAuthority,
  removeAuthority,
} from '@services/admin/authority.services';

const router = express.Router();

router.get('/', getAuthorities);
router.post('/', createAuthority);
router.put('/', updateAuthority);
router.delete('/', removeAuthority);

export default router;