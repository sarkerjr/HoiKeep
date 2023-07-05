import express from 'express';

import {
  createAuthority,
  getAuthorities,
  getAuthority,
  updateAuthority,
  removeAuthority,
} from '@/controllers/admin/authority.controllers';

const router = express.Router();

router.get('/', getAuthorities);
router.get('/:id', getAuthority);
router.post('/', createAuthority);
router.put('/', updateAuthority);
router.delete('/', removeAuthority);

export default router;
