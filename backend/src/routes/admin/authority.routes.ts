import express from 'express';

import { RoleType } from '@/utils/enums';
import { checkRoles } from '@/middleware/role.middleware';

import {
  createAuthority,
  getAuthorities,
  getAuthority,
  updateAuthority,
  removeAuthority,
} from '@/controllers/admin/authority.controllers';

const router = express.Router();

router.get(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR, RoleType.STAFF]),
  getAuthorities
);

router.get(
  '/:id',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR, RoleType.STAFF]),
  getAuthority
);

router.post('/', checkRoles([RoleType.AUTHORITY]), createAuthority);

router.put('/', checkRoles([RoleType.AUTHORITY]), updateAuthority);

router.delete('/', checkRoles([RoleType.AUTHORITY]), removeAuthority);

export default router;
